import Navbar from "./header";
import { Outlet } from "react-router-dom";


export default function About(){
    return(
<>
<Navbar/>
<div className="about bg-white w-screen flex items-center justify-center flex-col">
<h1 className=" text-2xl">This is a fictional store and none of the products displayed here exist.</h1>
<h1 className="text-2xl">Products information and images: Fake Store API.</h1>
</div>



<Outlet/>

</>
    )
}