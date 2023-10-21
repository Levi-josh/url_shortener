import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";



function Login() {

  const [users, setUsers] = useState([])
  const [visibility, setVisibility] = useState(true)
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handlevisibility = () => {
    setVisibility(prevstate => !prevstate)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
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
    setFormValues('')

  };


  const handleFormChanges = (e) => {
    const { name, value } = e.target
    setFormValues((prevdata) => ({
      ...prevdata,
      [name]: value
    }))

  }




  return (
    <div className="flex items-center justify-center h-screen md:h-auto min-h-screen bg-white">

      <div className=" bg-newblue text-center pt-10 pb-10 md:mr-4  lg:mr-10 lg:px-8 lg:pb-12 md:py-12 lg:pt-12 md:px-4 relative  rounded-lg shadow-lg " >
        <h3 className="font-bold text-xl lg:text-2xl "> Sign In</h3>
        <form onSubmit={handleSubmit}>
          {error.message ? <h4 className="text-red-600">{`Error : ${error.message}`}</h4> : null}
          <input type="email" placeholder="Email Address" className="  md:mt-16 md:mb-10 w-80 lg:mb-10 lg:mt-20 lg:w-100 md:w-96 pl-3 rounded-lg pt-1  pb-1 border-2 border-gray-300 outline-none lg:text-lg text-lg" required value={formValues.email} name="email" onChange={handleFormChanges} /> <br />
          <input type={visibility ? 'password' : 'text'} placeholder="Password" className="  md:mb-10   pt-1 rounded-lg w-80 lg:mb-10 lg:w-100  md:w-96 pb-1 pl-3 border-2 border-gray-300 outline-none text-lg" required name="password" maxLength={12} value={formValues.password} onChange={handleFormChanges} /> <br />
          {visibility ? (<FaEye className="absolute lg:right-12 lg:bottom-48  lg:mb-12 md:right-7  md:bottom-48 md:mb-5 text-gray-900" onClick={handlevisibility} />) :
            <FaEyeSlash className="absolute lg:right-12 md:bottom-48 md:right-7 md:mb-5 lg:mb-12  lg:bottom-48  text-gray-900" onClick={handlevisibility} />}

          <button className="bg-blue-500 rounded-lg md:mb-14 md:px-8 lg:mb-16 lg:mt-4 text-white px-6 mb-10 lg:px-12 py-1" type="submit">Sign In</button>
          <p className="lg:text-lg">Don't Have An Account?<span className="text-blue-500 lg:text-lg font-semibold ml-1"  ><NavLink to='/Signup'>Sign Up </NavLink></span></p>
        </form>
      </div>

      <div className="text-center w-80">
        <h3 className="md:text-3xl font-bold text-2xl lg:text-4xl text-blue-600 mb-8  ">Weblify</h3>
        <p className="text-gray-800   text-lg">Effortlessly create short links for social <br /> media marketing and more.</p>
      </div>
    </div>
  )
}

export default Login;

