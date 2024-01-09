import React,{useState} from "react";
import { Outlet, } from "react-router-dom";
import DashBoardHeader from "./DashBoardHeader";
import { useOutletContext } from "react-router-dom";


function DashBoardHome () {
 const [handleChange,setHandleChange] = useState(true)

 const {showForm,setShowForm} = useOutletContext()



 




    return (
        <div>

       <DashBoardHeader handleChange={handleChange} setHandleChange={setHandleChange}/>
       <Outlet context={{handleChange,setHandleChange,setShowForm,showForm}} />

        </div>
    )
}


export default DashBoardHome;