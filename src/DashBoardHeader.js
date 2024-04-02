import React from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function DashBoardHeader ({handleChange,setHandleChange}) {


    const handleBar = () => {
        setHandleChange (prevstate => !prevstate)
    }




    return (
    
        <div className="flex justify-between  items-center w-full h-14 px-4 sm:px-6 z-10 lg:h-16 lg:px-20  fixed top-0   bg-blue-600 ">
        <div onClick={handleBar} className="lg:hidden" > 
        { handleChange ?      
        <FaBars className="text-white text-3xl  " /> :
        <FaTimes className="text-white text-4xl  "/>}
        </div> 
        <div className="border-r-r  border-white hidden lg:flex h-full  w-32 items-center">
        <h3 className="text-white text-2xl font-bold">Weblify</h3>
        </div>
        <h3 className="text-white text-2xl lg:hidden font-bold  ">Weblify</h3>
        <div className="hidden lg:flex">
        <h3 className="text-white text-2xl font-bold ">Dashboard</h3>
        </div>
        </div>

    

    )
}

export default DashBoardHeader;