import NavBar from "./NavBar"
import Product from "./Product"
import { useState, useEffect } from "react"

const Main = ({
  setproductArray,
  productArray,
  product,
  setProduct,
  testArray,
  setTestArray,
  filteredArray,
  setFilteredArray,
  productId,
  setProductId,
}) => {
  return (
    <main>
      <div className='wrapper'>
        <NavBar
          // setproductArray={setproductArray}
          // productArray={productArray}
          product={product}
          setProduct={setProduct}
          testArray={testArray}
          setTestArray={setTestArray}
          filteredArray={filteredArray}
          setFilteredArray={setFilteredArray}
          productId={productId}
          setProductId={setProductId}
        />
        <Product
          // setproductArray={setproductArray}
          // productArray={productArray}
          product={product}
          setProduct={setProduct}
          testArray={testArray}
          setTestArray={setTestArray}
          filteredArray={filteredArray}
          setFilteredArray={setFilteredArray}
          productId={productId}
          setProductId={setProductId}
        />
      </div>
    </main>
  )
}

export default Main