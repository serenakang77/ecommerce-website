import { Link, useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
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
    const [singleItem, setSingleItem] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      async function getApiData() {
        const response1 = await fetch(
          `http://makeup-api.herokuapp.com/api/v1/products.json`
        )
        const data1 = await response1.json()
        const filteredProduct1 = data1.filter((individual) => individual.id == id)
        setSingleItem(filteredProduct1)
      }
      getApiData()
    }, [id])
    
  return (
    <>
      {singleItem.length === 0 ? (
        "Null"
      ) : (
        <div className='productWrapper productDetail'>
          <div className='productContainer'>
            <FontAwesomeIcon
              icon={faLeftLong}
              onClick={() => {
                navigate(-1)
              }}
            />
            <h2>{singleItem[0].brand}</h2>
            <h2>{singleItem[0].name}</h2>
            <p>${singleItem[0].price}</p>
            <p>{singleItem[0].description}</p>
            <button>Add To Cart</button>
          </div>
          <div className='productImageContainer'>
            <img
              src={singleItem[0].api_featured_image}
              alt={singleItem[0].name}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails
