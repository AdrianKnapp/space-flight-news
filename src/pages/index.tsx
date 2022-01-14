import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useEffect, useState } from 'react';

import { Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { ArticleItem } from '../components/ArticleItem';
import { BackToTopButton } from '../components/BackToTopButton';
import { ArticleModal } from '../components/ArticleModal';

import api from '../services/api';

import { Article } from '../types/Article';

type HomeProps = {
  articles: Article[];
};

export default function Home({ articles }: HomeProps) {
  const router = useRouter();

  const [articlesList, setArticlesList] = useState(articles);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSearchParam, setCurrentSearchParam] = useState('');
  const [currentOrderParam, setCurrentOrderParam] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articlesNotFound, setArticlesNotFound] = useState(false);
  const [activeModalArticle, setActiveModalArticle] = useState<Article | null>(
    null,
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function searchArticles(searchQuery: string) {
    const orderUrlQueryParam = currentOrderParam
      ? `publishedAt:${currentOrderParam}`
      : '';
    const urlToQuery = `articles?_limit=10&title_contains=${searchQuery}&_start=${currentPage}&_sort=${orderUrlQueryParam}`;

    setIsLoading(true);
    try {
      const { data } = await api.get(urlToQuery);

      if (!data.length) {
        setArticlesNotFound(true);
        return;
      }
      setArticlesNotFound(false);

      if (currentPage) {
        const newArticlesList = [...articlesList, ...data];

        const removeDuplicatedItems = newArticlesList.filter(
          (value, index, self) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            index === self.findIndex((t) => t.id === value.id),
        );

        setArticlesList(removeDuplicatedItems);
      } else {
        setArticlesList([...data]);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!router.isReady) return;

    const { order, search } = router.query;

    const orderParam = order ? String(order) : '';
    const searchParam = search ? String(search) : '';

    if (orderParam) {
      setCurrentOrderParam(orderParam);

      if (currentOrderParam !== orderParam) {
        setArticlesList([]);
      }
    }

    if (searchParam !== currentSearchParam) {
      setCurrentPage(0);
      searchArticles(searchParam);
      setCurrentSearchParam(searchParam);
    }
  }, [router]);

  useEffect(() => {
    if (currentPage || currentOrderParam) searchArticles(currentSearchParam);
  }, [currentPage, currentOrderParam]);

  useEffect(() => {
    if (activeModalArticle) setModalIsOpen(true);
  }, [activeModalArticle]);

  useEffect(() => {
    if (!modalIsOpen) setActiveModalArticle(null);
  }, [modalIsOpen]);

  return (
    <>
      <Head>
        <title>Space Flight News</title>
        <meta
          name="description"
          content="If you wanna know about the latest news about space, this is the place to go."
        />
      </Head>
      <Header isLoading={isLoading} />
      {!articlesNotFound ? (
        <>
          {articlesList.map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              handleActiveModalArticle={setActiveModalArticle}
            />
          ))}
          <LoadMoreButton
            handleCurrentPage={setCurrentPage}
            currentPage={currentPage}
            isLoading={isLoading}
          />
          <ArticleModal
            article={activeModalArticle}
            modalIsOpen={modalIsOpen}
            handleModalIsOpen={setModalIsOpen}
          />
        </>
      ) : (
        <Text
          as="h3"
          fontWeight="bold"
          textAlign="center"
          fontSize={24}
          color="gray.700"
        >
          Articles not found.
        </Text>
      )}
      <BackToTopButton />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('articles?_limit=10');

  return {
    props: {
      articles: response.data,
    },
    revalidate: 60 * 5, // 3 minutes
  };
};
