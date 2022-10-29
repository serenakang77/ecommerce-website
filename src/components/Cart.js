import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const Cart = ({ showCart, arrayOfObjectCart,setArrayOfObjectCart}) => {
    console.log(arrayOfObjectCart)
    // useEffect(() => {
    //   async function getApiData() {
    //     const response1 = await fetch(
    //       `http://makeup-api.herokuapp.com/api/v1/products.json`
    //     )
    //     const data1 = await response1.json()
    //     // const filteredProduct1 = data1.filter(
    //     // //   (individual) => individual.id == id
    //     // )
    //     // setSingleItem(filteredProduct1)
    //   }
    //   getApiData()
    // }, [])
    const [productCount, setProductCount] = useState(0)
    const [individualProductCount, setIndividualProductCount] = useState(0)

  return (
    <div className='dark-background'>
      <div className='cart-container'>
        <div className='cart-title'>
        <FontAwesomeIcon icon={faX} onClick={showCart} />
          <h2>Your Cart</h2>
          <h4>{productCount} item(s)</h4>
        </div>
        <div className='cart-item-list'>
          <ul>
            {
            arrayOfObjectCart
            ?arrayOfObjectCart.map((individual) => {
              return (
                <li>
                  <div className='cart-product-img'>
                    <img src={individual.api_featured_image} alt='' />
                  </div>
                  <div className='cart-product-content'>
                    <h3>{individual.name}</h3>
                    <button
                      onClick={() => {
                        setIndividualProductCount((prev) => prev - 1)
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{individualProductCount}</span>
                    <button
                      onClick={() => {
                        setIndividualProductCount((prev) => prev + 1)
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <p>${individual.price}</p>
                    <button>Remove Item</button>
                  </div>
                </li>
              )})
              :"null"
            }
          </ul>
        </div>
        <div className='totalMoney'>
          <h4>Your total: $</h4>
        </div>
      </div>
    </div>
  )
}

export default Cart
