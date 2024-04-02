import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from './Images/Polygon 1.png';
import Scanner from './Images/Qrcode 1.png';
import { useOutletContext } from "react-router-dom";
import Scanner1 from './Images/Vector (Stroke).png';
import Logout from './Images/Vector (9).png'

const Analytics = () => {
    const {handleChange,setHandleChange,showForm,setShowForm} = useOutletContext()


    return (
        <div className='w-full h-screen mt-10 pb-5 lg:px-0  sm:px-6 px-4  lg:pl-80  '>
            {/* <header className='h-20  w-full bg-black text-white '>
                <button onClick={changeicon} className='bg-blue-700 w-10 h-10'></button>
                <h1>weblify</h1>
            </header> */}
{/* 

            <div className={`fixed pt-14 top-14  w-52 duration-500 ease-out transition-all  bg-white shadow-2xl pl-2 z-10 lg:hidden shadow-blue-300 h-screen ${!handleChange ? 'duration-500 ease-in-out block' : 'duration-500 ease-in-out hidden'}   lg:hidden  h-screen}`}>
                <div className="flex mb-14">
                <img src={Scanner} className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold' >Dashboard</NavLink>

                </div>
                <div className="flex w-full">
                <img src={Scanner1}  className="w-6 h-6 mr-2" />
                    <NavLink to='/' className='text-xl font-bold hover:text-blue-500 active:text-blue-300' >Analytics</NavLink>
                    <img src={Arrow} className="w-5 h-6 ml-12 mt-1"/> 
                </div>

                <div className="flex bottom-44 ml-4 absolute cursor-pointer" >
                <img src={Logout} className="h-4 w-4 mt-1.5" />
                <p className="text-red-500 font-bold ml-1 text-lg">Log Out</p>

                </div>

            </div>

            <div className="fixed pt-20 w-52 bg-white top-20 shadow-xl pl-2 z-10 shadow-blue-300 h-screen lg:block hidden" >
                <div className="flex mb-14">
                <img src={Scanner} className="w-6 h-6 mr-2" />
                    <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold' >Dashboard</NavLink>
                </div>

                <div className="flex w-full">
                <img src={Scanner1}  className="w-6 h-6 mr-2" />
                    <NavLink to='/' className='text-xl font-bold  text-blue-500' >Analytics</NavLink>
                    <img src={Arrow} className="w-5 h-6 ml-12 mt-1"/> 
                </div>

                <div>

                </div>

            </div> */}
            <div className=''>
                <h1 className='lg:hidden text-blue-600 text-2xl  m-auto mt-10 font-bold sm:w-140'> Analytics</h1>
                <p className='w-110  m-auto mt-12 text-lg mb-3 lg:mt-8 lg:w-22 sm:w-140 lg:m-0 lg:mb-3 lg:text-xl font-medium'>shorturl1ttt</p>

                <div className='flex flex-col gap-5   py-12   w-full md:w-150 lg:w-96   border-2  border-blue-300 m-auto md:m-0    '>
                    <div className='flex gap-2 px-7  justify-center  '>
                        <h1 className=' font-bold whitespace-nowrap  '>Original URL :</h1>
                        <p className='break-words max-w-22 sm:max-w-130 ' >http//www.example.com/page</p>
                    </div>

                    <div className='flex gap-4 px-7 '>
                        <h1 className='font-bold'>Custom text :</h1>
                        <p className=''>customtext1</p>

                    </div>
                    <div className='flex gap-5 px-7'>
                        <h1 className='font-bold'>Click count :</h1>
                        <p>100</p>
                    </div>
                    <div className='flex gap-5 px-7'>
                        <h1 className='font-bold'>View count :</h1>
                        <p>500</p>
                    </div>
                </div>

            </div>
            <div className=' mb-40 w-full  md:w-270 m-auto md:m-0  flex items-center   lg:w-250  xl:w-270'>
                
            <table className='h-60 w-10 mt-10 lg:mt-12'>
                <tbody className=''>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>120</p></td></tr>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>100</p></td></tr>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>80</p></td></tr>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>60</p></td></tr>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>40</p></td></tr>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>20</p></td></tr>
                    <tr className='relative'><td className=' border-r-0 border-l-0 border-blue-600'><p className='absolute right-2'>0</p></td></tr>
                    
                </tbody>
            </table>
               
                {/* <div className='absolute flex justify-start sm:gap-11 md:gap-14 lg:gap-15 sm:w-150 w-full md:w-250 lg:w-250    h-60 sm:pl-6 md:pl-8 '>
                    <div className='flex items-end justify-center gap-2  '>
                        <div className='w-4 bg-blue-600 h-10'></div>
                        <div className='w-4 bg-red-600 h-8'></div>
                    </div>
                    <div className='     flex items-end gap-2 '>
                        <div className='w-4 bg-blue-600 h-52'></div>
                        <div className='w-4 bg-red-600 h-20'></div>
                    </div>

                    <div className='     flex items-end gap-2 '>
                        <div className='w-4 bg-blue-600 h-10'></div>
                        <div className='w-4 bg-red-600 h-40'></div>
                    </div>
                    <div className='flex items-end gap-2 '>
                        <div className='w-4 bg-blue-600 h-44'></div>
                        <div className='w-4 bg-red-600 h-28'></div>
                    </div>
                    <div className='flex items-end gap-2 '>
                        <div className='w-4 bg-blue-600 h-16'></div>
                        <div className='w-4 bg-red-600 h-32'></div>
                    </div>
                </div> */}
                <table className=' border-blue-600 w-full  md:w-270 m-auto lg:mt-12 lg:m-0 lg:w-250 xl:w-270 h-60 mt-10'>

                    <tbody>
                        <tr className=' border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600 '></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                        </tr>
                        <tr className='border border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600   '></td>
                        </tr>
                        <tr className=' border-blue-600'>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600'></td>
                            <td className='border border-blue-600 relative'> <div className=' hidden bg-gray-950 absolute margin items-end justify-center gap-2  '>
                        <div className='w-4 bg-blue-600 h-20'></div>
                        <div className='w-4 bg-red-600 h-8'></div>
                    </div></td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div >
    )
}

export default Analytics