import Head from "next/head";
// import Image from "next/image";
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import Product from "../components/Product";
import React from 'react'
import Slider from 'react-slick'
const test = ({products: { name, slug, price, images }}) => {
  return (
    <>
     
    </>
  )
}

export default test

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    // const bannerQuery = '*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products,  }
    }
  }