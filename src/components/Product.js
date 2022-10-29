// import { useEffect } from "react"
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, Link } from "react-router-dom"

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

  return (
    <div className='productLists'>
      <ul>
        {product
          ? filteredArray.map((individual) => {
              return (
                <>
                <Link to={`product/${individual.id}`}>
                <li>
                  <img
                    src={individual.api_featured_image}
                    alt={individual.name}
                  />
                  <p>{individual.brand}</p>
                  <p>{individual.name}</p>
                  <p>${individual.price}</p>
                  <button>Add To Cart</button>
                </li>
                </Link>
                </>
              )
            })
          : "nill"}
      </ul>
    </div>
  )
}

export default Product
