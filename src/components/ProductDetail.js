import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"

const ProductDetails = ({
  product,
  setProduct,
  testArray,
  setTestArray,
  filteredArray,
  setFilteredArray,
  productId,
  setProductId,
}) => {
  const individualObject = filteredArray.filter(({ id }) => id == productId)

    const navigate = useNavigate();

  return (
    <div className='productWrapper productDetail'>
      <div className='productContainer'>
          <FontAwesomeIcon
            icon={faLeftLong}
            onClick={() => {
              navigate(-1)
            }}
          />
        <h2>{individualObject[0].brand}</h2>
        <h2>{individualObject[0].name}</h2>
        <p>${individualObject[0].price}</p>
        <p>{individualObject[0].description}</p>
        <button>Add To Cart</button>
      </div>
      <div className='productImageContainer'>
        <img src={individualObject[0].api_featured_image} alt={individualObject[0].name} />
      </div>
    </div>
  )
}

export default ProductDetails
