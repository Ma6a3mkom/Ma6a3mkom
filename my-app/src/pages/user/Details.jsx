import { Link } from 'react-router-dom'
import React from 'react'

function Details() {
  return (
    <>
      <div className="relative">
        <img
          src="https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Restaurant table reservation services   <br className="hidden md:block" />
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Diversity between different restaurants and differ in the advantages and services they offer.
                </p>
                <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                  <Link to="Login">    Details </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
      {/* <br/>
<br/>
<br/>
<br/> */}

      <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">

        <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
              <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
                Qaysar Pizza
              </div>
              <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
                12.1044$ - Amman
              </div>
              <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                <span className="text-5xl sm:text-7xl">        Service
                </span>
              </h1>
              <br/>
              <div className="5 flex items-center gap-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <br/>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                Restaurant reservation services that provide the user with ease and convenience without having to go to the restaurant in person or wait in line. You can book a table from anywhere and at any time convenient for you via phone or online.
              </p>
              <div className="flex mt-8">
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/4 ">
              <img
                src="https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg"
                className="max-w-xl m-auto md:max-width: 36rem; /* 576px */ "
              />
            </div>
          </div>
        </div>
        <center>
          <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
            <Link to=" "> Service</Link>
          </button>
          <button className="px-8 py-3 text-black-500 uppercase bg-transparent border-2 border-black -500 rounded-lg dark:text-white hover:bg-red-500 hover:text-black text-md 
              height-50px">
            <Link to=" ">Book the service</Link>
          </button>
        </center>
      </main >
    </>)
}

export default Details