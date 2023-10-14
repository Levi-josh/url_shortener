import React from 'react';
import { FaBars, FaChartBar, FaChevronCircleDown, FaChevronCircleUp, FaCopyright, FaLink, FaPaintBrush, FaSortAlphaDown, FaSortDown } from "react-icons/fa"


export default function Page() {
  const [showinfo1, setshowinfo1] = React.useState(true)

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
  return (
    <div className='w-full'>
      <header className='bg-blue-600 flex justify-between items-center h-14 text text-white sm:h-14 md:h-14 xl:h-16 fixed w-full '>
        <div className='  border-white border-r-r h-full flex items-center w-20 sm:w-24 md: w-30 lg:w-40'>

          <h2 className='pl-3   border-white  sm:pl-5  md:pl-7 text-lg  lg:font-bold  lg:pl-16'>Weblify</h2>
        </div>
        <ul className='hidden  '>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>F&Q</li>
        </ul>
        <div className='flex gap-4'>
          <button className='font-bold rounded-full text-xs flex items-center justify-center h-7 w-14 border-2 md:w-14 md:rounded-full md:text-sm lg:w-20 lg:h-7 lg:text-sm lg:rounded-full'>log in</button>
          <button className='font-bold rounded-full mr-3 text-black bg-white text-xs flex items-center justify-center h-7 w-14 border-2 md:w-14 md:rounded-full md:text-sm lg:w-20 lg:h-7 lg:text-sm lg:rounded-full'>Sign up</button>
        </div>
      </header>
      <section>

        <div className=' bg-newblue h-100 pt-24 text-center pb-10 sm:pt-32 lg:pt-40 xl:pt-44 md:pt-36 px-3'>
          <div className=' lg:flex justify-center lg:gap-3'>  <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Effortless URL Shortening For </h1><span className='text-xl sm:text-2xl font-bold text-blue-600 lg:text-4xl xl:text-5xl md:text-3xl '>Everyone.</span> </div>
          <p className='pt-1  text-base text-black font-semibold sm:pt-4 md:pt-1 lg:pt-6 xl:pt-6 md:text-lg xl:text-2xl lg:text-xl'>Effortlessly create short links for social media,marketing and more.</p>
          <div className='flex  justify-center items-center flex-col md:flex-row md:gap-5 lg:px-72 lg:gap-10 md:px-44 xl:gap-10 '>
            <input type='text' placeholder='Enter your long link here' className=' rounded-full outline-none m-auto pl-4 mt-3 sm:mt-4 md:mt-4 h-9 w-80 text-lg placeholder:text-black  placeholder:text-center md:placeholder:text-start
             sm:w-96 md:h-8 lg:w-400 lg:h-9 xl:w-full xl:mt-6 xl:h-10' />
            <button className='bg-blue-600 w-80 font-semibold m-auto mt-4 h-9 rounded-full text-lg text-white sm:mt-5 md:text-sm md:mt-4  lg:mt-4 lg:h-8 lg:w-48 xl:h-10 xl:mt-6 xl:text-lg md:w-28 md:h-8 sm:w-96'>shorten url</button>
          </div>
          <p className='mt-3 text-sm md:text-base sm:mt-4 sm:mb-5 md:mt-6 md:mb-6 lg:mb-8 lg:text-lg xl:mb-20 xl:text-xl'>By using this our url shortener you agree to our terms and condition</p>
        </div>

        <p className='text-center mt-5 text-lg mb-5 sm:mb-10 sm:mt-7 lg:text-3xl lg:mt-8 lg:mb-8 '>Why <span className='font-bold'>weblify</span>?</p>
        <div className='flex flex-col justify-center items-center gap-6 md:px-5 md:flex-row xl:gap-24 '>
          <div className='w-64 bg-newblue  h-72 rounded-xl text-center pt-10 px-5 lg:w-72 lg:h-96 sm:w-72 sm:h-80'>
            <div className='bg-black w-10 h-10 rounded-full flex justify-center items-center m-auto sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:h-14 md:w-14'><FaLink className='text-lg text-white lg:text-xl' /></div>
            <h1 className='font-bold mt-3 lg:text-lg xl:text-xl'>URL Shortener</h1>
            <p className='text-sm mt-4 sm:text-base lg:text-lg xl:text-xl'>Weblify is A <span className='text-blue-600 font-semibold'> Url Shortener</span>.It offers a simple and fast way to shorten and share your urls.</p>
          </div>
          <div className='w-64 bg-newblue h-72 rounded-xl text-center pt-10 px-5 lg:w-72 lg:h-96 sm:w-72 sm:h-80'>
            <div className='bg-black w-10 h-10 rounded-full flex justify-center items-center m-auto sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:h-14 md:w-14'> <FaPaintBrush className='text-lg text-white lg:text-xl' /></div>
            <h1 className='font-bold mt-3 lg:text-lg xl:text-xl'>Customizable link</h1>
            <p className='text-sm mt-4 sm:text-base lg:text-lg xl:text-xl'>Weblify offers A "<span className='text-blue-600 font-semibold'>Custom Link</span> solution" for users to craft and customize their short links.</p>
          </div>
          <div className=' bg-newblue w-64 h-72 rounded-xl text-center pt-10 px-5  lg:w-72 lg:h-96 sm:w-72 sm:h-80 '>
            <div className='bg-black w-10 h-10 rounded-full flex justify-center items-center m-auto sm:w-12 sm:h-12 lg:w-16 lg:h-16 md:h-14 md:w-14'><FaChartBar className='text-xl text-white lg:text-2xl'>

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
              <div className='flex justify-between  pb-2'>  <p className='text-base font-medium sm:text-base md:text-lg'>What is a URL shortener?</p>{showinfo1 ? <FaChevronCircleDown onClick={displayinfo1} className='text-sm sm:text-base lg:text-xl' /> : <FaChevronCircleUp onClick={displayinfo1} className='text-sm sm:text-base lg:text-xl' />}</div>
              <div className='border-b-2 border-black overflow-hidden '><p className={`xl:text-lg mb-2 ${showinfo1 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`}>A url shortener is used in making the url of a website short and simple.</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2 mt-2'> <p className='text-base font-medium sm:text-base md:text-lg'>How do i use the URL shortener?</p>{showinfo2 ? <FaChevronCircleDown onClick={displayinfo2} className='text-sm sm:text-base lg:text-xl' /> : <FaChevronCircleUp onClick={displayinfo2} className='text-sm sm:text-base lg:text-xl' />}</div>
              <div className='border-b-2 border-black'><p className={`xl:text-lg mb-2 ${showinfo2 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >its simple all you have to do is paste in your long link and press the shorten button.</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2  mt-2'> <p className='text-base font-medium sm:text-base md:text-lg'>Can i customize my short links?</p>{showinfo3 ? <FaChevronCircleDown onClick={displayinfo3} className='text-sm sm:text-base lg:text-xl' /> : <FaChevronCircleUp onClick={displayinfo3} className='text-sm sm:text-base lg:text-xl' />}</div>
              <div className='border-b-2 border-black'><p className={`xl:text-lg mb-2 ${showinfo3 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`}>yes,you can customize your shortened links,all you have to do is to ..............</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2  mt-2'> <p className='text-base font-medium sm:text-base md:text-lg'>Are there analytics available for my short links?</p>{showinfo4 ? <FaChevronCircleDown onClick={displayinfo4} className='sm:text-base lg:text-xl' /> : <FaChevronCircleUp onClick={displayinfo4} className=' sm:text-base lg:text-xl' />}</div>
              <div className='border-b-2 border-black'><p className={`xl:text-lg mb-2 ${showinfo4 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >yes there are analytics available for your short links,i dont even know what is analytics.......</p></div>
            </div>
            <div>
              <div className='flex justify-between  pb-2  mt-2 gap-4'> <p className='text-base font-medium sm:text-base md:text-lg'>Is there a limit to the number of links i can shorten?</p>{showinfo5 ? <FaChevronCircleDown onClick={displayinfo5} className='text-lg sm:text-base lg:text-xl' /> : <FaChevronCircleUp onClick={displayinfo5} className='text-lg sm:text-base lg:text-xl' />}</div>
              <div className='border-b-2 border-black'><p className={`xl:text-lg mb-2 ${showinfo5 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >no, you can shorten your links as many as you want my dear ........................</p></div>
            </div>
            <div>
              <div className='flex justify-between pb-2  mt-2 gap-4'> <p className='text-base font-medium sm:text-base md:text-lg'>How long are my shorts links generated by your platform?</p>{showinfo6 ? <FaChevronCircleDown onClick={displayinfo6} className='text-xl sm:text-base lg:text-xl' /> : <FaChevronCircleUp onClick={displayinfo6} className='text-xl sm:text-base lg:text-xl' />}</div>
              <div className='border-b-2 border-black'><p className={`xl:text-lg mb-2 ${showinfo6 ? '-translate-y-20 hidden ' : '-translate-y- 20'}`} >just few manys with a strong connection your shortened links are ready</p></div>
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
    </div>
  )
}
