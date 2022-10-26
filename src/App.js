import './App.css';

function App() {

  async function getApiData(){
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json`
    )
    const data = await response.json()
    console.log(data)
    return data
  }
  getApiData()
  return (
    <div className="App">

    </div>
  );
}

export default App;



// PSEUDO CODE

// Make a Header Component
  // Stretch goal: Make Carousels in header to see some popular list of items
  // Stretch goal: put USD and CAD and convert all the price with calculated price
  // Inside of header component(Logo, cart)
    // stretch goal: put onClick button on cart icon, so it appears the cart page with the list of items, total price, and button for check out
    

// Make a Main Component
  // Make a nav component inside of Main component
    // Make individual li(or input) for product type 

  // Make itemList component inside of Main component 
    // map through individual array, and show individual item image, item name, price, add to cart button