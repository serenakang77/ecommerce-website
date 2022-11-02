import "./scss/styles.scss"
import { Routes, Route } from "react-router-dom"
// import "./App.css"
// import Main from "./components/Main"
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
  const [productId, setProductId] = useState("")
  const [cartId, setCartId] = useState("")
  const [arrayOfObjectCart, setArrayOfObjectCart] = useState([])
  const [isCartClicked, setIsCartClicked] = useState(false)
  const [isHeartClicked, setIsHeartClicked] = useState(false)
  const [arrayOfObjectWish, setArrayOfObjectWish] = useState([])
  const scollToRef = useRef();
  // const [wishListProductId, setWishListProductId] = useState("")
  
  useEffect(() => {
    const myparams = product==="placeholder"?
    {}:
    {
      product_type: `${product}`
    }
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json", {
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
          // inWishList property added
          filteredProduct1.map((item) => {
            item.inWishList = false
            // if this item inWishList array, then set this to true
            arrayOfObjectWish.filter((x)=> {
              if(x.id === item.id){
                console.log("code is here");
                item.inWishList=true
              }
              return x
            })
          })
        product == "placeholder"
          ? setFilteredArray(filteredProduct1)
          : setFilteredArray(
              filteredProduct1.filter(
                ({ product_type }) => product == product_type
              )
            )
           

      })

  }, [product])

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
    // console.log(event.target);
    const exist = arrayOfObjectWish.find((x) => x.id === product.id)
    // If heart is unclick, remove that item from wishList
    if (exist && event.target.className == `heartAnimation ${product.id} animate`) {
      const findSelectedProduct = arrayOfObjectWish.filter((item) => item.id != product.id)
      setArrayOfObjectWish(findSelectedProduct)
      // If heart is clicked, add that item from wishList
    }else if (!exist && event.target.className == `heartAnimation ${product.id}`) {
      const newCartItems = [...arrayOfObjectWish, { ...product }]
      setArrayOfObjectWish(newCartItems)
    }
  }

  const removeFromWish = (e, individual) => {
    individual.inWishList = false
    console.log(individual);
    console.log(filteredArray.includes(individual));
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
  
  // const find = (e, product) => {
  //   const exist = arrayOfObjectWish.find((x) => x.id === product.id)
  //   if(!exist){
  //     return e.target.className = "heartAnimation animate"
  //   }
  // }

  const matchWishList = (newItem) => {
    // it will return true if the same item filtered array has wish list set to true
    // let wish = false;
    filteredArray.filter((x) => {
      if (x.id === newItem.id) {
        // send the wishList value of this object
        newItem.inWishList = x.inWishList
      }
      return x
    })
    // wish now has the value of the filtered array inWishList
    return newItem
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
                  setArrayOfObjectWish={setArrayOfObjectWish}
                  getIdObject={getIdObject}
                  removeFromWish={removeFromWish}
                />
                <Header scollToRef={scollToRef} />
                <main>
                  <div className='wrapper'>
                    <NavBar setProduct={setProduct} />
                    <Product
                      product={product}
                      filteredArray={filteredArray}
                      setProductId={setProductId}
                      getIdObject={getIdObject}
                      // isHeartClicked={isHeartClicked}
                      // setIsHeartClicked={setIsHeartClicked}
                      arrayOfObjectWish={arrayOfObjectWish}
                      setArrayOfObjectWish={setArrayOfObjectWish}
                      getWishIdObject={getWishIdObject}
                      scollToRef={scollToRef}
                      // find={find}
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
                  setArrayOfObjectWish={setArrayOfObjectWish}
                  removeFromWish={removeFromWish}
                  getIdObject={getIdObject}
                />
                <ProductDetails
                  getIdObject={getIdObject}
                  // isHeartClicked={isHeartClicked}
                  // setIsHeartClicked={setIsHeartClicked}
                  arrayOfObjectWish={arrayOfObjectWish}
                  setArrayOfObjectWish={setArrayOfObjectWish}
                  getWishIdObject={getWishIdObject}
                  matchWishList={matchWishList}
                />
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    )
}

export default App

// PSEUDO CODE

// Inside of App.js, make useState for product type value & product type array and pass it to children component by props
// Get the API data by async function and useEffect when the product type value changes

// Make a Header Component
// Inside of header component(Logo, cart, currency)
// Stretch goal: Make Carousels in header to see some popular list of items
// Stretch goal: put USD and CAD(header nav) and convert all the price with calculated price
// stretch goal: put onClick button on cart icon, so it appears the cart page with the list of items, total price, and button for check out

// Make a Main Component 

// Make a Nav component inside of Main component(input, label) 
// make input element that has a value of specific type, so we can use event.target.value to update productype value

// Make Product component inside of Main component
// Make itemList component inside of Main component
// map through individual array, and show individual item image, item name, price, add to cart button

// useEffect(() => {
//   async function getApiData() {
//     const response = await fetch(
//       `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`
//     )
//     const data = await response.json()
//     const filteredProduct = data
//       .filter((individual) => individual.currency === "USD" && individual.price !== "0.0")
//       .slice(0, 24)
//     return setproductArray(filteredProduct)
//   }
//   getApiData()
// }, [product])









        // useEffect(() => {
          //   async function getApiData() {
            //     const response = await fetch(
              //       `http://makeup-api.herokuapp.com/api/v1/products.json`
              //     )
              //     const data = await response.json()
              //     const filteredProduct = data
  //       .filter(
    //         (individual) =>
    //           individual.currency === "USD" && individual.price !== "0.0"
    //       )
    //       .slice(0, 150)
    //     return setproductArray(filteredProduct)
    //   }
    //   getApiData()
    // }, [product])
    
    // getApiData()