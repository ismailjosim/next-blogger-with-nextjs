import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {



  return (

    <div className={styles.container}>

      <Head>
        <title>Next Level Blogger</title>
        <meta name="description" content="Next Level Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <div className={styles.blogs}>
          <h3 className='blog_heading'>See all blogs Items here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet modi architecto ipsum commodi, fuga, hic voluptate, labore culpa ex asperiores amet dolorum excepturi repellat perferendis? Totam nulla aliquid cum quasi rem! Incidunt ipsa numquam quae fuga. Ex neque sit, dolorum explicabo qui ab molestiae accusantium a placeat ad magnam?
          </p>
        </div>
      </main>


    </div>
  )
}
