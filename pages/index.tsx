import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>linkr</title>
        <meta name="description" content="all your links in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.menu}>
        <h1>
          link<a href="#">r.</a>
        </h1>
        <div>
        <a href='#'>join waiting list</a>
        <button>
          <img src="hamburger.png" alt="hamburger"/>
        </button>
        </div>
      </div> 

        <h1 className={styles.title}>
          All Your Links<br/>
          In One Place.
        </h1>
        <p className={styles.description}>
          A whole new way of connecting with your fans!
        </p>

        <div className={styles.grid}>
          <img src="/iphone.png" alt="iPhone Demo"/>
        </div>

        <form className={styles.form}>
          <input type="email" placeholder='Enter your email'/>
          <input type="submit" value="join waiting list"/>
        </form>
      </main>

      
    </div>
  )
}
