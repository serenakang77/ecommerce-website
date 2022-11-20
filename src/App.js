import "./scss/styles.scss"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Product from "./components/Product"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductDetails from "./components/ProductDetail"
import HeaderNav from "./components/HeaderNav"
import axios from "axios"

import { useState, useEffect, useRef } from "react"

function App() {
  // Choose product type
  const [product, setProduct] = useState("placeholder")
  // Filtered array with right product type
  const [filteredArray, setFilteredArray] = useState([])
  // Array of Object that is inside of Cart
  const [arrayOfObjectCart, setArrayOfObjectCart] = useState([])
  // Check if cart is clicked or not
  const [isCartClicked, setIsCartClicked] = useState(false)
  // Check if heart is clicked or not
  const [isHeartClicked, setIsHeartClicked] = useState(false)
  // Array of Object that is inside of WishList
  const [arrayOfObjectWish, setArrayOfObjectWish] = useState([])

  
  const scollToRef = useRef()
  
  useEffect(() => {
    const removeIds = [1005, 1004, 1003, 1002, 1001, 1000, 999]
    // if product State is placeholder which is default value of All product, do not set any params, else set product_type to be selected value
    const myparams =
      product === "placeholder"
        ? {}
        : {
            product_type: `${product}`,
          }
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json", {
        params: myparams,
      })
      .then(function (res) {
        const filteredProduct1 = res.data
          .filter(
            (individual) =>
              individual.currency === "USD" &&
              individual.price !== "0.0" &&
              !removeIds.includes(individual.id)
          )
          .slice(0, 200)
          filteredProduct1.map((item) => {
          // add the property inWishList default value as false for all objects
          item.inWishList = false
          arrayOfObjectWish.filter((x) => {
            if (x.id === item.id) {
              // if that object is inside of inWishList, set the value to be true
              item.inWishList = true
            }
            return x
          })
          return item
        })
        // if product is placeholder(All product), set the array state to be filteredProduct1 so it can show all data, if not, filter it to specific product_type endpoint
        product === "placeholder"
          ? setFilteredArray(filteredProduct1)
          : setFilteredArray(
              filteredProduct1.filter(
                ({ product_type }) => product === product_type
              )
            )
      })
  }, [arrayOfObjectWish, product])

  const getIdObject = (product) => {
    const exist = arrayOfObjectCart.find((x) => x.id === product.id)
    // find if object is already in Cart, if it exists, add qty to be +1 when user clicks the add to cart button. If it does not exist, add new property for qty:1
    if (exist) {
      const newCartItems = arrayOfObjectCart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setArrayOfObjectCart(newCartItems)
    } else {
      const newCartItems = [...arrayOfObjectCart, { ...product, qty: 1 }]
      setArrayOfObjectCart(newCartItems)
    }
  }
  const getWishIdObject = (event, product) => {
    // when user clicks the heart, set inWishList to be opposite boolean value
    product.inWishList = !product.inWishList
    // change the filteredArray inWishList property value to be same as the argument object property value
    filteredArray.filter((individual) => {
      if (individual.id === product.id) {
        individual.inWishList = product.inWishList
      }
      return individual
    })

    const exist = arrayOfObjectWish.find((x) => x.id === product.id)
    // If heart is unclick, remove that item from wishList
    if (
      exist &&
      event.target.className === `heartAnimation ${product.id} animate`
    ) {
      const findSelectedProduct = arrayOfObjectWish.filter(
        (item) => item.id !== product.id
      )
      setArrayOfObjectWish(findSelectedProduct)
      // If heart is clicked, add that object inside of arrayOfObjectWish and change the state value
    } else if (
      !exist &&
      event.target.className === `heartAnimation ${product.id}`
    ) {
      const newCartItems = [...arrayOfObjectWish, { ...product }]
      setArrayOfObjectWish(newCartItems)
    }
  }

  const removeFromWish = (individual) => {
    // If user clicks the remove button from wishList, set inWishList property value to be false
    individual.inWishList = false
    const newFilteredArray = filteredArray.filter((product) => {
      // set the specific object inWishList property to be false, so that heart can be toggled automatically(favorite or unfavorite) - set ternary operator for className in product.js(for heart filled)
      if (product.id === individual.id) {
        product.inWishList = false
      }
      return product
    })
    // remove specific object item from wishList when user clicks remove button
    const filteredWishArray = arrayOfObjectWish.filter((x) => {
      return individual.id !== x.id
    })
    setFilteredArray(newFilteredArray)
    setArrayOfObjectWish(filteredWishArray)
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <div className='App'>
              <HeaderNav
                arrayOfObjectCart={arrayOfObjectCart}
                setArrayOfObjectCart={setArrayOfObjectCart}
                isCartClicked={isCartClicked}
                setIsCartClicked={setIsCartClicked}
                isHeartClicked={isHeartClicked}
                setIsHeartClicked={setIsHeartClicked}
                arrayOfObjectWish={arrayOfObjectWish}
                getIdObject={getIdObject}
                removeFromWish={removeFromWish}
              />
              <Header scollToRef={scollToRef} />
              <main>
                <div className='wrapper'>
                  <NavBar setProduct={setProduct} />
                  <Product
                    filteredArray={filteredArray}
                    getIdObject={getIdObject}
                    getWishIdObject={getWishIdObject}
                    scollToRef={scollToRef}
                  />
                </div>
              </main>
              <Footer />
            </div>
          </>
        }
      />

      <Route
        path='/product/:id'
        element={
          <>
            <div className='App'>
              <HeaderNav
                isCartClicked={isCartClicked}
                setIsCartClicked={setIsCartClicked}
                arrayOfObjectCart={arrayOfObjectCart}
                setArrayOfObjectCart={setArrayOfObjectCart}
                isHeartClicked={isHeartClicked}
                setIsHeartClicked={setIsHeartClicked}
                arrayOfObjectWish={arrayOfObjectWish}
                removeFromWish={removeFromWish}
                getIdObject={getIdObject}
              />
              <ProductDetails getIdObject={getIdObject} />
              <Footer />
            </div>
          </>
        }
      />
    </Routes>
  )
}

export default App

