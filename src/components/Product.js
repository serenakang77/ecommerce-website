// import { useEffect } from "react"
import { Link } from "react-router-dom"

const Product = ({
  product,
  setProduct,
  filteredArray,
  setFilteredArray,
  productId,
  setProductId,
  cartId,
  setCartId,
  arrayOfObjectCart,
  setArrayOfObjectCart,
}) => {
  const getId = (individualKey) => {
    return setProductId(individualKey)
  }
  const getIdObject = (id) => {
    // array is the individual object for specific id
    const array = filteredArray.filter((individual) => individual.id == id)
    // const object = {...array}
    // console.log(object)
    for(let element of array){
      
      setArrayOfObjectCart((prevState) => [...prevState, element])
      // console.log(arrayOfObjectCart)
    }
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
                    <button
                      onClick={() => {
                        getIdObject(individual.id)
                      }}
                    >
                      Add To Cart
                    </button>
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
