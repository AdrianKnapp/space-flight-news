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
  const [currentUrlToRequest, setCurrentUrlToRequest] = useState(
    'articles?_limit=10&title_contains=&_start=',
  );

  function orderListBy(order: string) {
    const originalList = [...articlesList];

    const orderedList = originalList.sort((dateA, dateB) => {
      const DateTimeA = new Date(dateA.publishedAt).getTime();
      const DateTimeB = new Date(dateB.publishedAt).getTime();

      return order === 'ASC' ? DateTimeA - DateTimeB : DateTimeB - DateTimeA;
    });

    setArticlesList(orderedList);
  }

  async function handleSearchArticles(url: string, urlHasPagination: boolean) {
    const { data } = await api.get(url);

    if (urlHasPagination) {
      setArticlesList([...articlesList, ...data]);
    } else {
      setArticlesList(data);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { order, _start, title_contains: search } = router.query;
      const urlHasPagination = !!_start;

      const urlToRequest = `articles?_limit=10&title_contains=${
        search || ''
      }&_start=${_start || ''}`;

      if (currentUrlToRequest !== urlToRequest) {
        setCurrentUrlToRequest(urlToRequest);
        handleSearchArticles(urlToRequest, urlHasPagination);
      }

      if (order && order.length > 0) {
        orderListBy(String(order));
      }
    }
  }, [router]);

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
      <LoadMoreButton />
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
