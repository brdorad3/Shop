import Navbar from "./header"
import { useEffect, useState } from "react";

export default function ProductsPage() {
  
  const [items, setItems] = useState(null);
  
  const [item, setitem] = useState([]);
  

function handleClick(tem){
  if (!item.find((addedItem) => addedItem.id === tem.id)) {
    setitem([...item, tem]);
  }
}

  function handleChange(e, itemId) {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: parseInt(e.target.value, 10) || 0, // Ensure it's a valid number or default to 0
          }
        : item
    );
    setItems(updatedItems);
    console.log(items)
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
        const peopleWithImages = data.map((person) => {
          return {
            ...person,
            quantity:1,
            isOpen:false,
          };
        });
        setItems(peopleWithImages);
      } catch (error) {
        alert(error)
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar items={items} item={item} />
      <div className="allItems">
      {items ? (
        items.map((item) => (
          <div className="items  bg-white" key={item.id}>
            <div className="imgs">
            <img src={item.image} className="products" alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="price">
          <p>${item.price}</p>
          <div className="cart">
          <input  onChange={(e) => handleChange(e, item.id)} type="number"  max={10} min={0} placeholder="0"/>
         
            <div onClick={()=>handleClick(item)} className="button">Add to cart <img src="./src/assets/cart-outline.svg" alt="" /> </div>
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