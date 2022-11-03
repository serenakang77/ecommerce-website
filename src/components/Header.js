import header from "./assets/header.png"
const Header = ({ scollToRef }) => {
  return (
    <header>
      <div className='header-img'>
        <img src={header} alt='' />
        <div className='header-content'>
          <h1>Experience Natural Beauty Of Your Skin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
            adipisci eos distinctio aut impedit iusto consectetur assumenda
            ipsa. At nulla eos laborum aliquam. Excepturi pariatur fuga tempora
            deleniti aliquid! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi hic nam similique eum. Eaque, praesentium nemo
            officia eos possimus voluptatum. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores, nisi! Lorem ipsum dolor.
          </p>
          <button onClick={() => scollToRef.current.scrollIntoView()}>Shop Now</button>
        </div>
      </div>
    </header>
  )
}

export default Header