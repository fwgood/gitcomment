import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitComment</title>
        <meta name="description" content="Comment with Git" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to GitComment!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/fwgood"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by fwgood
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
