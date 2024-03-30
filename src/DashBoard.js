import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Scanner from './Images/Qrcode 1.png';
import Scanner1 from './Images/Vector (Stroke).png';
import Arrow from './Images/Polygon 1.png';
import { useOutletContext,useNavigate } from "react-router-dom";
import Delete from './Images/Vector (8).png'
import Logout from './Images/Vector (9).png'

function DashBoard () {
  
const [text,setText] = useState('')
const [customtext,  setCustomText] = useState('')
const [loading,setloading] = useState(false)
const [Logoutloading,setLogoutloading] = useState(false)
const [error,setError] = useState('')
const [Logouterror,setLogoutError] = useState('')
const [links,setLinks] = useState('')
const [appear,setAppear] = useState(false)
const {handleChange,setHandleChange,showForm,setShowForm} = useOutletContext()
const [displayText,setDisplayText] = useState(false)
const [urlText,SetUrlText] = useState('')
const navigate = useNavigate()

const accesstoken = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmY4MzgyYTkwZTAxMDA1NzQzMjhiYSIsImlhdCI6MTcwMzcwNzI4MiwiZXhwIjoxNzAzOTY2NDgyfQ.eDFuhiQGOyBrZq-roxndAnx_mZgLOGcoiJRgDoR252E'

 


const handleLogout = async () => {
  
  setLogoutloading(true)
  setLogoutError("")


  const option = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${accesstoken} `
    },
 
  }

 
  try {

    const response = await fetch('https://weblify.onrender.com/v1/auth/logout', option);
    const data = await response.json()
    
   
   

   if(data.data ) { return navigate('/Page')}
   

 

  }

  catch (err) {
    setError(err)

  }

  

  setLogoutloading(false)
   

};


useEffect(() => {
  async function fetchData() {
      

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesstoken}`
      },
      
    };

    try {
      const response = await fetch('https://weblify.onrender.com/v1/urls', options);
      const data = await response.json();
      console.log(data);

    } catch (err) {
      setError(err);
    }
  }

  fetchData();
}, []);


