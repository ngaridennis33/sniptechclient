import styles from './page.module.scss'
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categorylist/CategoryList';
import Menu from '@/components/menu/Menu';
import CardList from '@/components/cardlist/CardList';
import Banner from '@/components/Banner/Banner';


export const metadata = {
  title: "SnipTech Homepage",
  description: "The best blog site in kenya",
};

export default function Home() {

  return (
  <div className={styles.container}>
      <Banner/>
  </div>
  )
}
