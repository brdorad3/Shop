import { Link } from "react-router-dom"
import { useState } from "react"
import Cart from "./cart"
export default function Navbar({items, item}){
 
const [isActive, setIsActive] = useState(false)
    function handleClick(){
        setIsActive(!isActive)
        
    }
return(
    <header className=" bg-indigo-900 px-10">
                <h1 className="font-black text-2xl text-white"  >Robnite shop</h1> 
                <ul>
                    <li > <Link  to="/">Home</Link></li>
                    <li> <Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="pics flex">
               
                 <img onClick={handleClick} src="./src/assets/cart.png" alt="" />
                
                {isActive &&( <Cart items={items} item={item} />)}
                </div>
    </header>
)}