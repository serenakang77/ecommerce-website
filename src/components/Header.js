import header from "./assets/header.png"

const Header = () => {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href=''>LOGO</a>
            </li>
            <li>
              <a href=''>Cart</a>
            </li>
          </ul>
        </nav>
        <div className='header-img'>
          <img src={header} alt='' srcset='' />
        </div>
      </header>
    )
}

export default Header