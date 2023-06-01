// import React from 'react'
// import Carousel from "react-bootstrap/Carousel";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carousel className="rounded-xl">


        <div className="relative h-4/5 w-full">
          <img
            src="https://hrarchz.com/wp-content/uploads/2019/12/Black-Dinning-Room-HRarchZ-4.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
            <div className="w-1/4 text-center ">
              <Typography
                variant="h1"
                color="orange"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Foodie's Paradise Awaits.
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Reserve your table with ease and indulge in culinary delights at your favorite restaurants.
              </Typography>
              <div className="flex justify-center ">
                <Link to="/SignUp">
                  <Button size="lg" color="orange">
                    Join Us Now!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-4/5 w-full">
          <img
            src="https://hrarchz.com/wp-content/uploads/2019/12/Black-Dinning-Room-HRarchZ-4.jpg"

            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
            <div className="w-1/4 text-center ">
              <Typography
                variant="h1"
                color="orange"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Culinary Magic Unleashed
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Celebrate life's moments with extraordinary food. Book a table, gather your loved ones, and create memories around a delightful feast.
              </Typography>
              <div className="flex justify-center ">
                <Link to="/SignUp">
                  <Button size="lg" color="orange">
                    Join Us Now!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-4/5 w-full">
          <img
            src="https://hrarchz.com/wp-content/uploads/2019/12/Black-Dinning-Room-HRarchZ-4.jpg"

            alt="image 3"
            className="h-4/5 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="orange"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Flavors that Mesmerize!



              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Life is too short for average meals. Seize the moment, book a table, and savor every delicious second.


              </Typography>
              <div className="flex gap-2">

                <Link to="/SignUp">
                  <Button size="lg" color="orange">
                    Join Us Now!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>


      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Effortless reservations at favorite restaurants.
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




      <section>
        <br />
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          Which food you prefer?
        </h2>

        <div className="flex flex-wrap my-10 mx-20">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative rounded-lg overflow-hidden">
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

                  <Link to="/ServicePage">
                    <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
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

                  <Link to="/ServicePage">
                    <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover object-center"
                src="data:image/jpeg;base64,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"
                alt="vegetables" />
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                    Sea Food
                  </h2>

                  <Link to="/ServicePage">
                    <button className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>


      </section>
      <br />

      <section>
        <br />
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          What People Says
        </h2>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-8 lg:mx-16">
          {/* 1 */}

          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Name
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
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Name
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
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Name
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