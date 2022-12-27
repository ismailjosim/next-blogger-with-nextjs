import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Level Blogger</title>
        <meta name="description" content="Next Level Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainNav}>
        <h2>
          <Link href='/'>NextBlogger</Link>
        </h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      </nav>


      <main className={styles.main}>
        <div className={styles.blogs}>
          <h3>See all blogs Items here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet modi architecto ipsum commodi, fuga, hic voluptate, labore culpa ex asperiores amet dolorum excepturi repellat perferendis? Totam nulla aliquid cum quasi rem! Incidunt ipsa numquam quae fuga. Ex neque sit, dolorum explicabo qui ab molestiae accusantium a placeat ad magnam?
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <h3>Footer Bar</h3>
      </footer>
    </div>
  )
}
