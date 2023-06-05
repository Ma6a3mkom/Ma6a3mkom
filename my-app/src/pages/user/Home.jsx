// import React from 'react'
// import Carousel from "react-bootstrap/Carousel";
import { Button } from "@material-tailwind/react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import video from '../../images/video.mp4'
import { HashLink } from "react-router-hash-link";


const Home = () => {
  


 
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const navigate = useNavigate();


  const handleFoodTypeSelection = (foodType) => {
    setSelectedFoodType(foodType);
    navigate(`/restaurants/${foodType}`);
  };



  return (
    <>
     <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
  <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
    <video
      className="min-w-full min-h-full absolute object-cover"
      src={video}
      type="video/mp4"
      autoPlay={true}
      muted={true}
      loop={true}
    />
  </div>
  <div className="video-content space-y-2 z-10 pb-5" style={{height: "55vh"}}>
    <h1 className="font-bold text-5xl uppercase text-amber-600">Foodie's Paradise Awaits</h1>
    <h3 className="font-bold text-2xl capitalize">Reserve your table with ease and indulge in culinary delights <br/> at your favorite restaurants</h3>
    <div class="rounded-md shadow mt-10">
        <HashLink smooth={true} to="#food">
        <button class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
            Pick Your Favorite Food
        </button>
        </HashLink>
    </div>

  </div>
</section>


      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize">
              Effortless reservations at favorite restaurants
            </h2>
            <br />

            <p className="mb-4">
              Elevate your dining adventures with our user-friendly platform, where you can effortlessly browse, select, and book tables at top-rated restaurants.                 </p>

          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://i.pinimg.com/736x/18/f8/26/18f8262341b337e7d3f714e41cef7a09.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://c.stocksy.com/a/c4A800/z9/1945350.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>


      <div>
        <section style={{ marginTop: "120px" }} id="food">
          <br />
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white  text-center capitalize">
            Which food do you prefer?
          </h2>
          <div className="flex flex-wrap my-10 mx-20">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative rounded-lg overflow-hidden">
                {/* Asian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60="
                  alt="vegetables" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Asian Food
                    </h2>
                      <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("asian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Arabian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://i.ndtvimg.com/i/2016-05/arabic-food_625x350_71463118204.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Arabian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("arabian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Mexican Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Mexican Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("mexican")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Italian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://static1.squarespace.com/static/5e484ab628c78d6f7e602d73/5e484d29dd42c458f31f0b22/5f52972ad03efd52606d4ad9/1680649812918/What-to-eat-in-Italy.png?format=1500w"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Italian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("italian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Indian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Indian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("indian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* American Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://www.americancafe.com/wp-content/uploads/2021/09/americancafe-What-Started-American-Cuisine-%E2%80%93-Discover-How-It-All-Started.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      American Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("american")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<div className="flex justify-center">

<HashLink smooth={true} to="ServicePageAll#">
<Button className="border border-solid border-amber-600 border-2 text-amber-600 hover:bg-amber-600 hover:text-[#ffffff]" variant="text">
  Show All Restaurants
  </Button>
  </HashLink>

</div>
      </div>

      
      <br />

      <section className="mb-10">
        <br />
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white text-center">
          What People Says
        </h2>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-8 lg:mx-16">
          {/* 1 */}

          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-amber-700 antialiased">
                John Amber
              </h4>
              <br />
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                This website made booking a table at my favorite restaurant a breeze.    </p>
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                The intuitive design and smooth reservation process ensured that I had a seamless experience from start to finish.
              </p>
              <br />
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
            </div>

          </div>
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-amber-700 antialiased">
                Saleem Ahmad
              </h4>
              <br />
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                I had a fantastic experience with this website for booking restaurant tables.    </p>
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                It provided a hassle-free way to reserve a table, and the automated notifications kept me informed every step of the way.
              </p>
              <br />
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
            </div>

          </div>
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-amber-700 antialiased">
                Jesica Nour
              </h4>
              <br />
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                The convenience of this website for booking restaurant tables exceeded my expectations.   </p>
              <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                I was able to browse available time slots, select my preferred table, and receive instant confirmation. It made dining out a breeze.        </p>
              <br />
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
            </div>

          </div>

        </div>

      </section>
    </>


  )
}

export default Home