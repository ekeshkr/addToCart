import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


function App() {

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  

  async function products(){
      let url = await fetch('https://fakestoreapi.com/products');
      let response = await url.json();
      let data = response;
      console.log(data);
      setItems(data);
  }

  useEffect(()=>{
    products();
  },[])


  const addToCart = (itemToAdd) => {
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === itemToAdd.id);

    if (existingCartItemIndex === -1) {
      setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]);
      
    } 
  }

  

  return (
    <>
      <Navbar />
     <Cart cartItems={cartItems} setCartItems={setCartItems}/>
     <div>------------------</div>
     <ProductList items={items} addToCart={addToCart} />
    </>
  );
}

export default App;
