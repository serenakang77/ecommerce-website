import header from "./assets/header.png"
import headerGif from "./assets/header-gif.gif"

const Header = () => {
    return (
      <header>
        <div className='header-img'>
          <img src={header} alt='' />
          <div className="header-content">
            <h2>Natural beauty of your skin</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque adipisci eos distinctio aut impedit iusto consectetur assumenda ipsa. At nulla eos laborum aliquam. Excepturi pariatur fuga tempora deleniti aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic nam similique eum. Eaque, praesentium nemo officia eos possimus voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quam illo id nesciunt maiores repellendus magni debitis magnam amet ratione.</p>
            <a href="">Shop Now</a>
          </div>
        </div>
        {/* <div className='header-img'>
          <img src={headerGif} alt='' />
          <div className="header-content"></div>
        </div> */}
      </header>
    )
}

export default Header