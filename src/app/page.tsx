'use client'

import { useProducts } from "./hooks/products";
import Product from "./components/Product";
import Loader  from './components/Loader'
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";

export default function Home () {

  const  {products, loading, error}  = useProducts()


  return (
    <section className="h-[100vh] container mx-auto max-w-2xl pt-5 ">
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {products.map(product => <Product product={product} key={product.id}/>)}

      <Modal title="Create new product">
        <CreateProduct/>
      </Modal>
    </section>
  );
}
