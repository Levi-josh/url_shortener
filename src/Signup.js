import React,{useState,useEffect} from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Signup (){
   
    const [visibility,setVisibility] = useState(true)
    const [formValues,setFormValues] = useState ({email:'',password:''})
    const [error,setError] = useState({})
    const [users,setUsers] = useState([])
    const handlevisibility = () =>{
        setVisibility(prevstate => !prevstate)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
         setFormValues('')
        setError('')
         
        const option = {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify( formValues)
        }
        try {
    
          const response = await fetch('https://weblify.onrender.com/v1/auth/register', option);
          const data = await response.json()
          setUsers(data.data)
          
        }
    
        catch (err) {
          setError(err)
    
        }
       
      };
    
 
    const handleFormChanges = (e) =>{
     const {name,value} = e.target
     setFormValues( (prevdata) => ({
        ...prevdata,
        [name] : value
     }))
    
    }
    return(
        <div className="flex items-center justify-center h-screen md:h-auto min-h-screen bg-white">
         
            <div className=" bg-newblue text-center pt-10 pb-10 md:mr-4  lg:mr-10 lg:px-6 lg:pb-14 md:pt-14 md:pb-14 lg:pt-12 md:px-4 relative  rounded-lg shadow-lg " >
                <h3 className="font-bold text-xl lg:text-2xl "> Create Account</h3>
                <form onSubmit={handleSubmit}>
               {error.message ? <h4>{error.message}</h4> : null} 
               <input type="email"   placeholder="Email Address"  className=" md:mt-12 sm:mt-12 md:mb-10  lg:mb-10 pl-3 w-80  lg:w-100  md:w-96 pt-1 rounded-lg pb-1 border-2 border-gray-300 mb-10 outline-none text-lg "required value={formValues.email} name="email" onChange={handleFormChanges} /> <br/>
               <input type={visibility ? 'password' : 'text'} placeholder="Password"  className=" sm:mb-12 md:mb-10   pt-1 rounded-lg w-80 lg:mb-12 lg:w-100  md:w-96 pb-1 pl-3 border-2 border-gray-300 outline-none text-lg"required name="password" maxLength={12} value={formValues.password} onChange={handleFormChanges}/> <br/>
            { visibility ? (   <FaEye className="absolute lg:right-12 lg:bottom-64  lg:mb-16 md:right-7  md:bottom-64 md:mb-7 text-gray-900" onClick={handlevisibility} />):
               <FaEyeSlash className="absolute lg:right-12 md:bottom-64 md:right-7 md:mb-7 lg:mb-16  lg:bottom-64  text-gray-900" onClick={handlevisibility} />}
               <p className="text-gray-800 text-sm lg:text-lg lg:mb-10 mb-10">By Clicking on "Create Account", I Agree To Weblify's <span className="text-blue-500">Terms<br/>& Condition</span> And <span className="text-blue-500">Privacy Policy</span></p>
               <button className="bg-blue-500 rounded-lg lg:mb-12 text-white px-4 mb-10 lg:px-6 py-1" type="submit">Create Account</button>
               <p className="lg:text-lg">Already Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"><NavLink to='/Login'>Login in</NavLink></span></p>
                </form>
            </div>

            <div className="text-center w-80">
                <h3 className="md:text-3xl font-bold text-2xl lg:text-4xl text-blue-600 mb-8  ">Weblify</h3>
                <p className="text-gray-800   text-lg">Effortlessly create short links for social <br/> media marketing and more.</p>
            </div>
        </div>
    )
}

export default Signup;