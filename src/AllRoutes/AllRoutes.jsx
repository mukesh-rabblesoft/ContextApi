import React, { Fragment } from "react";
import Header from "../Component/Header/Header";
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import Home from "../Component/Home/Home";

import {
    Routes,
    Route,
  } from "react-router-dom";


const AllRoutes=()=>{
    return(
        <Fragment>
<Header/>
        <Routes>
               <Route exact  path="/" element={<Home/>} /> 
               <Route exact  path="/about" element={<About/>} /> 
               <Route exact  path="/contact" element={<Contact/>} /> 
        
        </Routes>
        
        </Fragment>
    )
}
export default AllRoutes;