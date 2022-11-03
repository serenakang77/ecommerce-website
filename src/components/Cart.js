import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const Cart = ({
  showCart,
  arrayOfObjectCart,
  setArrayOfObjectCart,
  value,
}) => {
  
  // remove selected object when user clicks remove button from cart
  const removeItem = (product) => {
    const findSelectedProduct = arrayOfObjectCart.filter(
      (item) => item.id !== product.id
    )
    setArrayOfObjectCart(findSelectedProduct)
  }

  // When user clicks + button, increase the quantity to +1
  const increaseQty = (product) => {
    const exist = arrayOfObjectCart.find((x) => x.id === product.id)
    const newCartItems = arrayOfObjectCart.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    )
    setArrayOfObjectCart(newCartItems)
  }

  // When user clicks - button, if the quantity is 1, leave it, if it is higher than 1, decrease -1
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



  return (
    <div className='dark-background'>
      <div className='cart-container'>
        <div className='cart-title'>
          <FontAwesomeIcon icon={faX} onClick={showCart} />
          <h2>Your Cart</h2>
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
                  Merchandise Subtotal <strong>${value.subtotal}</strong>
                </p>
                <p>
                  Shipping & Handling <strong>free</strong>
                </p>
                <p>
                  GST/HST Subtital <strong>${value.taxTotal}</strong>
                </p>
                <h4>
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
