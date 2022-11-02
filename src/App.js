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
  const [product, setProduct] = useState("placeholder")
  const [filteredArray, setFilteredArray] = useState([])
  const [arrayOfObjectCart, setArrayOfObjectCart] = useState([])
  const [isCartClicked, setIsCartClicked] = useState(false)
  const [isHeartClicked, setIsHeartClicked] = useState(false)
  const [arrayOfObjectWish, setArrayOfObjectWish] = useState([])
  const scollToRef = useRef();
  const [wishList, setWishList] = useState([])

  useEffect(() => {
    const myparams = product==="placeholder"?
    {}:
    {
      product_type: `${product}`
    }
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json", {
        params: myparams 
      })
      .then(function (res) {
        const filteredProduct1 = res.data
          .filter(
            (individual) =>
              individual.currency === "USD" &&
              individual.price !== "0.0" &&
              individual.id !== 1005 &&
              individual.id !== 1004 &&
              individual.id !== 1003 &&
              individual.id !== 1002 &&
              individual.id !== 1001 &&
              individual.id !== 1000 &&
              individual.id !== 999
          )
          .slice(0, 200)
          filteredProduct1.map((item) => {
            item.inWishList = false
            arrayOfObjectWish.filter((x)=> {
              if(x.id === item.id){
                item.inWishList=true
              }
              return x
            })
            return item
          })
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
    // toggle the boolean value
   product.inWishList=!product.inWishList
    filteredArray.filter((x)=> {
      if(x.id===product.id){
        x.inWishList=product.inWishList
      }
      return x
    })
    const exist = arrayOfObjectWish.find((x) => x.id === product.id)
    // If heart is unclick, remove that item from wishList
    if (exist && event.target.className === `heartAnimation ${product.id} animate`) {
      const findSelectedProduct = arrayOfObjectWish.filter((item) => item.id !== product.id)
      setArrayOfObjectWish(findSelectedProduct)
      // If heart is clicked, add that item from wishList
    }else if (!exist && event.target.className === `heartAnimation ${product.id}`) {
      const newCartItems = [...arrayOfObjectWish, { ...product }]
      setArrayOfObjectWish(newCartItems)
    }
  }

  const removeFromWish = (e, individual) => {
    individual.inWishList = false
    const newFilteredArray = filteredArray.filter((x) => {
      
      if(x.id=== individual.id){
        x.inWishList = false
      }
      return x

    })
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
                  setWishList={setWishList}
                  wishList={wishList}
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
                      setWishList={setWishList}
                      wishList={wishList}
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
                  setWishList={setWishList}
                  wishList={wishList}
                />
                <ProductDetails getIdObject={getIdObject}/>
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    )
}

export default App