const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    setDisplayText(true)
    setError("")
    setLinks("")
    
    const option = {
      method: 'POST',

      
      headers: {

          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accesstoken} `

      },
      

      body: JSON.stringify({ originalUrl : text , customText: customtext })
    }

    console.log(option)
    try {

      const response = await fetch('https://weblify.onrender.com/v1/urls', option);
      const data = await response.json()
      setLinks(data.data)
       console.log(data)
      
      setText('')
    }

    catch (err) {
      setError(err )
      console.log(err)

    }
   
    setloading(false)
   
    
  };




const handleInput = (e) => {
   const outPut = e.target.value 
   setText(outPut)
   

   
}

const customInput = (e) => {
   const outPut = e.target.value 
   setCustomText(outPut)
   
   
   
   
}




window.addEventListener('popstate', function (event) {
  if (document.location.pathname === '/Login') {
    setShowForm(false)
    window.location.replace('/')
  }
})

window.addEventListener('popstate', function (event) {
  if (document.location.pathname === '/SignUp') {
    setShowForm(false)
    window.location.replace('/')
  }
})


    return (
        <div>




<div className={`fixed pt-14 top-14  w-52 duration-500 ease-out transition-all  bg-white shadow-2xl pl-2 z-10 lg:hidden shadow-blue-300 h-screen ${!handleChange ? 'duration-500 ease-in-out block' : 'duration-500 ease-in-out hidden'}   lg:hidden  h-screen}`}>
  <div className="flex mb-14">
  <img src={Scanner} className="w-6 h-6 mr-2" />
 <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold active:text-blue-300' >Dashboard</NavLink> 
 <img src={Arrow} className="w-5 h-6 ml-12 mt-1"/>
 </div>

 <div className="flex w-full">
 <img src={Scanner1}  className="w-6 h-6 mr-2" />
 <NavLink to='/DashBoardHome/Analytics'className='text-xl font-bold hover:text-blue-500 ' >Analytics</NavLink>
  
 </div>



<div className="flex bottom-44 ml-4 absolute cursor-pointer" onClick={handleLogout}>
<img src={Logout} className="h-4 w-4 mt-1.5" />
<p className="text-red-500 font-bold ml-1 text-lg">Log Out</p>

</div>
    


</div>







<div className= "fixed pt-20 w-52 top-16 bg-white shadow-2xl pl-2   shadow-blue-300 h-screen lg:block hidden" >
  <div className="flex  mb-14">
  <img src={Scanner} className="w-6 h-6 mr-2" />
 <NavLink to='/DashBoardHome/DashBoard' className='text-xl font-bold text-blue-500' >Dashboard</NavLink> 
 <img src={Arrow} className="w-5 h-6 ml-12 mt-1"/>
 </div>

 <div className="flex w-full">
 <img src={Scanner1}  className="w-6 h-6 mr-2" />
 <NavLink to='/DashBoardHome/Analytics'className='text-xl font-bold  ' >Analytics</NavLink>
 </div>



 <div className="flex cursor-pointer bottom-44 ml-4 absolute">
<img src={Logout} className="h-4 w-4 mt-1.5" />
<p className="text-red-500 font-bold ml-1 text-lg">Log Out</p>

</div>

</div>










{!appear && (
<div>

  <h3 className="text-blue-600 text-2xl mt-10 font-bold ml-6 mb-10 lg:hidden ">Dashboard</h3>

 
  <div className=" text-center   bg-white lg:block   lg:mt-20    ">

<form onSubmit={handleSubmit}>
  

<input type='text' placeholder='Enter your long link here' className=' rounded-lg outline-none  m-auto mb-5 md:text-start  border-2 border-blue-300 md:pt-3  text-center md:pb-3  md:pl-6 pt-2 pb-2  shadow-2xl   w-80 text-lg placeholder:text-black  placeholder:text-center md:placeholder:text-start
sm:w-96   md:w-100   ' required name='text' autoComplete="off" onChange={handleInput} value={text} /> <br/>


<input type='text' placeholder='Enter your customize text' className=' rounded-lg outline-none m-auto md:text-start  border-2 border-blue-300 md:pt-3  text-center md:pb-3  md:pl-6 pt-2 pb-2  shadow-2xl   w-80 text-lg placeholder:text-black  placeholder:text-center md:placeholder:text-start
 sm:w-96   md:w-100  ' required name='text' autoComplete="off" onChange={customInput} value={customtext} /><br/>

 <button className='bg-blue-600 w-80 font-semibold lg:mt-10  md:w-36 m-auto mt-4    rounded-lg text-lg text-white  md:text-lg   lg:w-36  lg:pt-3 lg:pb-3  lg:text-base xl:text-lg md:pt-2 md:mt-5    md:pb-2 pt-1 pb-1 sm:w-96' type='submit'>shorten url</button>
 {loading ? <p className='mt-3 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 sm:text-base md:text-lg '> Loading <span className='text-base font-bold'> . . .</span></p> :  null}      

 { Error.message && !loading ? (
  <p className=' mt-3 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 text-red-600 font-bold sm:text-base md:text-lg '>{`Error: ${Error.message}`}</p>
 ):  null }


</form>
</div>
</div>

 
)}


<div className="md:grid hidden place-items-center lg:pt-10   lg:ml-36   xl:ml-10  pt-10">
  
  <table className="bg-white border-2   w-80 sm:w-96 lg:w-290 xl:w-295 border-blue-300 md:w-270   ">

    <thead   className="bg-white border-2 border-blue-300">
      <tr>
        <th className="py-2 px-1  md:px-4 border-r-2 border-blue-300 ">Shortened Url</th>
        <th className="py-2 px-1  md:px-4 border-r-2 border-blue-300 ">Custom Text</th>
        <th className="py-2 px-1  md:px-4  border-r-2 border-blue-300 ">Click Count</th>
        <th className="py-2 px-1  md:px-4  border-r-2  border-blue-300 ">view Count</th>

        <th className=" py-8 px-4  border-t-0 border-r-0 border-top:hidden "> </th>
     
        
      </tr>
    

    </thead>

    <tbody className="bg-white border-2 border-blue-300">
      <tr className="bg-white border-2 border-blue-300">
        <th className="py-8 px-4 border-r-2 border-blue-300 text-blue-500 ">ShortUrl1</th>
        <td className="py-8 px-4 border-r-2  border-blue-300 overflow-x-wrap">  </td> 
        <td className="py-8 px-4 border-r-2 border-blue-300 "> </td>
        <td className="py-8 px-4 border-r-2 border-blue-300 "></td>
        <td className="py-8 px-2  border-r-2 border-blue-300 "><img src={Delete} className="ml-2"/></td>
        
      </tr>
    </tbody>
  </table>
</div>





<div className="md:hidden pt-10 place-items-center grid  mb-20">
<table className=" w-80 sm:w-96 border-2 border-blue-300">
< thead className="bg-white border-2 border-blue-300">
  <tr>
  <th className="py-2 px-2 border-r-2 border-blue-300">Shortened Url</th>
  <td className="py-2 px-4 border-r-2 border-blue-300">Shortened </td>
  
  </tr>
</thead>


<tbody  >
 
<tr className="bg-white border-2 border-blue-300">
  <th className="py-8 px-2 border-r-2 border-blue-300">Custom Text</th>
  <td className="py-8  px-4 border-r-2 border-blue-300"></td>
 
</tr>

<tr className="bg-white border-2 border-blue-300">
  <th className="py-8 px-2 border-r-2 border-blue-300">Click Count</th>
  <td className="py-8 px-4 border-r-2 border-blue-300"></td>
  
</tr>

<tr  className="bg-white border-2 border-blue-300">
  <th className="py-8 px-2 border-r-2 border-blue-300">View Count</th>
  <td className="py-8 px-4 border-r-2 border-blue-300"></td>

</tr>


<tr  className="bg-white relative  m-auto border-2 border-blue-300">

 
<td className=" py-6 px-4 block "><img src={Delete} className="absolute sm:left-48 left-40  bottom-4"/></td>


</tr>

</tbody>

  
</table>


</div>





        </div>
    )
}

export default DashBoard;