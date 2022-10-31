import NavBar from "./NavBar"
import Product from "./Product"

const Main = ({
  product,
  setProduct,
  filteredArray,
  getIdObject,
  setProductId,
}) => {
  return (
    <main>
      <div className='wrapper'>
        <NavBar setProduct={setProduct} />
        <Product
          product={product}
          filteredArray={filteredArray}
          setProductId={setProductId}
          // setArrayOfObjectCart={setArrayOfObjectCart}
          // arrayOfObjectCart={arrayOfObjectCart}
          getIdObject={getIdObject}
        />
      </div>
    </main>
  )
}

export default Main