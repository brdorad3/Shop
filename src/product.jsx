import Navbar from "./header"

import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";


export default function ProductsPage() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [cart, setCart] = useState(0);

  function handleChange(e){
setCart(e.target.value);
console.log(cart)
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics",
          { mode: "cors" }
        );

        if (!response.ok) {
          throw new Error("Server Error");
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      
      <div className="allItems">
      {items ? (
        items.map((item) => (
          <div className="items" key={item.id}>
            
            <img src={item.image} className="products" alt={item.title} />
            <h3>{item.title}</h3>
            <div className="price">
          <p>${item.price}</p>
          <div className="cart">
          <input onChange={handleChange} type="number" max={10}/>
            <div className="button">Add to cart <img src="./src/assets/cart-outline.svg" alt="" /> </div>
            </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}
