// import { useEffect } from "react"
import { Link } from "react-router-dom"

const Product = ({
  // setproductArray,
  // productArray,
  product,
  setProduct,
  testArray,
  setTestArray,
  filteredArray,
  setFilteredArray,
  productId,
  setProductId,
}) => {
  const getId = (individualKey) => {
    return setProductId(individualKey)
  }
  return (
    <div className='productLists'>
      <ul>
        {product
          ? filteredArray.map((individual) => {
              return (
                <>
                  <li
                    key={individual.id}
                    onClick={() => {
                      getId(individual.id)
                    }}
                  >
                    <Link to={`product/${individual.id}`}>
                      <img
                        src={individual.api_featured_image}
                        alt={individual.name}
                      />
                      <p>{individual.brand}</p>
                      <p>{individual.name}</p>
                    </Link>
                    <p>${individual.price}</p>
                    <button>Add To Cart</button>
                  </li>
                </>
              )
            })
          : "nill"}
      </ul>
    </div>
  )
}

export default Product
