// import { useEffect } from "react"
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
const Product = ({
  // setproductArray,
  // productArray,
  product,
  setProduct,
  testArray,
  setTestArray,
  filteredArray,
  setFilteredArray,
}) => {
  const navigate = useNavigate()
  const navigateToProductDetail = () => {
    navigate("./productDetail")
  }

  return (
    <div className='productLists'>
      <ul>
        {product
          ? filteredArray.map((individual) => {
              return (
                <>
                <li onClick={navigateToProductDetail}>
                  <img
                    src={individual.api_featured_image}
                    alt={individual.name}
                  />
                  <p>{individual.brand}</p>
                  <p>{individual.name}</p>
                  <p>${individual.price}</p>
                  <button>Add To Cart</button>
                </li>
                <Route path="/productDetail" element={<ProductDetail />} />
                </>
              )
            })
          : "nill"}
      </ul>
    </div>
  )
}

export default Product
