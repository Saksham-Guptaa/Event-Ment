import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from "../components/Banner"
import  Header  from '../components/Header'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import Footer from '../components/Footer'
import { AppProps } from 'next/app';


export default function Home(props:any) {
  return ( 
    <div className="">
      <Head>
        <title>Event Ment</title>
      </Head>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {props.exploreData?.map((item:any) => (
              <SmallCard
                key={item.img}
                img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Celebreate Anywhere</h2>
          <div className='flex space-x-2 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {props.cardsData?.map((item2:any) =>(
              <MediumCard
                key={item2.img2} 
                img2={item2.img2} 
                title={item2.title}/>
            ))}
          </div>
        </section>
        
        <LargeCard 
          img="https://saksham-guptaa.github.io/hackbpitAPI/background.jpg"
          title="The Greatest Destinations for you"
          description="Wishlist"
          buttonText="Get your's"
        />
      </main> 

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData:any = await fetch("https://saksham-guptaa.github.io/hackbpitAPI/db.json").
  then(
    (res) => res.json()
  );

  const cardsData:any = await fetch("https://saksham-guptaa.github.io/hackbpitAPI/db2.json").
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

