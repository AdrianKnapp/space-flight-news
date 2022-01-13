import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { NewsItem } from '../components/NewsItem';

import api from '../services/api';

type Article = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
};

type HomeProps = {
  articles: Article[];
};

export default function Home({ articles }: HomeProps) {
  const router = useRouter();

  const [articlesList, setArticlesList] = useState(articles);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSearchParam, setCurrentSearchParam] = useState('');

  function orderList(order: string) {
    const originalList = [...articlesList];

    const orderedList = originalList.sort((dateA, dateB) => {
      const DateTimeA = new Date(dateA.publishedAt).getTime();
      const DateTimeB = new Date(dateB.publishedAt).getTime();

      return order === 'ASC' ? DateTimeA - DateTimeB : DateTimeB - DateTimeA;
    });
    setArticlesList(orderedList);
  }

  async function searchArticles(searchQuery: string) {
    const urlToQuery = `articles?_limit=10&title_contains=${searchQuery}&_start=${currentPage}`;

    const { data } = await api.get(urlToQuery);
    if (currentPage) {
      setArticlesList([...articlesList, ...data]);
    } else {
      setArticlesList([...data]);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!router.isReady) return;

    const { order, search } = router.query;

    const orderParam = order ? String(order) : '';
    const searchParam = search ? String(search) : '';

    if (orderParam) {
      orderList(orderParam);
    }

    if (searchParam !== currentSearchParam) {
      setCurrentPage(0);
      searchArticles(searchParam);
      setCurrentSearchParam(searchParam);
    }
  }, [router]);

  useEffect(() => {
    searchArticles(currentSearchParam);
  }, [currentPage]);

  return (
    <>
      <Header />
      {articlesList.map((article) => (
        <NewsItem
          key={article.id}
          title={article.title}
          imageUrl={article.imageUrl}
          newsSite={article.newsSite}
          summary={article.summary}
          publishedAt={article.publishedAt}
        />
      ))}
      <LoadMoreButton
        handleCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('articles?_limit=10');

  return {
    props: {
      articles: response.data,
    },
  };
};
