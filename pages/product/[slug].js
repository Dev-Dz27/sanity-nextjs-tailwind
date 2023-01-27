import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import ProductPage from "../../components/ProductPage";
import ProductPage2 from "../../components/ProductPage2";
import SwipperThumbs from "../../components/SwipperThumbs";
import { ProductList } from "../../components";

const ProductDetails = ({ product, products }) => {
  const { images, name, details, price } = product;
  const [index, setIndex] = useState(0);

  return (
    <div>
      {console.log(product)}
      <ProductPage product={product} />
      {/* <ProductPage2 products={products}/> */}
      {/* <SwipperThumbs product={product}/> */}
      <ProductList products={products} />

    </div>
  );
};

// Path (slug)

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const thproducts = await client.fetch(query);

  const paths = thproducts.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]{
    ...,
    categories[]->{name}
  }`;
  const querys = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(querys);

  // console.log(product);
  return {
    props: { product, products },
  };
};

export default ProductDetails;
