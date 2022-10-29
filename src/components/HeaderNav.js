import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Cart from "./Cart";
import {useState} from "react";

const HeaderNav = ({
  cartId,
  setCartId,
  arrayOfObjectCart,
  setArrayOfObjectCart,
}) => {
  const [isCartClicked, setIsCartClicked] = useState(false)

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
        />
      ) : (
        "null"
      )}
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
