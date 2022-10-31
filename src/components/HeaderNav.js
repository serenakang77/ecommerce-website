import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Cart from "./Cart";
import logo from "./assets/logo.webp"
// import {useState} from "react";
// import { Routes, Route } from "react-router-dom"
const HeaderNav = ({
  arrayOfObjectCart,
  setArrayOfObjectCart,
  isCartClicked,
  setIsCartClicked,
}) => {
    const showCart = (e) => {
      e.preventDefault()
      setIsCartClicked(!isCartClicked)
    }

  return (
    <>
      {isCartClicked ? (
        <Cart
          // isCartClicked={isCartClicked}
          // setIsCartClicked={setIsCartClicked}
          showCart={showCart}
          arrayOfObjectCart={arrayOfObjectCart}
          setArrayOfObjectCart={setArrayOfObjectCart}
        />
      ) : (
        "null"
      )}

      <nav className='top-nav-container'>
        <ul className='header-wrapper'>
          <li>
            <a href="./">
              <img src={logo} alt="SERE MAKE Logo"/>
            </a>
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
