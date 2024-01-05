import { Link } from "react-router-dom"
import { useState } from "react"
import Cart from "./cart"
export default function Navbar({items, item}){

const [isActive, setIsActive] = useState(false)
    function handleClick(){
        setIsActive(!isActive)
        
    }
return(
    <header>
                <h1 className="font-black text-2xl"  >Robnite shop</h1> 
                <ul>
                    <li > <Link  to="/">Home</Link></li>
                    <li> <Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="pics flex">
                <img src="./src/assets/magnify.svg" alt="" />
                 <img onClick={handleClick} src="./src/assets/cart-outline.svg" alt="" />
                {isActive &&( <Cart items={items} item={item} />)}
                </div>
    </header>
)}