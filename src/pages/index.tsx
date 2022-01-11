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

  function orderListBy(order: string) {
    const originalList = [...articlesList];

    if (order === 'ASC') {
      const orderASC = originalList.sort((dateA, dateB) => {
        const DateTimeA = new Date(dateA.publishedAt).getTime();
        const DateTimeB = new Date(dateB.publishedAt).getTime();

        return DateTimeA - DateTimeB;
      });

      setArticlesList(orderASC);
    } else {
      const orderDESC = originalList.sort((dateA, dateB) => {
        const DateTimeA = new Date(dateA.publishedAt).getTime();
        const DateTimeB = new Date(dateB.publishedAt).getTime();

        return DateTimeB - DateTimeA;
      });

      setArticlesList(orderDESC);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { order } = router.query;
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
  const response = await api.get('/articles?_limit=10');

  return {
    props: {
      articles: response.data,
    },
  };
};
