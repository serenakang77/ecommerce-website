// import { useEffect } from "react"
import { useState, useEffect } from "react"
const Product = ({
  setproductArray,
  productArray,
  product,
  setProduct,
  testArray,
  setTestArray,
  filteredArray,
  setFilteredArray,
}) => {
  console.log(testArray)
  return (
    <div className='productLists'>
      <ul>
        {product
          ? testArray.map((individual) => {
              return (
                <li>
                  <img
                    src={individual.api_featured_image}
                    alt={individual.name}
                  />
                  <p>{individual.brand}</p>
                  <p>{individual.name}</p>
                  <p>${individual.price}</p>
                </li>
              )
            })
          : "nill"}
      </ul>
    </div>
  )
}

export default Product
