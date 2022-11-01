import { Link, useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import axios from "axios"

// FOUND THE BUG, IF USER CLICK HEART AND GO TO PRODUCT DETAIL AND COME BACK, HEART REMOVES


const ProductDetails = ({
  getIdObject,
  isHeartClicked,
  setIsHeartClicked,
  getWishIdObject,
}) => {
  const [singleItem, setSingleItem] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json", {})
      .then(function (res) {
        const filteredProduct1 = res.data.filter(
          (individual) => individual.id == id
        )
        setSingleItem(filteredProduct1)
      })
  }, [id])

  return (
    <>
      {singleItem.length === 0 ? (
        "Null"
      ) : (
        <div className='productWrapper productDetail'>
          <div className='productContainer'>
            <Link to="/">
            <FontAwesomeIcon
              icon={faLeftLong}
              // onClick={() => {
              //   navigate(-1)
              // }}
            />
            </Link>
            <div className='one-content'>
              <h4>
                {singleItem[0].brand.charAt(0).toUpperCase() +
                  singleItem[0].brand.slice(1).toLowerCase()}
              </h4>
              <h2>{singleItem[0].name}</h2>
              <h4>${singleItem[0].price}</h4>
            </div>
            <p>{singleItem[0].description}</p>
            <div className="buttons">
              <button
                onClick={() => {
                  getIdObject(singleItem[0])
                }}
              >
                Add To Cart
              </button>
              <span
                className='heartAnimation'
                onClick={(e) => {
                  getWishIdObject(e, singleItem[0])
                  e.currentTarget.classList.toggle("animate")
                  // getWishListId(individual.id)
                }}
              />
            </div>
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
