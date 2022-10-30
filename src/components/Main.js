import NavBar from "./NavBar"
import Product from "./Product"
import { useState, useEffect } from "react"

const Main = ({
  product,
  setProduct,
  testArray,
  setTestArray,
  filteredArray,
  setFilteredArray,
  productId,
  setProductId,
  cartId,
  setCartId,
  arrayOfObjectCart,
  setArrayOfObjectCart,
}) => {



  return (
    <main>
      <div className='wrapper'>
        <NavBar
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
          product={product}
          setProduct={setProduct}
          testArray={testArray}
          setTestArray={setTestArray}
          filteredArray={filteredArray}
          setFilteredArray={setFilteredArray}
          productId={productId}
          setProductId={setProductId}
          cartId={cartId}
          setCartId={setCartId}
          arrayOfObjectCart={arrayOfObjectCart}
          setArrayOfObjectCart={setArrayOfObjectCart}
        />
      </div>
    </main>
  )
}

export default Main