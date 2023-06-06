import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServicePage.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const ServicePageAll = ({ setCurrentTable }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [FilterDataUsers, setFilterDataUsers] = useState([]);

  // get all the restaurants from database 
  useEffect(() => {
    axios
      .get("http://localhost:5000/restaurantsAll")
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data);
        setFilterDataUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const [selectedResId, setSelectedResId] = useState("");
  const navigate = useNavigate();
  function handleRes(element) {
    setCurrentTable(element);
    let restaurant_id = element.restaurant_id;
    setSelectedResId(restaurant_id);
    navigate(`/Details/${restaurant_id}`);
  }

  const [yourSelectedStateValueType, setOptionType] = useState("");
  const [yourSelectedStateValueAddress, setOptionAddress] = useState("");
  //-----------------------search------------------------//
  const [searchTermUsers, setSearchTermUsers] = useState("");

  const [currentPageUsers, setCurrentPageUsers] = useState(1);


  //This function is work as filter the restaurants based on their name and update the searchTermUsers state whenever the user types in the search input field.
  const filterDataByNameUsers = (searchTermUsers) => {
    const filteredDataUsers = restaurants?.filter((item) =>
      item.restaurant_name.toLowerCase().includes(searchTermUsers.toLowerCase())
    );
    setFilterDataUsers(filteredDataUsers);
    setCurrentPageUsers(1);
    console.log(searchTermUsers);
  };

  function handleFind() {
    console.log(restaurants[0].type_food.toLowerCase());
    const filteredDataUsers = restaurants?.filter((item) =>
    item.type_food
      ?.toLowerCase()
      .includes(yourSelectedStateValueType.toLowerCase()) &&
    item.address
      ?.toLowerCase()
      .includes(yourSelectedStateValueAddress.toLowerCase())
  );
    setFilterDataUsers(filteredDataUsers);
  }


  let totalItemsUsers;

  let totalPagesUsers;

  let slicedArrayUsers;

  const itemsPerPage = 6;

  totalItemsUsers = FilterDataUsers.length;

  totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;

  const endIndexUsers = startIndexUsers + itemsPerPage;

  slicedArrayUsers = FilterDataUsers.slice(startIndexUsers, endIndexUsers);

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };

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
                  Restaurant table reservation services{" "}
                  <br className="hidden md:block" />
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Diversity between different restaurants and differ in the
                  advantages and services they offer.
                </p>
                <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                  <Link to="/Details">  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-10/12 shadow p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-yellow-500 border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance-none mr-5"
                value={yourSelectedStateValueType}
                onChange={(e) => setOptionType(e.target.value)}
              >
                <option value="">All Type</option>
                <option value="arabian">arabian</option>
                <option value="italian">italian</option>
                <option value="asian">asian</option>
                <option value="mexican">mexican</option>
                <option value="indian">indian</option>
                <option value="american">american</option>
              </select>

              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-yellow-500 border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance-none"
                value={yourSelectedStateValueAddress}
                onChange={(e) => setOptionAddress(e.target.value)}
              >
                <option value="">All Addresses</option>
                <option value="amman">amman</option>
                <option value="zarqa">zarqa</option>
                <option value="balqa">balqa</option>
                <option value="madaba">madaba</option>
                <option value="karak">karak</option>
                <option value="tafilah">tafilah</option>
                <option value="ma'an">ma'an</option>
                <option value="aqaba">aqaba</option>
                <option value="mafraq">mafraq</option>
                <option value="jerash">jerash</option>
                <option value="ajloun">ajloun</option>
                <option value="irbid">irbid</option>
              </select>
            </div>
            <button
              className=" w-20 h-10 bg-[orange] px-4 py-2  text-white text-sm font-medium rounded-md"
              onClick={handleFind}
            >
              Find
            </button>
          </div>
        </div>
      </div>

      <div>
        <center>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Restaurant's menu to book{" "}
          </h5>
        </center>
        <div className="flex flex-wrap gap-10 justify-center my-16">
          {slicedArrayUsers?.map((restaurant, index) => {
            return (
              <>
                <div
                  key={restaurant.restaurant_id}
                  className="flex flex-col shadow-lg rounded-lg overflow-hidden h-[fit-content] w-[fit-content] bg-white p-4 transform transition duration-300 hover:scale-105"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={restaurant.img}
                    alt={restaurant.restaurant_name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <strong>
                      {" "}
                      <h2 className="text-lg font-large font-bold text-gray-800">
                        {restaurant.restaurant_name}
                      </h2>
                    </strong>
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
                      <button
                        onClick={() => {
                          handleRes(restaurant);
                        }}
                        className="btn buttonNav border-none bg-transparent px-8 py-3 text-black mr-4"
                      >
                        View Details
                      </button>
                    </div>
                    <div className="mt-2" />
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex w-full justify-center mt-5 bg-white mb-5">
          {
            <Pagination
              color="warning"
              count={totalPagesUsers}
              page={currentPageUsers}
              onChange={handlePageChangeUsers}
            />
          }
        </div>
      </div>
    </>
  );
};

export default ServicePageAll;