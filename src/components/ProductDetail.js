import { Link, useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import axios from "axios"

const ProductDetails = ({ getIdObject }) => {
  const [singleItem, setSingleItem] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json", {
      })
      .then(function (res) {
        const filteredProduct1 = res.data.filter((individual) => individual.id == id)
      setSingleItem(filteredProduct1)
      })
    // async function getApiData() {
    //   const response1 = await fetch(
    //     `http://makeup-api.herokuapp.com/api/v1/products.json`
    //   )
    //   const data1 = await response1.json()
    //   const filteredProduct1 = data1.filter((individual) => individual.id == id)
    //   console.log(filteredProduct1)
    //   setSingleItem(filteredProduct1)
    // }
    // getApiData()
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
            <button
              onClick={() => {
                getIdObject(singleItem[0])
              }}
            >
              Add To Cart
            </button>
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
