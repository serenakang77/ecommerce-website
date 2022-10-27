import "./scss/styles.scss"
// import "./App.css"
import Main from "./components/Main"
import Header from "./components/Header"
import { useState, useEffect } from "react"

function App() {
  const [product, setProduct] = useState([])
  const [productArray, setproductArray] = useState([])
  const [testArray, setTestArray] = useState([])
  const [filteredArray, setFilteredArray] = useState([])

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
  useEffect(() => {
    async function getApiData() {
      const response1 = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json`
      )
      const data1 = await response1.json()
      const filteredProduct1 = data1
        .filter((individual) =>individual.currency === "USD" && individual.price !== "0.0")
        .slice(0, 200)
        console.log(filteredProduct1)
      setTestArray(filteredProduct1)
      // const tes = [...testArray]
      // console.log(tes);
      // console.log(testArray);
    }
    getApiData()
  }, [product])
  // }, [product])
  // if(){
  //   return(
      
  //   )
  // }
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
  return (
    <div className='App'>
      <Header />

      <Main
        setproductArray={setproductArray}
        productArray={productArray}
        product={product}
        setProduct={setProduct}
        testArray={testArray}
        setTestArray={setTestArray}
        filteredArray={filteredArray}
        setFilteredArray={setFilteredArray}
      />
    </div>
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
