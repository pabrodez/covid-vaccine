import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Head>
        <title>UK vaccination tracker</title>
      </Head>

      <Header />

      <div className={styles.container}>      
        <main>
          {children}
        </main>        
      </div>

      <Footer />
    </>
  )
}
