import { useEffect, useState, useContext} from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Banner from '@/Components/Banner'
import Image from 'next/image'
import Card from '@/Components/Card'
import  coffeeStoresData from "../data/coffestores.json"
import { fetchCoffeeStores } from '../lib/coffe-stores'
import useTrackLocation from '@/hooks/use-track-location'
import { ACTION_TYPES, StoreContext } from "./_app";

export async function getStaticProps(context:any) {
  console.log("hi getStaticProps");
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      
      coffeeStores,
    }, // will be passed to the page component as props
  };
}
export default function Home(props:any) {
  console.log("props", props);


  const { handleTrackLocation, locationErrorMsg, isFindingLocation } =
    useTrackLocation();
 // const[coffeeStores,setCoffeStores] = useState([]);
  const [coffeeStoresError, setCoffeeStoresError] = useState(null);
  const { dispatch, state } = useContext(StoreContext);

  const { coffeeStores, latLong } = state;

  console.log({ latLong, locationErrorMsg });

  useEffect(() => {
    async function setCoffeeStoresByLocation() {
      if (latLong) {
        try {
          const fetchedCoffeeStores = await fetchCoffeeStores(latLong,9);
          console.log({ fetchedCoffeeStores });
           // setCoffeeStores(fetchedCoffeeStores);
           dispatch({
            type: ACTION_TYPES.SET_COFFEE_STORES,
            payload: {
              coffeeStores: fetchedCoffeeStores,
            },
          });
        } catch (error:any) {
          //set error
          console.log("Error", { error });
          setCoffeeStoresError(error.message);
        }
      }
    }
    setCoffeeStoresByLocation();
  }, [latLong]);

  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
    handleTrackLocation();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
         buttonText={isFindingLocation ? "Locating..." : "View stores nearby"} handleOnClick={handleOnBannerBtnClick} />
         {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
         {coffeeStoresError && <p>Something went wrong: {coffeeStoresError}</p>}
        <div className={styles.heroImage}>
          <Image src="/hero-image.png" width={700} height={400} alt='img' />
        </div>

        {coffeeStores.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Stores near me</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore:any) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </div>
        )}
        

        <div className={styles.sectionWrapper}>
          {props.coffeeStores.length > 0 && (
            <>
              <h2 className={styles.heading2}>Toronto stores</h2>
              <div className={styles.cardLayout}>
                {props.coffeeStores.map((coffeeStore:any) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={
                        coffeeStore.imgUrl ||
                        "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      }
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      
      </main>
    </div>
  );
}

