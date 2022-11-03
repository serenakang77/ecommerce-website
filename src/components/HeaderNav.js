import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Cart from "./Cart";
import Wishlist from "./Wishlist"
import logo from "./assets/logo.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

const HeaderNav = ({
  arrayOfObjectCart,
  setArrayOfObjectCart,
  isCartClicked,
  setIsCartClicked,
  isHeartClicked,
  setIsHeartClicked,
  arrayOfObjectWish,
  getIdObject,
  removeFromWish,
}) => {
  // change the value to be object so that it includes properties like total Cart numbers, subtotal, taxTotal, finalTotal 
  const [value, setValue] = useState({})

  const showCart = (e) => {
    e.preventDefault()
    setIsCartClicked(!isCartClicked)
  }

  const showWishList = (e) => {
    e.preventDefault()
    setIsHeartClicked(!isHeartClicked)
  }

  useEffect(() => {
    if (arrayOfObjectCart.length > 0) {
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
        finalTotal: finalTotal,
      })
    } else {
      setValue({
        totalCartNumbers: 0,
        subtotal: 0,
        taxTotal: 0,
        finalTotal: 0,
      })
    }
  }, [arrayOfObjectCart])

  return (
    <>
      {isCartClicked ? (
        <Cart
          showCart={showCart}
          arrayOfObjectCart={arrayOfObjectCart}
          setArrayOfObjectCart={setArrayOfObjectCart}
          value={value}
        />
      ) : (
        "Cart is not clicked"
      )}
      {isHeartClicked ? (
        <Wishlist
          arrayOfObjectWish={arrayOfObjectWish}
          showWishList={showWishList}
          getIdObject={getIdObject}
          removeFromWish={removeFromWish}
        />
      ) : (
        "Heart button is not clicked"
      )}

      <nav className='top-nav-container'>
        <ul className='header-wrapper'>
          <li>
            <Link to='/'>
              <img src={logo} alt='SERE MAKE Logo' />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faHeart}
                className='header-heart'
                onClick={showWishList}
              />
            </Link>
            <Link to='/'>
              <div className="cart-icon-container">
                <FontAwesomeIcon icon={faCartShopping} onClick={showCart} className="cart-icon"/>
                {value.totalCartNumbers?
                <span className='cartQty'>{value.totalCartNumbers}</span>
                : null}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNav
