import React,{useState} from "react";
import { Outlet, } from "react-router-dom";
import DashBoardHeader from "./DashBoardHeader";
import Arrow from './Images/Polygon 1.png';
import Scanner from './Images/Qrcode 1.png';
import { useOutletContext } from "react-router-dom";
import Scanner1 from './Images/Vector (Stroke).png';
import Logout from './Images/Vector (9).png'
import { NavLink } from 'react-router-dom'
function DashBoardHome () {
 const [handleChange,setHandleChange] = useState(true)

 const {showForm,setShowForm} = useOutletContext()



 




    return (
        <div className="lg:pt-20 pt-16 ">
        

        <div className={`fixed pt-14 top-14  w-52 duration-500 ease-out transition-all  bg-white shadow-2xl pl-2 z-10 lg:hidden shadow-blue-300 h-screen ${!handleChange ? 'duration-500 ease-in-out block' : 'duration-500 ease-in-out hidden'}   lg:hidden  h-screen}`}>
                <div className="flex mb-14">
                <img src={Scanner} className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold' >Dashboard</NavLink>

                </div>
                <div className="flex w-full">
                <img src={Scanner1}  className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/Analytics' className='text-xl font-bold hover:text-blue-500 active:text-blue-300' >Analytics</NavLink>
                    <img src={Arrow} className="w-5 h-6 ml-12 mt-1"/> 
                </div>

                <div className="flex bottom-44 ml-4 absolute cursor-pointer" >
                <img src={Logout} className="h-4 w-4 mt-1.5" />
                <p className="text-red-500 font-bold ml-1 text-lg">Log Out</p>

                </div>

            </div>

            <div className="fixed pt-20 w-52 bg-white top-20 shadow-xl  pl-2 z-10 shadow-blue-300 h-screen hidden lg:block" >
                <div className="flex mb-14">
                <img src={Scanner} className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold' >Dashboard</NavLink>
                </div>

                <div className="flex w-full">
                <img src={Scanner1}  className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/Analytics' className='text-xl font-bold  text-blue-500' >Analytics</NavLink>
                    <img src={Arrow} className="w-5 h-6 ml-12 mt-1"/> 
                </div>

                <div>

                </div>

            </div>
       <DashBoardHeader handleChange={handleChange} setHandleChange={setHandleChange}/>
       <Outlet context={{handleChange,setHandleChange,setShowForm,showForm}} />

        </div>
    )
}


export default DashBoardHome;