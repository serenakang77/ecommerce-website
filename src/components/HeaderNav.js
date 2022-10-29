import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const HeaderNav = () => {
  return (
    <nav className='top-nav-container'>
      <ul className='header-wrapper'>
        <li>
          <a href='/'>LOGO</a>
        </li>
        <li>
          <a href=''>
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
