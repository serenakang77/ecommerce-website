import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Cart from "./Cart";
import Wishlist from "./Wishlist"
import logo from "./assets/logo.webp";
import { Link } from "react-router-dom";

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
  setWishList,
  wishList,
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
          showCart={showCart}
          arrayOfObjectCart={arrayOfObjectCart}
          setArrayOfObjectCart={setArrayOfObjectCart}
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
          setWishList={setWishList}
          wishList={wishList}
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
              <FontAwesomeIcon icon={faCartShopping} onClick={showCart} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNav
