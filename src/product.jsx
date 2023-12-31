import Navbar from "./header"
import { Outlet } from "react-router-dom";
export default function Product(){

    return(
    <>
    <Navbar/>
    <Outlet/>
    </>)
}