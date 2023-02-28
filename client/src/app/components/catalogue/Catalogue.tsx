import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import ProductList from "./ProductList";

const Catalogue = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
      .then(response=>response.json())
      .then(data=>setProducts(data))
  },[])
  
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default Catalogue;