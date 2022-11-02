import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import axios from "axios"

const ProductDetails = ({getIdObject}) => {
  const [singleItem, setSingleItem] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json", {})
      .then(function (res) {
        const filteredProduct1 = res.data.filter(
          (individual) => individual.id == id
          )
        setSingleItem(filteredProduct1)
      })
  }, [id])

  return (
    <>
      <div className='productWrapper productDetail'>
        {singleItem.length === 0 ? (
          <div className='loading'>
            Loading
            <span></span>
          </div>
        ) : (
          <>
            <div className='productContainer'>
              <Link to='/'>
                <FontAwesomeIcon
                  icon={faLeftLong}

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
              <div className='buttons'>
                <button
                  onClick={() => {
                    getIdObject(singleItem[0])
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className='productImageContainer'>
              <img
                src={singleItem[0].api_featured_image}
                alt={singleItem[0].name}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default ProductDetails
