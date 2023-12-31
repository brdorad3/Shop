import { Link } from "react-router-dom"
export default function Navbar(){
return(
    <>
    <header>
                <h1>Robnite shop</h1>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="pics">
                <img src="./src/assets/magnify.svg" alt="" />
                <img src="./src/assets/cart-outline.svg" alt="" />
                </div>
            </header>
    
    
    
    </>
)
}