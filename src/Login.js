import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate, useOutletContext, useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


function Login() {
  const [users, setUsers] = useState([])
  const [visibility, setVisibility] = useState(true)
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [isloading, setLoading] = useState(false)

  const location = useLocation()
  const { showForm, setShowForm } = useOutletContext()
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
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: formValues.email, password: formValues.password })
    }
    try {

      const response = await fetch('https://weblify.onrender.com/v1/auth/login', option);
      const data = await response.json()
      
      setUsers(data.data)
      if (data?.data) { return navigate ('/DashBoardHome/DashBoard')}
    }

    catch (err) {
      setError(err)

    }
    setLoading(false)
    setFormValues('')

  };





  


  //(`?${data.data.accessToken}`)
  //


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
    <div className=" relative   h-screen">
<NavLink to={'/'}><FaArrowLeft className="absolute font-bold top-6 left-6 sm:top-10 sm:left-10 sm:text-lg"/></NavLink>


      {showForm ? (

        <div className="lg:hidden flex justify-center h-full ">
          <div className="flex flex-col justify-center h-full  ">
            <div className="text-center  visible lg:invisible">
              <h3 className=" font-bold text-3xl  text-blue-600 mb-4 mt-8  ">Weblify</h3>
              <p className="text-gray-800  text-lg">Effortlessly create short  links for social<br /> media, marketing and more.</p>
            </div>





            <div className=" bg-newblue text-center relative  rounded-lg shadow-lg mt-12 px-2 sm:px-4 visible lg:hidden " >
              <h3 className="font-bold text-xl lg:text-2xl mt-8 sm:mt-10"> Sign In</h3>
              <form onSubmit={handleSubmit}>
                {error.message ? <h4 className="text-red-600 text-sm">{error.message}</h4> : null}
                <input type="email" placeholder="Email Address" className=" outline-none border-gray-300 border-2 rounded-lg sm:mt-10 pl-3  sm:w-96 w-80 px-1 py-1 mt-8 " required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
                <input type={visibility ? 'password' : 'text'} placeholder="Password" className="border-gray-300 right-6 border-2 sm:w-96 w-80 pl-3 outline-none px-1 py-1 mt-10 mb-10 rounded-lg" required name="password" maxLength={25} value={formValues.password} onChange={handleFormChanges} /> <br />
                {!visibility ? (<FaEye className="absolute sm:bottom-36 bottom-32  sm:mb-10 sm:left-80 right-6 mb-10 sm:ml-12 text-gray-900" onClick={handlevisibility} />) :
                  <FaEyeSlash className="absolute sm:bottom-36 bottom-32 mb-10 right-6 sm:mb-10 sm:left-80 sm:ml-12 text-gray-900" onClick={handlevisibility} />}

                {isloading ? (<button className="bg-blue-500 rounded-lg  text-white px-8 mb-6 sm:mb-8 lg:px-6 py-1 " type="submit" disabled>Sign In</button>) :
                  <button className="bg-blue-500 rounded-lg  text-white px-8 mb-6 sm:mb-8 lg:px-6 py-1 " type="submit">Sign In</button>}
                <p className="mb-10 sm:mb-12">Don't Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"><NavLink to='/Signup'>Sign Up</NavLink></span></p>
              </form>


              {isloading ? (



                <div className="  z-10   " ><FaSpinner className="md:h-11 absolute h-14 w-14 md:w-11 sm:left-40 left-36 bottom-44 rotate-180 animate-spin " /></div>


              ) : null}

            </div>

          </div>

        </div>
      ) : null}





      {showForm ? (

        <div className="hidden lg:block ">

          <div className="flex items-center justify-center h-screen min-h-screen   m-0   ">

            <div className=" bg-newblue xl:w-121 w-122 text-center pt-10 pb-10 md:mr-4  lg:mr-10 lg:px-8 lg:pb-12 md:py-12 lg:pt-12 md:px-4 relative hidden lg:block  rounded-lg shadow-lg " >
              <h3 className="font-bold text-xl lg:text-2xl "> Sign In</h3>
              <form onSubmit={handleSubmit}>
                {error.message ? <h4 className="text-red-600 text-sm">{`Error : ${error.message}`}</h4> : null}
                <input type="email" placeholder="Email Address" className="  md:mt-16 md:mb-10 w-80 lg:mb-10 lg:mt-20 lg:w-100 md:w-96 pl-3 rounded-lg pt-1  pb-1 border-2 border-gray-300 outline-none lg:text-lg text-lg" required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
                <div className=" h-2 relative  lg:mb-12">
                <input type={visibility ? 'password' : 'text'} placeholder="Password" className="    pt-1 rounded-lg  w-full pb-1 pl-3 border-2 border-gray-300 outline-none text-lg" required name="password" maxLength={25} value={formValues.password} onChange={handleFormChanges} /> 
                {!visibility ? (<FaEye className="absolute lg:right-6 top-3   lg:mb-16 md:right-7   md:mb-7 text-gray-900" onClick={handlevisibility} />) :
                  <FaEyeSlash className="absolute lg:right-6 top-3  md:right-7 md:mb-7 lg:mb-16   text-gray-900" onClick={handlevisibility} />}
                </div><br/>

                {isloading ? (<button className="bg-blue-500 rounded-lg md:mb-14 md:px-8 lg:mb-16 lg:mt-4 text-white px-6 mb-10 lg:px-12 py-1" type="submit" disabled>Sign In</button>) :
                  <button className="bg-blue-500 rounded-lg md:mb-14 md:px-8 lg:mb-16 lg:mt-4 text-white px-6 mb-10 lg:px-12 py-1" type="submit">Sign In</button>}
                <p className="lg:text-lg">Don't Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"  ><NavLink to='/Signup'>Sign Up </NavLink></span></p>
              </form>

              {isloading ? (



                <div className="  z-10   " ><FaSpinner className="md:h-20 absolute h-20 w-20  md:w-20 sm:left-40 left-36 lg:left-56 bottom-44 rotate-180 animate-spin " /></div>


              ) : null}

            </div>


            <div className="text-center w-80 invisible  md:visible ">
              <h3 className="md:text-3xl font-bold text-2xl lg:text-4xl text-blue-600 mb-8  ">Weblify</h3>
              <p className="text-gray-800   text-lg">Effortlessly create short links for social <br /> media, marketing and more.</p>
            </div>

          </div>

        </div>

      ) : null}





    </div>
  )
}

export default Login;

