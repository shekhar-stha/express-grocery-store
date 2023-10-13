import React from 'react'
import Navbar from '../../components/header/navbar'
import ProductCategories from '../../components/products/productCategories'
import useSWR from 'swr';
import ProductSlider from '../../components/products/productSlider';
import Footer from '../../components/info/footer';
import Head from 'next/head';
import AllProducts from '../../components/products/allProducts';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Grocery() {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  if (error) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
    <h1>Error loading data</h1>
  </section>;
  if (!data) return <section style={{ width: "100vw", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
    <div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </section>;

  const products = JSON.parse(data);
  console.log("Products" + products)


  const spices = products.filter((product) => product.genre === 'Spices');
  const snacks = products.filter((product) => product.genre === 'Snacks');
  const beverages = products.filter((product) => product.genre === 'Beverages');
  const grains = products.filter((product) => product.genre === 'Grains');
  const vegetables = products.filter((product) => product.genre === 'Vegetables');
  const flour = products.filter((product) => product.genre === 'Flour');
  const dairy = products.filter((product) => product.genre === 'Dairy');
  const sweets = products.filter((product) => product.genre === 'Sweets');
  const breads = products.filter((product) => product.genre === 'Breads');
  const desserts = products.filter((product) => product.genre === 'Dessert');
  return (
    <>
      <Head>
        <title>Express Grocery | Indian Nepali Grocery Store</title>
        <meta name="description" content="Explore a diverse range of Indian and Nepali groceries at Express Grocery Store in Charlottesville. Enjoy free delivery over $40" />
        <meta name="keywords" content="Indian groceries, Nepali groceries, Express Grocery Store, 
        Best Indian Grocery, Grocery Store Charlottesville" />
      </Head>
      <Navbar />
      <div className='mt-5'>
        <ProductCategories />
      </div>
      <ProductSlider headerClass="text-center" containerName="Snacks" products={snacks} />
      <ProductSlider headerClass="text-center" containerName="Spices" products={spices} />
      <ProductSlider headerClass="text-center" containerName="Beverages" products={beverages} />
      <ProductSlider headerClass="text-center" containerName="Grains" products={grains} />
      <ProductSlider headerClass="text-center" containerName="Vegetables" products={vegetables} />
      <ProductSlider headerClass="text-center" containerName="Flour" products={flour} />
      <ProductSlider headerClass="text-center" containerName="Dairy" products={dairy} />
      <ProductSlider headerClass="text-center" containerName="Sweets" products={sweets} />
      <ProductSlider headerClass="text-center" containerName="Breads" products={breads} />
      <ProductSlider headerClass="text-center" containerName="Juices" products={desserts} />
      <AllProducts />
      <Footer />
    </>
  )
}
