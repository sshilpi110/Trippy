import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Routes/Home"
import About from "../Routes/About"
import Services from "../Routes/Services"
import Contact from "../Routes/Contact"


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>

        </Routes>
    )
}
export default AllRoutes ;