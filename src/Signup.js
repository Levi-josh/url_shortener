import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

function Signup() {

  const [visibility, setVisibility] = useState(true)
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [error, setError] = useState({})
  const [users, setUsers] = useState([])
  const { showForm } = useOutletContext()
  const navigate = useNavigate()
  const [isloading, setLoading] = useState(false)

  const handlevisibility = () => {
    setVisibility(prevstate => !prevstate)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormValues('')
    setError('')
    setLoading(true)
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: formValues.email, password: formValues.password })
    }
    try {

      const response = await fetch('https://weblify.onrender.com/v1/auth/register', option);
      const data = await response.json()
      setUsers(data.data)

      if (data?.data.id) { return navigate('/?access=${data.data.accessToken}') }
    }

    catch (err) {
      setError(err)

    }
    setLoading(false)

  };


  const handleFormChanges = (e) => {
    const { name, value } = e.target
    setFormValues((prevdata) => ({
      ...prevdata,
      [name]: value
    }))

  }
  return (

    <div>
      {showForm ? (

        <div className="md:hidden block">

          <div className="grid place-items-center h-full">
            <div className="text-center   md:hidden ">
              <h3 className=" font-bold text-3xl  text-blue-600 mb-4 mt-8  ">Weblify</h3>
              <p className="text-gray-800   text-lg">Effortlessly create short  links for social<br /> media, marketing and more.</p>
            </div>





            <div className=" bg-newblue text-center relative  rounded-lg shadow-lg mt-12 px-2 sm:px-4 md:hidden" >
              <h3 className="font-bold text-xl lg:text-2xl mt-8 sm:mt-10"> Create Account</h3>
              <form onSubmit={handleSubmit}>
                {error.message ? <h4 className="text-red-600 text-sm">{error.message}</h4> : null}
                <input type="email" placeholder="Email Address" className=" outline-none border-gray-300 border-2 rounded-lg sm:mt-10 pl-3  sm:w-96 w-80 px-1 py-1 mt-8 " required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
                <input type={visibility ? 'password' : 'text'} placeholder="Password" className="border-gray-300 right-6 border-2 sm:w-96 w-80 pl-3 outline-none px-1 py-1 mt-8 mb-10 rounded-lg" required name="password" maxLength={25} value={formValues.password} onChange={handleFormChanges} /> <br />
                {visibility ? (<FaEye className="absolute sm:bottom-56 bottom-56  sm:mb-8 sm:left-80 right-6 mb-3 sm:ml-12 text-gray-900" onClick={handlevisibility} />) :
                  <FaEyeSlash className="absolute sm:bottom-56 bottom-56 mb-3 right-6 sm:mb-8 sm:left-80 sm:ml-12 text-gray-900" onClick={handlevisibility} />}
                <p className="text-gray-800 text-sm   mb-8">By Clicking on "Create Account", I Agree To <br /> Weblify's <span className="text-blue-500">Terms & Condition</span> And <span className="text-blue-500">Privacy Policy</span></p>
                <button className="bg-blue-500 rounded-lg  text-white px-4 mb-6 sm:mb-8 lg:px-6 py-1" type="submit">Create Account</button>
                <p className="mb-8 sm:mb-12">Already Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"><NavLink to='/Login'>Login in</NavLink></span></p>
              </form>

              {isloading ? (



                <div className="  z-10   " ><FaSpinner className="md:h-11 absolute h-14 w-14 md:w-11 sm:left-44 left-36 bottom-44 rotate-180 animate-spin " /></div>


              ) : null}

            </div>

          </div>

        </div>

      ) : null}





      {showForm ? (

        <div className="hidden md:block">

          <div className="flex  items-center  justify-center h-screen md:h-auto min-h-screen bg-white">

            <div className=" bg-newblue text-center pt-10 pb-10 md:mr-4  lg:mr-10 lg:px-6 lg:pb-14 md:pt-14 md:pb-14 lg:pt-12 md:px-4 relative  rounded-lg shadow-lg hidden  md:block" >
              <h3 className="font-bold text-xl lg:text-2xl "> Create Account</h3>
              <form onSubmit={handleSubmit}>
                {error.message ? <h4 className="text-red-600 text-sm">{error.message}</h4> : null}
                <input type="email" placeholder="Email Address" className=" md:mt-12 sm:mt-12 md:mb-10  lg:mb-10 pl-3 w-80  lg:w-100  md:w-96 pt-1 rounded-lg pb-1 border-2 border-gray-300 mb-10 outline-none text-lg " required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
                <input type={visibility ? 'password' : 'text'} placeholder="Password" className=" sm:mb-12 md:mb-10   pt-1 rounded-lg w-80 lg:mb-12 lg:w-100  md:w-96 pb-1 pl-3 border-2 border-gray-300 outline-none text-lg" required name="password" maxLength={25} value={formValues.password} onChange={handleFormChanges} /> <br />
                {visibility ? (<FaEye className="absolute lg:right-12 lg:bottom-64  lg:mb-16 md:right-7  md:bottom-64 md:mb-7 text-gray-900" onClick={handlevisibility} />) :
                  <FaEyeSlash className="absolute lg:right-12 md:bottom-64 md:right-7 md:mb-7 lg:mb-16  lg:bottom-64  text-gray-900" onClick={handlevisibility} />}
                <p className="text-gray-800 text-sm lg:text-lg lg:mb-10 mb-10">By Clicking on "Create Account", I Agree To Weblify's <span className="text-blue-500">Terms<br />& Condition</span> And <span className="text-blue-500">Privacy Policy</span></p>
                {isloading ? (<button className="bg-blue-500 rounded-lg lg:mb-12 text-white px-4 mb-10 lg:px-6 py-1" type="submit" disabled>Create Account</button>) :
                  <button className="bg-blue-500 rounded-lg lg:mb-12 text-white px-4 mb-10 lg:px-6 py-1" type="submit">Create Account</button>}
                <p className="lg:text-lg">Already Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"><NavLink to='/Login'>Login in</NavLink></span></p>
              </form>
              {isloading ? (



                <div className="  z-10   " ><FaSpinner className="md:h-20 absolute h-20 w-20 md:w-20 sm:left-40 left-36 lg:left-56 bottom-44 rotate-180 animate-spin " /></div>


              ) : null}
            </div>

            <div className="text-center w-80 hidden  md:block">
              <h3 className="md:text-3xl font-bold text-2xl lg:text-4xl text-blue-600 mb-8  ">Weblify</h3>
              <p className="text-gray-800   text-lg">Effortlessly create short links for social <br /> media, marketing and more.</p>
            </div>

          </div>

        </div>

      ) : null}






    </div>
  )
}

export default Signup;