import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Cart from "./Cart";
import Wishlist from "./Wishlist"
import logo from "./assets/logo.webp";
import { Link } from "react-router-dom";
// import {useState} from "react";
// import { Routes, Route } from "react-router-dom"
const HeaderNav = ({
  arrayOfObjectCart,
  setArrayOfObjectCart,
  isCartClicked,
  setIsCartClicked,
  isHeartClicked,
  setIsHeartClicked,
  arrayOfObjectWish,
  setArrayOfObjectWish,
  getIdObject,
  removeFromWish,
}) => {
  const showCart = (e) => {
    e.preventDefault()
    setIsCartClicked(!isCartClicked)
  }

  const showWishList = (e) => {
    e.preventDefault()
    setIsHeartClicked(!isHeartClicked)
    
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
      {isHeartClicked ? (
        <Wishlist
          arrayOfObjectWish={arrayOfObjectWish}
          setArrayOfObjectWish={setArrayOfObjectWish}
          isHeartClicked={isHeartClicked}
          showWishList={showWishList}
          getIdObject={getIdObject}
          removeFromWish={removeFromWish}
        />
      ) : (
        "null"
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
              <FontAwesomeIcon icon={faCartShopping} onClick={showCart} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNav
