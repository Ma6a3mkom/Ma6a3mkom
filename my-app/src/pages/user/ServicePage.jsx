import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaUtensils, FaMapMarkerAlt } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa';
const ServicePage = ({ setCurrentTable }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [foodType, setFoodType] = useState("");
  const { type_food } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants/${type_food}`)
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [type_food]);

  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");

  const [searchTermUsers, setSearchTermUsers] = useState("");

  const [currentPageUsers, setCurrentPageUsers] = useState(1);

  useEffect(() => {
    const totalItemsUsers = restaurants.length;
    const totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);
    setCurrentPageUsers(1);
  }, [restaurants]);

  const itemsPerPage = 6;

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;
  const endIndexUsers = startIndexUsers + itemsPerPage;

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };

  const [selectedResId, setSelectedResId] = useState("");
  const navigate = useNavigate();

  function handleRes(restaurant) {
    let restaurant_id = restaurant.restaurant_id;
    setSelectedResId(restaurant_id);
    navigate(`/Details/${restaurant_id}`);
  }





  // Handle the restaurants tables 
  function handleTable(element) {
    setCurrentTable(element)

  }








  return (
    <>

<div className="relative">
  <img
    src="https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg"
    className="absolute inset-0 object-cover w-full h-full"
    alt=""
  />
  <div className="relative bg-gray-900 bg-opacity-70">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Restaurant table reservation services{" "}
            <br className="hidden md:block" />
          </h2>
          <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
            Diversity between different restaurants and differ in the
            advantages and services they offer.
          </p>
          <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
            <Link to="/Details"></Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-2/3 shadow-lg p-5 rounded-lg bg-white border-solid border-2 border-[#0e0d0d] transform transition duration-300 hover:scale-105">
          <div className="flex justify-between items-center">
            <label className="text-lg font-medium mr-2">Find Restaurant by Address</label>
            <select
              className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-yellow-500 border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance-none"
              value={yourSelectedStateValueAddress}
              onChange={(e) => setOptionAddress(e.target.value)}
            >
              <option value="">All Addresses</option>
              <option value="Amman">Amman</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Balqa">Balqa</option>
              <option value="Madaba">Madaba</option>
              <option value="Karak">Karak</option>
              <option value="Tafilah">Tafilah</option>
              <option value="Ma'an">Ma'an</option>
              <option value="Aqaba">Aqaba</option>
              <option value="Mafraq">Mafraq</option>
              <option value="Jerash">Jerash</option>
              <option value="Ajloun">Ajloun</option>
              <option value="Irbid">Irbid</option>
            </select>
          </div>
        </div>
      </div>



      <div className="flex flex-wrap gap-10 justify-center my-16">
        {restaurants
          .filter(
            (restaurant) =>
              restaurant.address.toLocaleLowerCase() === yourSelectedStateValueAddress.toLocaleLowerCase() ||
              yourSelectedStateValueAddress.toLocaleLowerCase() === ""
          )
          .slice(startIndexUsers, endIndexUsers)
          .map((restaurant, index) => (
            <div
              key={index}
              className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[fit-content] w-[fit-content] bg-white p-4 transform transition duration-300 hover:scale-105"
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
            >
              <img
                src={restaurant.img}
                alt={restaurant.restaurant_name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <strong>  <h2 className="text-lg font-large font-bold text-gray-800">
                  {restaurant.restaurant_name}
                </h2></strong>
                <p className="text-gray-500 mt-4 mb-3 flex items-center">
                  <FaBook className="mr-2" />
                  {restaurant.des}
                </p>

                <p className="text-gray-500 mt-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {restaurant.address}
                </p>
                <p className="text-gray-500 mt-2 flex items-center">
                  <FaUtensils className="mr-2" />
                  Food Type: {restaurant.type_food}
                </p>
                <div className="mt-5">
                  <button onClick={() => { handleRes(restaurant) }} className="btn buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                   View Details
                  </button>
                </div>
                <div className="mt-2" />
              </div>
            </div>
          ))}
      </div>


      <div className="flex justify-center mb-5 bg-white">
        <Pagination
          count={Math.ceil(restaurants.length / itemsPerPage)}
          page={currentPageUsers}
          onChange={handlePageChangeUsers}
          color="primary"
          size="large"
        />
      </div>
    </>
  );
};

export default ServicePage;
