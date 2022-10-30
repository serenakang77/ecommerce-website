import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const Cart = ({
  showCart,
  arrayOfObjectCart,
  setArrayOfObjectCart,
  amountChanged,
}) => {
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
            {arrayOfObjectCart
              ? arrayOfObjectCart.map((individual) => {
                  return (
                    <li>
                      <div className='cart-product-img'>
                        <img src={individual.api_featured_image} alt='' />
                      </div>
                      <div className='cart-product-content'>
                        <h3>{individual.name}</h3>
                        <input
                          type='number'
                          min='0'
                          max='150'
                          key={individual.key}
                          value={individual.amout}
                          onChance={(event) =>
                            amountChanged(individual, event.target.value)
                          }
                        />
                        {/* <FontAwesomeIcon icon={faMinus} /> */}
                        <span>{individualProductCount}</span>
                        {/* <FontAwesomeIcon icon={faPlus} /> */}
                        <p>${individual.price}</p>
                        <button>Remove Item</button>
                      </div>
                    </li>
                  )
                })
              : "null"}
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
