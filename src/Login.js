 import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate,useOutletContext, useLocation} from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


function Login() {
  const [users, setUsers] = useState([])
  const [visibility, setVisibility] = useState(true)
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [isloading, setLoading] = useState(false)

  const location = useLocation()
   const {showForm,setShowForm} =  useOutletContext()
  const handlevisibility = () => {
    setVisibility(prevstate => !prevstate)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    

    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: formValues.email, password: formValues.password })
    }
    try {

      const response = await fetch('https://weblify.onrender.com/v1/auth/login', option);
      const data = await response.json()
      setUsers(data)
      if (data?.data.id) { return navigate(`/?access=${data.data.accessToken}`) }
 
      
    }

    catch (err) {
      setError(err)

    }
    setLoading(false)
    setFormValues('')
    
  };


  const handleFormChanges = (e) => {
    const { name, value } = e.target
    setFormValues((prevdata) => ({
      ...prevdata,
      [name]: value
    }))

  }

  {/*useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if(action === "POP" && location.pathname === '/Login'){
        history.replace('/')
      }
    });

    return() => {
      unlisten()
    }
  },[history])
*/}


  return (
    <div className=" relative overflow-y-hidden md:overflow-y-visible h-screen">
    


   {showForm ? (

<div className="md:hidden block">

<div  className="grid place-items-center h-full  ">
<div className="text-center  visible md:invisible">
        <h3 className=" font-bold text-3xl  text-blue-600 mb-4 mt-8  ">Weblify</h3>
        <p className="text-gray-800   text-lg">Effortlessly create short  links for social<br /> media, marketing and more.</p>
      </div>

   


     
      <div className=" bg-newblue text-center relative  rounded-lg shadow-lg mt-12 px-2 sm:px-4 visible md:hidden " >
        <h3 className="font-bold text-xl lg:text-2xl mt-8 sm:mt-10"> Sign In</h3>
        <form onSubmit={handleSubmit}>
          {error.message ? <h4 className="text-red-600">{error.message}</h4> : null}
          <input type="email" placeholder="Email Address" className=" outline-none border-gray-300 border-2 rounded-lg sm:mt-10 pl-3  sm:w-96 w-80 px-1 py-1 mt-8 " required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
          <input type={visibility ? 'password' : 'text'} placeholder="Password" className="border-gray-300 right-6 border-2 sm:w-96 w-80 pl-3 outline-none px-1 py-1 mt-10 mb-10 rounded-lg" required name="password" maxLength={12} value={formValues.password} onChange={handleFormChanges} /> <br />
          {visibility ? (<FaEye className="absolute sm:bottom-36 bottom-32  sm:mb-10 sm:left-80 right-6 mb-10 sm:ml-12 text-gray-900" onClick={handlevisibility} />) :
            <FaEyeSlash className="absolute sm:bottom-36 bottom-32 mb-10 right-6 sm:mb-10 sm:left-80 sm:ml-12 text-gray-900" onClick={handlevisibility} />}
          
       {isloading ? (   <button className="bg-blue-500 rounded-lg  text-white px-8 mb-6 sm:mb-8 lg:px-6 py-1 " type="submit" disabled>Sign In</button>):
          <button className="bg-blue-500 rounded-lg  text-white px-8 mb-6 sm:mb-8 lg:px-6 py-1 " type="submit">Sign In</button>}
          <p className="mb-10 sm:mb-12">Don't Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"><NavLink to='/Signup'>Sign Up</NavLink></span></p>
        </form>

        
   {isloading ? (

  
    
<div className="  z-10   " ><FaSpinner className="md:h-11 absolute h-20 w-20 md:w-11 sm:left-40 left-32 bottom-44 rotate-180 animate-spin "/></div>


):null}

      </div>

      </div>
      
      </div>
): null}

    



    {showForm ? (

    <div className="hidden md:block">

    <div className="flex items-center justify-center h-screen min-h-screen bg-white  m-0   ">
   
      <div className=" bg-newblue text-center pt-10 pb-10 md:mr-4  lg:mr-10 lg:px-8 lg:pb-12 md:py-12 lg:pt-12 md:px-4 relative hidden md:block  rounded-lg shadow-lg " >
        <h3 className="font-bold text-xl lg:text-2xl "> Sign In</h3>
        <form onSubmit={handleSubmit}>
          {error.message ? <h4 className="text-red-600">{`Error : ${error.message}`}</h4> : null}
          <input type="email" placeholder="Email Address" className="  md:mt-16 md:mb-10 w-80 lg:mb-10 lg:mt-20 lg:w-100 md:w-96 pl-3 rounded-lg pt-1  pb-1 border-2 border-gray-300 outline-none lg:text-lg text-lg" required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
          <input type={visibility ? 'password' : 'text'} placeholder="Password" className="  md:mb-10   pt-1 rounded-lg w-80 lg:mb-10 lg:w-100  md:w-96 pb-1 pl-3 border-2 border-gray-300 outline-none text-lg" required name="password" maxLength={12} value={formValues.password} onChange={handleFormChanges} /> <br />
          {visibility ? (<FaEye className="absolute lg:right-12 lg:bottom-48  lg:mb-12 md:right-7  md:bottom-48  md:mb-5 text-gray-900" onClick={handlevisibility} />) :
            <FaEyeSlash className="absolute lg:right-12 md:bottom-48 md:right-7 md:mb-5 lg:mb-12  lg:bottom-48  text-gray-900" onClick={handlevisibility} />}

        {isloading ? (  <button className="bg-blue-500 rounded-lg md:mb-14 md:px-8 lg:mb-16 lg:mt-4 text-white px-6 mb-10 lg:px-12 py-1" type="submit" disabled>Sign In</button>):
          <button className="bg-blue-500 rounded-lg md:mb-14 md:px-8 lg:mb-16 lg:mt-4 text-white px-6 mb-10 lg:px-12 py-1" type="submit">Sign In</button>}
          <p className="lg:text-lg">Don't Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"  ><NavLink to='/Signup'>Sign Up </NavLink></span></p>
        </form>

        {isloading ? (

  
    
<div className="  z-10   " ><FaSpinner className="md:h-20 absolute h-20 w-20  md:w-20 sm:left-40 left-36 lg:left-56 bottom-44 rotate-180 animate-spin "/></div>


):null}     
 
      </div>


      <div className="text-center w-80 invisible  md:visible ">
        <h3 className="md:text-3xl font-bold text-2xl lg:text-4xl text-blue-600 mb-8  ">Weblify</h3>
        <p className="text-gray-800   text-lg">Effortlessly create short links for social <br /> media, marketing and more.</p>
      </div>

      </div>
      
      </div>

):null}


    


    </div>
  )
}

export default Login;

