// import { useEffect } from "react"
import { Link } from "react-router-dom"

const Product = ({
  product,
  filteredArray,
  setProductId,
  getIdObject,
  
}) => {
  const getId = (individualKey) => {
    return setProductId(individualKey)
  }
  const capitalizeFirstLowercaseRest = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
  return (
    <div className='productLists'>
      <ul>
        {product
          ? filteredArray.map((individual) => {
              return (
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
                  </Link>
                  <p>{capitalizeFirstLowercaseRest(individual.brand)}</p>
                  <p>
                    {individual.name.length > 27
                      ? individual.name.substring(0, 27) + "..."
                      : individual.name}
                  </p>
                  <p>$ {individual.price} USD</p>
                  <button
                    onClick={() => {
                      getIdObject(individual)
                    }}
                  >
                    Add To Cart
                  </button>
                </li>
              )
            })
          : "nill"}
      </ul>
    </div>
  )
}

export default Product
