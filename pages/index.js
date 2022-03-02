import Head from 'next/head'
import AnimatedCards from '../Components/AnimatedCards'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import UnderBanner from '../Components/UnderBanner'

export default function Index() {
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
