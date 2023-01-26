import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import ProductPage from "../../components/ProductPage";
import ProductPage2 from "../../components/ProductPage2";
import SwipperThumbs from "../../components/SwipperThumbs";

const ProductDetails = ({ product }) => {
  const { images, name, details, price } = product;
  const [index, setIndex] = useState(0);

  return (
    <div>
      {console.log(product)}
      <ProductPage product={product} />
      {/* <ProductPage2 products={products}/> */}
      {/* <SwipperThumbs product={product}/> */}
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

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
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
  const product = await client.fetch(query);

  // console.log(product);
  return {
    props: { product },
  };
};

export default ProductDetails;
