import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const ProfilePage = () => {

    const [choise, setChoise] = useState("profile");
    const [status, setStatus] = useState("pending");



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
                        {/*  */}




                        {/*  */}
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

                    {choise === "profile" && (
                        <>




                            <link
                                rel="stylesheet"
                                href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
                            />
                            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                                <div
                                    id="profile"
                                    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                                >
                                    <div className="p-4 md:p-12 text-center lg:text-left">
                                        {/* Image for mobile view*/}
                                        <div
                                            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                            style={{
                                                backgroundImage: 'url("https://source.unsplash.com/MP0IUfwrn0A")'
                                            }}
                                        />
                                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
                                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />


                                        <a href="mailto:your-email@example.com" class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                            <div class="flex items-center">
                                                <div class="rounded-full bg-orange-500 text-white h-10 w-10 flex items-center justify-center mr-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM3 7l9 5 9-5" />
                                                        <path d="M9 18h6" />
                                                        <path d="M9 12h6" />
                                                        <path d="M9 6h6" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 class="font-bold">email@gmail.com</h3>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="https://wa.me/1234567890" class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                            <div class="flex items-center">
                                                <div class="rounded-full bg-orange-500 text-white h-10 w-10 flex items-center justify-center mr-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 class="font-bold">+962 799070841</h3>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="https://www.google.com/maps?q=Amman,%20Jordan" className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                            <div className="flex items-center">
                                                <div className="rounded-full bg-orange-500 text-white h-10 w-10 flex items-center justify-center mr-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 384 512">
                                                        <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold">Amman, Jordan</h3>
                                                </div>
                                            </div>
                                        </a>
                                        <br />


                                    </div>
                                </div>
                                <div className="w-full lg:w-2/6">
                                    <img
                                        src="https://source.unsplash.com/MP0IUfwrn0A"
                                        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                                    />
                                </div>
                            </div>

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
                                    <span className="text-sm">Current Reservation</span>
                                </button>

                                <button
                                    className="bg-black relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring focus:ring-opacity-50 hover:ring-amber-600 text-white "
                                    onClick={() => {
                                        setStatus("completed");
                                    }}
                                >
                                    <span className="text-sm">Old Reservation</span>
                                </button>
                            </div>

                            {status === "pending" && (
                                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                                    <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">Waiting .. </span>
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
                                                                    <span className="text-red-600"> Waiting</span>
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
                                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 opacity-50">
                                    <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">completed Orders</span>
                                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
                                    </h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                                        <div className="rounded overflow-hidden shadow-lg">
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

    )
}

export default ProfilePage