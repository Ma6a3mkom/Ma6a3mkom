import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const RestaurantProfile = () => {
  const [choise, setChoise] = useState("profile");
  const [status, setStatus] = useState("pending");
  const [edit, setEdit] = useState(false);

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 w-64 bg-gray-950 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto"
          style={{ backgroundColor: "black", border: "1px solid white" }}
        >
          <ul className="space-y-2 font-medium">
            <li>
              <span className="flex-1 ml-3 whitespace-nowrap text-amber-700 font-bold uppercase">
                My Profile
              </span>
            </li>
            <li>
              <Link
                to=""
                onClick={() => {
                  setChoise("profile");
                }}
                className="flex items-center p-2 text-white rounded-lg  hover:bg-amber-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={() => {
                  setChoise("reservation");
                }}
                className="flex items-center p-2 text-white rounded-lg hover:bg-amber-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-ui-checks"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Reservations
                </span>
              </Link>
            </li>
            <li>
              <Link
                smooth="true"
                to="/"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-amber-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-white transition duration-75 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed bg-white rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="text-2xl text-gray-400 dark:text-gray-500">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-black sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-black border-2 border-amber-300 rounded-lg bg-white focus:ring-amber-500 focus:border-amber-500 "
                    placeholder="Search...."
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          {choise === "profile" && (
            <>
              <h1 class="text-2xl md:text-3xl pl-2 my-10 border-l-4 text-black mt-10  font-sans font-bold border-amber-400 ">
                RESTAURANT PROFILE
              </h1>
              {/* <div className="bg-white overflow-hidden mx-5 shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                  <img src="https://cache.marriott.com/content/dam/marriott-renditions/XMNSI/xmnsi-prince-restaurant-6803-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" alt='img'/>                <h3 className="text-lg leading-6 font-bold  text-gray-900">
                    Restaurant Name
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    <img src="" />
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Restaurant name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        John Doe
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Restaurant ID
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        123
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Phone number
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        (+962) 0787890123
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        123 Main St
                        <br />
                        Anytown, USA 12345
                      </dd>
                    </div>
                  </dl>
                </div>
              </div> */}

<div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
  {/*Main Col*/}
  <div
    id="profile"
    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
  >
    <div className="p-4 md:p-12 text-center lg:text-left">
      {/* Image for mobile view*/}
      <div
        className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"/>
      <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Restaurant</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
      <p className="pt-4 text-base  flex items-center justify-center lg:justify-start">
        <svg
          className="h-4 fill-current text-amber-700 pr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
        </svg>{" "}
        Food Type - Italian
      </p>
      <p className="pt-2 text-base text-xs lg:text-sm flex items-center justify-center lg:justify-start">
        <svg
          className="h-4 fill-current text-amber-700 pr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
        </svg>{" "}
        Your Location - Zarqa, Jordan
      </p>
      <p className="pt-2 text-base text-xs lg:text-sm flex items-center justify-center lg:justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone text-amber-700 mr-3" viewBox="0 0 20 20">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>{" "}
         Contact Phone - (+962) 0792014530
      </p>
      <div className="pt-12 pb-8">
        <button onClick={() => setEdit(true)} className="bg-amber-700 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded-full">
          Edit Profile
        </button>
      </div>
     
     
    </div>
  </div>
  {/*Img Col*/}
  <div className="w-full lg:w-2/5">
    <img
      src="https://republiquela.com/wp-content/uploads/2021/12/republique-back-dining-room-daytime.jpg"
      className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
    />
  </div>




</div>


{
    edit && <>
     <h1 class="text-2xl md:text-3xl pl-2 my-10 border-l-4 text-black mt-10  font-sans font-bold border-amber-400 ">
                EDIT PROFILE
              </h1>
    <div className="flex justify-start mt-20 px-8">
  <form className="max-w-2xl bg-amber-50">
    <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
      <h2 className="text-xl text-black font-bold  dark:text-gray-300 pb-2">
        Restuarant Details
      </h2>
      <div className="flex flex-col gap-2 w-full border-gray-400">
        <div>
          <label className="text-black dark:text-gray-400">Restaurant Name</label>
          <input
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-amber-500 hover:shadow "
            type="text"
          />
        </div>
        <div>
          <label className="text-black  dark:text-gray-400">Food Type</label>
          <input
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-amber-500 hover:shadow "
            type="text"
          />
        </div>
        <div>
          <label className="text-black dark:text-gray-400">Phone Number</label>
          <input
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-amber-500 hover:shadow "
            type="number"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="py-1.5 px-3 m-1 text-center bg-amber-700 border rounded-md text-white  hover:bg-amber-500 hover:text-amber-100"
            type="submit"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </form>
</div>

    
    
    
    </>
  }

           
            </>
          )}

          {choise === "reservation" && (
            <>
              <h1 class="text-2xl md:text-3xl pl-2 border-l-4 text-black mt-10 font-sans font-bold border-amber-400 ">
                RESRVATIONS
              </h1>

              <div className="flex flex-wrap items-start justify-start p-10 py-10">
                <button
                  className="bg-black relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring  hover:ring-amber-600 text-white "
                  onClick={() => {
                    setStatus("pending");
                  }}
                >
                  <span className="text-sm">Pending Orders</span>
                </button>
                <button
                  className="bg-black relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring focus:ring-opacity-50 hover:ring-amber-600 text-white  "
                  onClick={() => {
                    setStatus("confirmed");
                  }}
                >
                  <span className="text-sm">Confirmed Orders</span>
                </button>
                <button
                  className="bg-black relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring focus:ring-opacity-50 hover:ring-amber-600 text-white "
                  onClick={() => {
                    setStatus("completed");
                  }}
                >
                  <span className="text-sm">Completed Orders</span>
                </button>
              </div>

              {status === "pending" && (
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">Pending Orders</span>
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    <div className="rounded overflow-hidden shadow-lg">
                      <a href="#" />
                      <div className="relative">
                        <img
                          className="w-full"
                          src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                        <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm font-bold">
                          table Id
                        </div>

                        <div className="text-sm absolute top-0 right-0 bg-amber-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                          <span className="font-bold">Order</span>
                          <small>Id</small>
                        </div>
                      </div>
                      <div className="bg-white">
                        <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                          <li>
                            <div className="px-4 py-5 sm:px-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                  Table Number
                                </h3>
                                <p className="mt-1 max-w-2xl text-medium text-black">
                                  1
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Status:
                                  <span className="text-red-600"> Pending</span>
                                </p>
                              </div>
                              <div class="mt-4 flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-500">
                                  Order Date:
                                  <span className="text-black"> 31/05/2023</span>
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p classNmae="text-sm font-medium text-gray-500">
                                  Order Time:
                                  <span className="text-black"> 6:00 PM</span>
                                </p>
                              </div>
                              <div class="mt-4 flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-500">
                                  Guest Number:
                                  <span className="text-black"> 5</span>
                                </p>
                                <button class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
                                  Confirm
                              </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === "confirmed" && (
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                      <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">Confirmed Orders</span>
                      <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    <div className="rounded overflow-hidden shadow-lg">
                      <a href="#" />
                      <div className="relative">
                        <img
                          className="w-full"
                          src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                        <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm font-bold">
                          table Id
                        </div>

                        <div className="text-sm absolute top-0 right-0 bg-amber-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                          <span className="font-bold">Order</span>
                          <small>Id</small>
                        </div>
                      </div>
                      <div className="bg-white">
                        <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                          <li>
                            <div className="px-4 py-5 sm:px-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                  Table Number
                                </h3>
                                <p className="mt-1 max-w-2xl text-medium text-black">
                                  3
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Status:
                                  <span clasNames="text-amber-700"> Confirmed</span>
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Order Date:
                                  <span className="text-black"> 31/05/2023</span>
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Order Time:
                                  <span className="text-black"> 12:00 PM</span>
                                </p>
                              </div>
                              <div class="mt-4 flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-500">
                                  Guest Number:
                                  <span className="text-black"> 2</span>
                                </p>
                                <button class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
                                  Completed
                              </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === "completed" && (
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                   <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                      <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">completed Orders</span>
                      <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    <div className="rounded overflow-hidden shadow-lg">
                      <a href="#" />
                      <div className="relative">
                        <img
                          className="w-full"
                          src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                        <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm font-bold">
                          table Id
                        </div>

                        <div className="text-sm absolute top-0 right-0 bg-amber-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                          <span className="font-bold">Order</span>
                          <small>Id</small>
                        </div>
                      </div>
                      <div className="bg-white">
                        <ul class="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto">
                          <li>
                            <div className="px-4 py-5 sm:px-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                                  Table Number
                                </h3>
                                <p className="mt-1 max-w-2xl text-medium text-black">
                                  5
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Status:
                                  <span className="text-green-600"> Completed</span>
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Order Date:
                                  <span className="text-black"> 31/05/2023</span>
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Order Time:
                                  <span className="text-black"> 9:00 AM</span>
                                </p>
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">
                                  Guest Number:
                                  <span className="text-black"> 3</span>
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantProfile;
