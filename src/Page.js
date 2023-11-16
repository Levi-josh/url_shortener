import React, { useEffect, useState } from "react";
import { FaBars, FaChartBar, FaChevronCircleDown, FaChevronCircleUp, FaCopy, FaCopyright, FaDigitalTachograph, FaLink, FaPaintBrush, FaSortAlphaDown, FaSortDown, } from "react-icons/fa"
import { useLocation, useNavigate, useSearchParams, useOutletContext } from 'react-router-dom';

function Page() {
  const [showinfo1, setshowinfo1] = useState(true)
  const [text, setText] = useState('')
  const [links, setLinks] = useState([])
  const [message, setMessage] = useState('')
  const [buttonText, setButtonText] = useState(true)
  const [Error, setError] = useState({})
  const [isloading, setloading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setsearch] = useSearchParams()
  const [access, setaccess] = useState("")




  const { showForm, setShowForm } = useOutletContext()


  function displayinfo1() {
    setshowinfo1(prev => !prev)
  }
  const [showinfo2, setshowinfo2] = React.useState(true)

  function displayinfo2() {
    setshowinfo2(prev => !prev)
  }
  const [showinfo3, setshowinfo3] = React.useState(true)

  function displayinfo3() {
    setshowinfo3(prev => !prev)
  }
  const [showinfo4, setshowinfo4] = React.useState(true)

  function displayinfo4() {
    setshowinfo4(prev => !prev)
  }
  const [showinfo5, setshowinfo5] = React.useState(true)

  function displayinfo5() {
    setshowinfo5(prev => !prev)
  }
  const [showinfo6, setshowinfo6] = React.useState(true)

  function displayinfo6() {
    setshowinfo6(prev => !prev)
  }


  const handleInput = (e) => {
    const data = e.target.value
    setText(data)
    setError("")

  }
  useEffect(() => {
    setaccess(search.get("access"))
    console.log(access)

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    setError("")
    setLinks("")
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ originalUrl: text })
    }
    try {

      const response = await fetch('https://weblify.onrender.com/v1/urls/public', option);
      const data = await response.json()
      setLinks(data.data)
      setText('')
    }

    catch (err) {
      setError(err)

    }
    setloading(false)
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.shortenedUrl)
    setButtonText(prev => !prev)
  }

  const handleLogin = () => {
    navigate('Login')
  }


  const handleSignUp = () => {
    navigate('Signup')
  }



  window.addEventListener('popstate', function (event) {
    if (document.location.pathname === '/Login') {
      setShowForm(false)
      window.location.replace('/')
    }
  })


  return (






    <div className='w-full'>
      <header className='bg-blue-600 flex justify-between items-center h-14 text text-white sm:h-14 md:h-14 xl:h-16 lg:h-16 fixed w-full '>
        <div className='  border-white border-r-r h-full flex items-center w-20 sm:w-24 md: w-30 lg:w-40'>

          <h2 className='pl-3   border-white  sm:pl-5  md:pl-7 text-lg  lg:font-bold lg:text-xl lg:pl-16'>Weblify</h2>
        </div>
        <ul className={`${access ? 'hidden md:flex m-auto md:gap-28 md:text-base lg:text-lg lg:gap-36' : 'hidden'}`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>F&Q</li>
        </ul>
        {access ? <FaBars className="mr-5 sm:mr-8 text-lg md:hidden" /> :
          <div className='flex gap-4'>
            <button className='font-bold rounded-full text-xs flex items-center justify-center  px-4 py-2 border-2 md:px-6 md:rounded-full md:text-sm  lg:px-7 lg:py-2 xl:text-sm 2xl:px-5 2xl:py-2 xl:px-6 xl:py-2 lg:text-sm lg:rounded-full' onClick={handleLogin}>Log in</button>
            <button className='font-bold rounded-full mr-3 text-black bg-white text-xs flex items-center justify-center md:px-4 lg:px-4 lg:py-2 md:py-2 px-3 py-2  border-2   md:rounded-full md:text-sm  xl:px-4  lg:text-sm lg:rounded-full' onClick={handleSignUp}>Sign Up</button>
          </div>}
      </header>
      <section>





        <div className=' bg-newblue h-100 pt-28 text-center pb-10 sm:pt-32 lg:pt-40 xl:pt-44 md:pt-36 '>
          <div className='md:flex md:gap-2 justify-center lg:gap-3'>  <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Effortless URL Shortening For </h1><span className='text-xl sm:text-2xl font-bold text-blue-600 lg:text-4xl xl:text-5xl md:text-3xl '>Everyone.</span> </div>

          <p className='pt-2  text-base text-black  sm:pt-4 md:pt-5 lg:pt-6 xl:pt-6 md:text-lg xl:text-2xl lg:text-xl'>Effortlessly create short links for social media,<span className='flex flex-col'>marketing and more.</span></p>

          <form onSubmit={handleSubmit} className='justify-center   flex   items-center flex-col md:flex-row xl:flex-row  md:gap-5 lg: lg:gap-5 xl:gap-5 md mt-4 gap-5  md:mt-8 lg:mt-10'>
            <input type='text' placeholder='Enter your long link here' className=' rounded-full outline-none m-auto md:m-0  px-4    h-9 w-80 text-lg placeholder:text-black  placeholder:text-center md:placeholder:text-start
             sm:w-96 md:h-8 lg:w-200 lg:h-9 xl:w-250  xl:h-10 md:w-150' required name='text' onChange={handleInput} value={text} />
            <button className='bg-blue-600 w-80 font-semibold m-auto md:m-0  h-9 rounded-full text-lg text-white  md:text-sm  lg:h-9 lg:w-40 xl:w-48 xl:h-10  lg:text-base xl:text-lg md:w-28 md:h-8 sm:w-96' type='submit'>shorten url</button>
          </form>


          <div className='flex   justify-center items-center absolute  w-full ' >
            <ul className='list-none  flex flex-col md:flex-row items-center'>
              {links && links.shortenedUrl ? (
                <div className=' mt-3 text-black  font-bold w-80 sm:w-96 md:w-full sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 flex justify-center items-center gap-3'  ><p className='overflow-hidden' >{links.shortenedUrl}</p><FaCopy onClick={handleCopy} className={`  ${buttonText ? ' text-gray-500' : 'text-black'} text-lg lg:text-xl md:cursor-pointer `} /></div>
              ) :
                Error.message ? <li className=' mt-3 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 text-red-600 font-bold sm:text-base md:text-lg '>{`Error: ${Error.message}`}</li> : null}
              {isloading ? <li className='mt-3 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 sm:text-base md:text-lg '>Loading <span className='  text-base font-bold  '> . . .</span></li> : null}
            </ul>
          </div>
          <p className=' mt-10 text-sm md:text-base mb-4 sm:mt-14 sm:mb-5 md:mt-12 md:mb-6 lg:mb-8 lg:mt-12 lg:text-lg xl:mb-14 xl:text-xl'>By using this our url shortener you agree to <span className='flex flex-col md:inline-block'>  our terms and condition</span></p>



        </div>

        <p className='text-center mt-5 text-lg mb-5 sm:mb-10 sm:mt-7 lg:text-3xl lg:mt-8 lg:mb-8 '>Why <span className='font-bold'>weblify</span>?</p>
        <div className='flex flex-col justify-center items-center gap-6 md:px-5 md:flex-row xl:gap-24 '>
          <div className='w-64 bg-newblue  h-72 rounded-xl text-center pt-10 px-5 lg:w-72 lg:h-96 sm:w-72 sm:h-80'>
            <div className='bg-iconblue w-10 h-10 rounded-full flex justify-center items-center m-auto sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:h-14 md:w-14'><FaLink className='text-lg text-white lg:text-xl' /></div>
            <h1 className='font-bold mt-3 lg:text-lg xl:text-xl'>URL Shortener</h1>
            <p className='text-sm mt-4 sm:text-base lg:text-lg xl:text-xl'>Weblify is A <span className='text-blue-600 font-semibold'> Url Shortener</span>.It offers a simple and fast way to shorten and share your urls.</p>
          </div>
          <div className='w-64 bg-newblue h-72 rounded-xl text-center pt-10 px-5 lg:w-72 lg:h-96 sm:w-72 sm:h-80'>
            <div className='bg-iconblue w-10 h-10 rounded-full flex justify-center items-center m-auto sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:h-14 md:w-14'> <FaPaintBrush className='text-lg text-white lg:text-xl' /></div>
            <h1 className='font-bold mt-3 lg:text-lg xl:text-xl'>Customizable link</h1>
            <p className='text-sm mt-4 sm:text-base lg:text-lg xl:text-xl'>Weblify offers A "<span className='text-blue-600 font-semibold'>Custom Link</span> solution" for users to craft and customize their short links.</p>
          </div>
          <div className=' bg-newblue w-64 h-72 rounded-xl text-center pt-10 px-5  lg:w-72 lg:h-96 sm:w-72 sm:h-80 '>
            <div className='bg-iconblue w-10 h-10 rounded-full flex justify-center items-center m-auto sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:h-14 md:w-14'><FaChartBar className='text-xl text-white lg:text-2xl'>

            </FaChartBar></div>
            <h1 className='font-bold mt-3 lg:text-lg xl:text-xl'>Track your clicks</h1>
            <p className='text-sm mt-4  md:mt-1 sm:text-base lg:text-lg xl:text-xl'>Weblify is an advanced link analytics platform that <span className='text-blue-600 font-semibold'>tracks clicks</span> on short links and provides extensive statistics to help you measure the effectiveness of your short links.</p>
          </div>

        </div>
        <div className=' bg-newblue mt-12 pt-10 pb-10'>
          <div className='text-center  '>
            <h1 className='text-lg font-bold xl:text-xl'>FAQ's</h1>
            <p className='text-base font-semibold xl:text-lg xl:mt-2'>Frequently asked questions</p>
          </div>
          <div className='mx-5 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 '>
            <div className='mt-10'>
              <div className='flex justify-between  pb-2'>  <p className='text-base font-medium sm:text-base md:text-lg'>What is a URL shortener?</p>{showinfo1 ? <FaChevronCircleDown onClick={displayinfo1} className='text-sm sm:text-base lg:text-xl text-iconblue hover:cursor-pointer ' /> : <FaChevronCircleUp onClick={displayinfo1} className='text-iconblue text-sm sm:text-base lg:text-xl hover:cursor-pointer' />}</div>
              <div className='border-b-r border-iconblue overflow-hidden transition-transform  '><p className={`xl:text-lg mb-2 ${showinfo1 ? '-translate-y-20 hidden  ' : '-translate-y- 20 '}`}>A url shortener,like weblify,is a web application that transforms long URLs into shorter,unique, and Customizable links for easy sharing and tracking.</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2 mt-2'> <p className='text-base font-medium sm:text-base md:text-lg'>How do i use the URL shortener?</p>{showinfo2 ? <FaChevronCircleDown onClick={displayinfo2} className='text-sm sm:text-base lg:text-xl text-iconblue hover:cursor-pointer' /> : <FaChevronCircleUp onClick={displayinfo2} className='text-iconblue text-sm sm:text-base lg:text-xl hover:cursor-pointer' />}</div>
              <div className='border-b-r border-iconblue'><p className={`xl:text-lg mb-2 ${showinfo2 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >To use weblify,you can simply enter any valid URL in a provided form field.The application will generate a shortened version of the link that you can easily copy and paste.</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2  mt-2'> <p className='text-base font-medium sm:text-base md:text-lg'>Can i customize my short links?</p>{showinfo3 ? <FaChevronCircleDown onClick={displayinfo3} className='text-sm sm:text-base lg:text-xl text-iconblue hover:cursor-pointer' /> : <FaChevronCircleUp onClick={displayinfo3} className='text-iconblue text-sm sm:text-base lg:text-xl hover:cursor-pointer' />}</div>
              <div className='border-b-r border-iconblue'><p className={`xl:text-lg mb-2 ${showinfo3 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`}>yes,with weblify,you can customize your shortened URLs to make them more memorable or relevant</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2  mt-2'> <p className='text-base font-medium sm:text-base md:text-lg'>Are there analytics available for my short links?</p>{showinfo4 ? <FaChevronCircleDown onClick={displayinfo4} className='sm:text-base lg:text-xl text-iconblue hover:cursor-pointer' /> : <FaChevronCircleUp onClick={displayinfo4} className='text-iconblue sm:text-base lg:text-xl hover:cursor-pointer' />}</div>
              <div className='border-b-r border-iconblue'><p className={`xl:text-lg mb-2 ${showinfo4 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`}>Weblify provides analytics,allowing you to track the number of clicks and other insights for each shortened URL through your dashboard.</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2  mt-2 gap-4'> <p className='text-base font-medium sm:text-base md:text-lg'>Is there a limit to the number of links i can shorten?</p>{showinfo5 ? <FaChevronCircleDown onClick={displayinfo5} className='text-lg sm:text-base lg:text-xl text-iconblue hover:cursor-pointer' /> : <FaChevronCircleUp onClick={displayinfo5} className='text-iconblue text-lg sm:text-base lg:text-xl hover:cursor-pointer' />}</div>
              <div className='border-b-r border-iconblue'><p className={`xl:text-lg mb-2 ${showinfo5 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >No,ther is no limit to the number of URLs you can shorten using weblify.</p></div>
            </div>
            <div>
              <div className='flex justify-between pb-2  mt-2 gap-4'> <p className='text-base font-medium sm:text-base md:text-lg'>How long are my shorts links generated by your platform?</p>{showinfo6 ? <FaChevronCircleDown onClick={displayinfo6} className='text-xl sm:text-base lg:text-xl text-iconblue hover:cursor-pointer' /> : <FaChevronCircleUp onClick={displayinfo6} className='text-iconblue text-xl sm:text-base lg:text-xl hover:cursor-pointer' />}</div>
              <div className='border-b-r border-iconblue'><p className={`xl:text-lg mb-2 ${showinfo6 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >The shortened URLs will follow the format:https://weblify.onrender.com/v1/urls/sh/id where id is a randomly generated alphanumeric string of 6 characters.Additionally,for Customizable URLs,the format will be https://weblify.onrender.com/v1/urls/sh/text,where text is a user defined alphanumeric string</p></div>
            </div>
          </div>
        </div>
        <div className='bg-blue-600 mt-10 w-80 m-auto mb-10 h-80 text-center pt-10 px-3 rounded-lg sm:w-100 sm:h-72 md:w-200 md:h-60 md:pt-10 md:px-5 md:mt-14 lg:w-300 xl:w-400 xl:px-20'>
          <h1 className='font-bold text-white text-lg lg:text-xl'>Weblify URL shortener</h1>
          <p className='text-white text-sm mt-8 md:mt-5 md:text-lg'>Weblify serves as a user-friendly URL shortener that simplifies the process of managing and shortening links,including branded ones.Enhance your brand's growth and business potential by utilizing short,memorable,and engaging links with weblify's versatile platform. </p>
        </div>



      </section>
      <footer className='bg-blue-600 text-white pt-8 pb-3 lg:pt-12 lg:pb-9'>
        <div className='flex justify-center items-center gap-4 sm:gap-6 md:gap-14 lg:gap-16 xl:gap-20 xl:text-lg' >
          <p>Shorten Links</p>
          <p>Track Links</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        <div className='flex justify-center items-center mt-5 xl:mt-8 xl:text-lg'> <FaCopyright /><p> copyright 2023.Weblify</p> </div>
      </footer>
    </div >




  )
}

export default Page;
