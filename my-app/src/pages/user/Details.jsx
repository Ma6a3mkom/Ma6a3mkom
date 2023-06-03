import { Link } from 'react-router-dom'
import React, { useState,useContext, useEffect } from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import axios from 'axios';
import { UserContext } from '../../UserContext';

function Details1(currentTable) {

  let cards = [

    { Name: "  Qaysar Pizza ", path: "https://d2nuhorlnps36p.cloudfront.net/hotels/93783/93783_039_Restaurant.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  Pizza Nina ", path: "https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  The Judge", path: "https://eventective-media.azureedge.net/2524260_lg.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },


  ]

  const [email, setEmail] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

      

  const handleSubmit =  (e) => {
    e.preventDefault();

axios.post('http://localhost:5000/orders', {
  email: email,
  tableNumber: tableNumber,
  time: time,
  date: date,
})
.then(function (response) {

})
.catch(function (error) {
});

  }


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
                  <Link to="Login"> </Link>
                     Details 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  







      <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
           {currentTable.currentTable.Name}
          </div>
          <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
            {currentTable.currentTable.price} - Amman 
          </div>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            <span className="text-5xl sm:text-7xl"> Service
            </span>
          </h1>
          <br />
          <br />
          <p className="text-sm text-gray-700 sm:text-base dark:text-white">
           {currentTable.currentTable.description}
          </p>
          <div className="flex mt-8">
            <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
              <Link to="Login">Send Message </Link>
            </button>
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/4 ">
          <img
            src="https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg"
            className="max-w-xl m-auto md:max-width: 36rem; /* 576px */ "
          />
        </div>
      </div>




      <center><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Restaurant's menu to book </h5></center>
      <div className='flex flex-wrap gap-10 justify-center my-16'>
        {
          cards.map((e) => {
            return (
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={e.path} alt="" />
                </a>
                <center>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {e.Name}<br /> {e.price} - Amman
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {e.describtion}
                    </p>
                    <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                      <Link to="Login">Details</Link>
                    </button>
                  </div>
                </center>
              </div>
            )
          })
        }
      </div>












      <>
        <>
          <div className="flex justify-center items-center w-screen h-screen bg-white">
            <div className="container mx-auto my-4 px-4 lg:px-20">
             
            <form onSubmit={handleSubmit}>
              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                  <div>
                    <Typography
                      variant="h1"
                      color="orange"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Restaurant Details
                    </Typography>
                    <Typography
                      variant="h1"
                      color="black"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Send us a message
                    </Typography>
                  </div>
                </div>



                
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="email*"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value);}}
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="tableNumber*"
                    value={tableNumber}
                    onChange={(e) => {setTableNumber(e.target.value);}}
                  />
                  <input htmlFor="time_start"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="time"
                    placeholder=""
                    name="time_start"
                    value={time}
                    onChange={(e) => {setTime(e.target.value);}}
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    placeholder="First Name*"
                    value={date}
                    onChange={(e) => {setDate(e.target.value);}}
                  />
                </div>
                <br />
                <button type="submit" className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                  {/* <Link to="Login"> </Link> */}
                         Send Message
                         
                </button>
              </div>
              </form>
              <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-orange-900 rounded-2xl">
                <div className="flex flex-col text-black">
                  <h1 className="font-bold uppercase text-4xl my-4">
                    Booking Details
                  </h1>
                  <p className="text-gray-400">
                    Restaurant reservation services provide many advantages and benefits such as ease and convenience without having to
                    go to the restaurant in person or wait in line. You can book a table from anywhere and at any time convenient for you
                    via phone or online.
                  </p>
                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                    </div>
                    <i className="fas fa-map-marker-alt pt-2 pr-2">
                      <div className="flex flex-col">
                        <h2 className="text-2xl">MA6A3MKOM</h2>
                        <p className="text-gray-400">
                          Jordan-Amman Reservation Service
                        </p>
                      </div>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div>
            <Typography
              variant="h1"
              color="black"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              <center><h1> Contact us for reservation
              </h1></center>
            </Typography>
          </div>
          <div className="flex justify-center items-center w-screen h-screen bg-white">
            {/* COMPONENT CODE */}
            <div className="container mx-auto my-4 px-4 lg:px-20">
              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                  <div>
                    <Typography
                      variant="h1"
                      color="orange"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Call us to book a service
                    </Typography>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="name restaurant*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="type of food*"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Message*"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    defaultValue={""}
                  />
                </div>
                <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                  <Link to="Login">     Send Message </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      </>
    </>)
}

export default Details1
