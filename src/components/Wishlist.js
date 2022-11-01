import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const Wishlist = ({
  showCart,
  isHeartClicked,
  showWishList,
  arrayOfObjectWish,
  getIdObject,
  setArrayOfObjectWish,
  removeFromWish,
}) => {
  return (
    <div className='dark-background'>
      <div className='wish-container'>
        <div className='wish-title'>
          <FontAwesomeIcon icon={faX} onClick={showWishList} />
          <h2>Your Wishlist</h2>
          {/* <h4>{value.totalCartNumbers} item(s)</h4> */}
        </div>
        <div className='wish-item-list'>
          <ul>
            {arrayOfObjectWish
              ? arrayOfObjectWish.map((individual) => {
                  return (
                    <li key={individual.id}>
                      <div className='wish-product-img'>
                        <img src={individual.api_featured_image} alt='' />
                      </div>
                      <div className='wish-product-content'>
                        <h3>{individual.name}</h3>
                        <p>
                          {individual.description.length > 110
                            ? individual.description.substring(0, 110) + "..."
                            : individual.description}
                        </p>
                        <p>${individual.price} USD</p>
                        <button
                          className='add-to-cart'
                          onClick={() => {
                            getIdObject(individual)
                          }}
                        >
                          Add To Cart
                        </button>
                        <button
                          className='remove-from-wish'
                          onClick={(e) => {
                            removeFromWish(e, individual)
                          }}
                        >
                          Remove It
                        </button>
                      </div>
                    </li>
                  )
                })
              : "null"}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
