import React,{useState,useEffect} from "react";

import { Outlet, useLocation } from "react-router-dom";



function    ScrollToTop (){

    const [showForm,setShowForm] = useState(true)

    const location = useLocation();
 useEffect(() =>{
  window.scrollTo(0,0);

 },[location]);

    
return (
    <Outlet context={{showForm,setShowForm}} />
)


}



export default ScrollToTop;