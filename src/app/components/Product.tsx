import React, {useState} from 'react'
import { IProduct } from '../types/data'
import Image from 'next/image'

interface ProductProps {
  product: IProduct
}

const Product = ( {product}: ProductProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? "bg-blue-400 hover:bg-blue-200" : "bg-yellow-400 hover:bg-yellow-200"

  return (
   <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <Image src={product.image} width={50} height={50} alt='product image'/>
      <p>{ product.title}</p>
      <span className="font-bold">{`${product.price}$`}</span>
      <button className={`${btnBgClassName} px-4 py-2 border hover:scale-105 active:scale-90 active:border-yellow-500 active:bg-white transition-all duration-100`}
      onClick={()=> setDetails(prev => !prev)}
      >{details ? "Hide details" : "Show details" }</button>
      { details && <div>{product.description}</div>}
      <p className="text-blue-500 text-sm">Rate: <span className="font-bold text-gray-900">{product.rating.rate}</span> </p>
    </div>
  )
}

export default Product


