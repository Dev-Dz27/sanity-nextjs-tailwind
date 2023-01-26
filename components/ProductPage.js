import React, { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from "../lib/client";
// import { Product } from '../../components';
// import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { images, sizes, colors, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useState(1);

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  // slice
  const imagesWithoutFirst = images.slice(1);
  // quantity
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // type the amount logic
  const handleChange = (e) => {
    let value = e.target.value;
    //validating the value
    if (value < 1) value = 1;
    setQuantity(value);
  };

  return (
    <div>
      <section>
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 ">
              <img
                alt="Les Paul"
                src={urlFor(images[0])}
                class="object-cover w-full aspect-square rounded-xl"
              />

              <div class="grid grid-cols-2 gap-4 lg:mt-4">
                {imagesWithoutFirst?.map((image, i) => (
                  <img
                    key={i}
                    alt="Les Paul"
                    src={urlFor(image)}
                    class="object-cover w-full aspect-square rounded-xl"
                  />
                ))}
              </div>
            </div>

            <div class="sticky top-0">
              <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                categorie
              </strong>

              <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                  <p class="mt-0.5 text-sm">categorie</p>

                  <h1 class="text-2xl font-bold">
                    Fun Product That Does Something Cool
                  </h1>
                  <p class="text-xl font-bold">{price}$</p>

                  <div class="mt-2 -ml-0.5 flex">
                    <svg
                      class="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="w-5 h-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p class="text-lg font-bold">{price}$</p>
              </div>

              <details class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary class="block">
                  <div>
                    <div class="prose max-w-none group-open:hidden">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos ex error culpa delectus rem
                        tenetur, architecto quam nesciunt, dolor veritatis nisi
                        minus inventore, rerum at recusandae?
                      </p>
                    </div>

                    <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div class="pb-6 prose max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form class="mt-8">
                <fieldset>
                  <legend class="mb-1 text-sm font-medium">Color</legend>

                  <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                      {colors?.map((color, i) => (
                        <label
                          key={i}
                          for={`color${color}`}
                          class="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="color"
                            id={`color${color}`}
                            class="sr-only peer"
                          />

                          <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            {color}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </fieldset>
                {/* Sizes */}
                <fieldset class="mt-4">
                  <legend class="mb-1 text-sm font-medium">Size</legend>

                  <div class="flow-root">
                    <div class="-m-0.5 flex flex-wrap">
                      {sizes?.map((size, i) => (
                        <label
                          key={i}
                          for={`size_${size}`}
                          class="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="size"
                            id={`size_${size}`}
                            class="sr-only peer"
                          />

                          <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            {size}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </fieldset>

                <div class="flex mt-8">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="bg-gray-300 text-gray-700 rounded-l px-3 py-2"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] &::-webkit-outer-spin-button:m-0 &::-webkit-outer-spin-button:appearance-none &::-webkit-inner-spin-button:m-0 &::-webkit-inner-spin-button:appearance-none"
                        value={quantity}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="bg-gray-300 text-gray-700 rounded-r px-3 py-2"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h2 className="text-2xl font-bold text-center">You may also like</h2>
        <div className="flex justify-center">
          
        </div>
      </div>
    </div>
  );
};

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
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
