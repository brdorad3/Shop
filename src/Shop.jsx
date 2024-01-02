import { Link } from "react-router-dom"
import Navbar from "./header"
import Cart from "./cart"

export default function Home(){




    return(
        <div>
           <Navbar/>
           
            <main>
                <div className="text">
                <h1>Welcome to Robnite</h1>
                </div>
              
            </main>

        </div>
    )
}