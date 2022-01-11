import { Header } from '../components/Header';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { NewsItem } from '../components/NewsItem';

export default function Home() {
  return (
    <>
      <Header />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <LoadMoreButton />
    </>
  );
}
