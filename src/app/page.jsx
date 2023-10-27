import styles from './page.module.scss'
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
