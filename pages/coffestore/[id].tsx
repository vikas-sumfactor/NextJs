import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import coffeeStoresData from "../../data/coffestores.json";

import styles from "../../styles/coffestore.module.css";

export async function getStaticProps(staticProps:any) {
  const params = staticProps.params;
  console.log("params", params);
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore:any) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore:any) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
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

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

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
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={styles.col2}>
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;