import { Link } from "react-router-dom"

const Product = ({
  filteredArray,
  getIdObject,
  getWishIdObject,
  scollToRef,
  setWishList,
  wishList
}) => {

  const addOrRemoveFromWishList = (item) => {
    if(wishList.indexOf(item) === -1){
      const newArray = [...wishList];
      newArray.push(item);
      setWishList(newArray);

    }else{
      const newArray = [...wishList];
      const temp = newArray.filter((x) => x.id !== item.id)
      setWishList(temp);
    }
  }

  return (
    <div className='productLists' ref={scollToRef}>
      <ul>
        {filteredArray.length !== 0 ? (
          filteredArray.map((individual) => {
            return (
              <li
                key={individual.id}
              >
                <span
                  className={
                    individual.inWishList
                      ? `heartAnimation ${individual.id} animate`
                      : `heartAnimation ${individual.id}`
                  }
                  onClick={(e) => {
                    getWishIdObject(e, individual)
                    e.currentTarget.classList.toggle("animate")
                    // if it is in wishList, remove, else add
                    addOrRemoveFromWishList(individual)
                  }}
                />
                <Link to={`product/${individual.id}`}>
                  <div className='product-container'>
                    <img
                      src={individual.api_featured_image}
                      alt={individual.name}
                    />
                    <div className='product-detail'>
                      <p>Product Detail</p>
                    </div>
                  </div>
                </Link>
                <p>
                  {individual.brand.charAt(0).toUpperCase() +
                    individual.brand.slice(1).toLowerCase()}
                </p>
                <p>
                  {individual.name.length > 20
                    ? individual.name.substring(0, 20) + "..."
                    : individual.name}
                </p>
                <p>$ {individual.price} USD</p>
                <button
                  onClick={() => {
                    getIdObject(individual)
                  }}
                >
                  Add To Cart
                </button>
              </li>
            )
          })
        ) : (
          <div className='loading'>
            Loading
            <span></span>
          </div>
        )}
      </ul>
    </div>
  )
}

export default Product
