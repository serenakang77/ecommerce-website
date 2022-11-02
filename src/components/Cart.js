import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const Cart = ({
  showCart,
  arrayOfObjectCart,
  setArrayOfObjectCart,
}) => {
  const [value, setValue] = useState({})
  const removeItem = (product) => {
    const findSelectedProduct = arrayOfObjectCart.filter(
      (item) => item.id !== product.id
    )
    setArrayOfObjectCart(findSelectedProduct)
  }

  const increaseQty = (product) => {
    const exist = arrayOfObjectCart.find((x) => x.id === product.id)
    const newCartItems = arrayOfObjectCart.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    )
    setArrayOfObjectCart(newCartItems)
  }
  const decreaseQty = (product) => {
    const exist = arrayOfObjectCart.find((x) => x.id === product.id)
    const newCartItems = arrayOfObjectCart.map((x) =>
      exist.qty <= 1
        ? x.id === product.id
          ? { ...exist, qty: exist.qty }
          : x
        : x.id === product.id
        ? { ...exist, qty: exist.qty - 1 }
        : x
    )
    setArrayOfObjectCart(newCartItems)
  }
  // ERROR(If cart is empty, it gives the error, handle this!!!!)
  useEffect(() => {
    if(arrayOfObjectCart.length >0){
      const totalCartNumbers = arrayOfObjectCart
        .map(({ qty }) => qty)
        .reduce((a, b) => a + b)
      const subtotal = arrayOfObjectCart
        .map(({ qty, price }) => qty * price)
        .reduce((a, b) => a + b)
      const taxTotal = parseInt((subtotal * 0.13).toFixed(2))
      const finalTotal = taxTotal + subtotal  
      setValue({
        totalCartNumbers: totalCartNumbers,
        subtotal: subtotal,
        taxTotal: taxTotal,
        finalTotal: finalTotal
      })
    }else{
      setValue({
        totalCartNumbers: 0,
        subtotal: 0,
        taxTotal: 0,
        finalTotal: 0,
      })

    }
  }, [arrayOfObjectCart])

  return (
    <div className='dark-background'>
      <div className='cart-container'>
        <div className='cart-title'>
          <FontAwesomeIcon icon={faX} onClick={showCart} />
          <h2>Your Cart</h2>
          {/* <h4> item(s)</h4> */}
          <h4>{value.totalCartNumbers} item(s)</h4>
        </div>
        <div className='cart-item-list'>
          <ul>
            {arrayOfObjectCart
              ? arrayOfObjectCart.map((individual) => {
                  return (
                    <li key={individual.id}>
                      <div className='cart-product-img'>
                        <img src={individual.api_featured_image} alt='' />
                      </div>
                      <div className='cart-product-content'>
                        <h3>{individual.name}</h3>
                        <p>
                          {individual.description.length > 110
                            ? individual.description.substring(0, 110) + "..."
                            : individual.description}
                        </p>
                        <div className="numbers-quantity-container">
                          <button
                            onClick={() => {
                              decreaseQty(individual)
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span>{individual.qty}</span>
                          <button
                            onClick={() => {
                              increaseQty(individual)
                            }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        <p>${individual.price * individual.qty} USD</p>
                        <button
                          className="remove-from-cart"
                          onClick={() => {
                            removeItem(individual)
                          }}
                        >
                          Remove Item
                        </button>
                      </div>
                    </li>
                  )
                })
              : "null"}
          </ul>
        </div>
          {arrayOfObjectCart ? (
            <div className="cover">
              <div className='totalMoney'>
                <p>
                  {/* Merchandise Subtotal <strong>$subtotal</strong> */}
                  Merchandise Subtotal <strong>${value.subtotal}</strong>
                </p>
                <p>
                  Shipping & Handling <strong>free</strong>
                </p>
                <p>
                  {/* GST/HST Subtital <strong>$taxTotal</strong> */}
                  GST/HST Subtital <strong>${value.taxTotal}</strong>
                </p>
                <h4>
                  {/* TOTAL <strong>$FinalTotal</strong> */}
                  TOTAL ${value.finalTotal} USD
                </h4>
              <button>Check Out</button>
              </div>
            </div>
          ) : (
            "Item is not added"
          )}
      </div>
    </div>
  )
}

export default Cart
