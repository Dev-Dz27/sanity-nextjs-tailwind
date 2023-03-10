import Head from "next/head";
// import Image from "next/image";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import Product from "../components/Product";
import Carousel from "../components/Carousel";
import Image from "next/image";
import {Footer, PromoSection, ProductCollection, ProductList} from "../components";
import Link from "next/link";
import Categories from "../components/Categories";
export default function Home({ products, categories }) {
  console.log(categories);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hero Banner (slider)
      <div>
        <h2 className="text-center text-4xl">
          Best Selling / Hot Sale / NEW ARRIVALS{" "}
        </h2>
      </div>
      {/* <ProductCollection products={products} /> */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center ">
        NEW ARRIVALS
      </h2>
      {/* <ProductList products={products} /> */}
      <Link href={`/product/${products[0]?.slug.current}`}>Go to Product {products[0]?.slug.current} </Link>


      <Categories categories={categories}  />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const query1 = '*[_type == "category"]';
  const products = await client.fetch(query);
  const categories = await client.fetch(query1);

  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, categories },
  };
};
