import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import cls from "classnames";

import coffeeStoresData from "../../data/coffestores.json";

import styles from "../../styles/coffestore.module.css";
import { fetchCoffeeStores } from "@/lib/coffe-stores";

export async function getStaticProps(staticProps:any) {
  const params = staticProps.params;
  console.log("params", params);
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStore: coffeeStores.find((coffeeStore:any) => {
        return coffeeStore.fsq_id.toString() === params.id; //dynamic id
      }),
    },
  };
}
export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeeStore:any) => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
   
  };
}
const CoffeeStore = (props:any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { location, name,  imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {
    console.log("i m upvote button");
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link legacyBehavior href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
           src={
            imgUrl ||
            "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          }
            width={360}
            height={240}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/icons/places.svg" width="24" height="24"  alt="img"/>
            <p className={styles.text}>{location.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/icons/nearMe.svg" width="24" height="24"   alt="img"/>
            <p className={styles.text}>{location.cross_street}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/icons/star.svg" width="24" height="24"  alt="img" />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;


