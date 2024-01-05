import { Link } from "react-router-dom"
import Navbar from "./header"
import Cart from "./cart"

export default function Home(){
    return(
        <div>
           <Navbar/>
            <main>
                <div className="text flex-col text-center justify-start" >
                <h1 className="text-5xl mt-10 font-bold " >Welcome to Robnite</h1>
                <p className=" text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit br. <br />Placeat at quasi culpa earum, ut saepe quam itaque quidem harum!</p>
                </div>
            </main>
        </div>
    )
} 