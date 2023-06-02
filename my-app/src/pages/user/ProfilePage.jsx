import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const ProfilePage = () => {





    return (
        <>
        <div className="p-16 bg-white">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">My Profile</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
            </h1>
            <div className="p-8 bg-white shadow mt-24">
                {" "}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {" "}
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        {" "}

                    </div>{" "}
                    <div className="relative">
                        {" "}
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg
                                xmlns="https://source.unsplash.com/MP0IUfwrn0A"
                                className="h-24 w-24"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                {" "}
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>{" "}
                        </div>{" "}
                    </div>{" "}
                    <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
                        <button className="text-white py-2 px-4 uppercase rounded bg-orange-500 hover:bg-orange-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">

                            <Link to="/EditProfile" className="text-white py-2 px-4 uppercase rounded bg-orange-500 hover:bg-orange-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Edit Profile
                            </Link>
                        </button>{" "}

                    </div>
                </div>{" "}
                <div className="mt-20 text-center border-b pb-12">
                    {" "}
                    <h1 className="text-4xl font-medium text-gray-700">
                        Jessica Jones
                    </h1>{" "}
                    <p className="font-light text-gray-600 mt-3">email@example.com</p>{" "}
                    <p className="mt-8 text-gray-500">
+962-799212026                        </p>{" "}
                    <p className="mt-2 text-gray-500">Amman, Jordan</p>

                </div>{" "}

            </div>
            {/* <br />
            <br />
            <br />

            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-500 uppercase">Previous Reservations</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-500"></span>
                </h1>
            <div className="p-8 bg-white shadow mt-24">
                {" "}

            
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  bg-white">

                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 opacity-50">
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
            </div> */}

        </div>
    </>

    )
}

export default ProfilePage