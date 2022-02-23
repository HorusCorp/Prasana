import Head from 'next/head'
import Image from 'next/image'
import AnimatedCards from '../Components/AnimatedCards'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import UnderBanner from '../Components/UnderBanner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prasana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <UnderBanner/>
        <AnimatedCards/>
        <Footer/>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
