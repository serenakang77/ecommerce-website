import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Cart from "./Cart";
import {useState} from "react";
import { Routes, Route } from "react-router-dom"
const HeaderNav = ({
  cartId,
  setCartId,
  arrayOfObjectCart,
  setArrayOfObjectCart,
  amountChanged,
  isCartClicked,
  setIsCartClicked,
//   showCart,
}) => {
    const showCart = (e) => {
      e.preventDefault()
      setIsCartClicked(!isCartClicked)
    }

  return (
    <>
      {isCartClicked ? (
              <Cart
                isCartClicked={isCartClicked}
                setIsCartClicked={setIsCartClicked}
                showCart={showCart}
                arrayOfObjectCart={arrayOfObjectCart}
                setArrayOfObjectCart={setArrayOfObjectCart}
                amountChanged={amountChanged}
                
              />
      ) : (
        "null"
      )}
      {/* {isCartClicked ? (
        <Routes>
          <Route path='/product/cart' element=
            {
                <Cart
                  isCartClicked={isCartClicked}
                  setIsCartClicked={setIsCartClicked}
                  showCart={showCart}
                  arrayOfObjectCart={arrayOfObjectCart}
                  setArrayOfObjectCart={setArrayOfObjectCart}
                  amountChanged={amountChanged}
                />
            } />
        </Routes>
      ) : (
        "null"
      )} */}
      <nav className='top-nav-container'>
        <ul className='header-wrapper'>
          <li>
            <a href='/'>LOGO</a>
          </li>
          <li onClick={showCart}>
            <a href=''>
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNav
