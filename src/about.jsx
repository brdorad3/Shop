import Navbar from "./header";
import { Outlet } from "react-router-dom";


export default function About(){
    return(
<>
<Navbar/>
<Outlet/>

</>
    )
}