import React from 'react'
import { Link } from "react-router-dom";
import "./ServicePage.css";

const ServicePage = () => {
  let cards = [

    { Name: "  Qaysar Pizza ", path: "https://d2nuhorlnps36p.cloudfront.net/hotels/93783/93783_039_Restaurant.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  Pizza Nina ", path: "https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  The Judge", path: "https://eventective-media.azureedge.net/2524260_lg.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },

    { Name: "  Brisket", path: "https://dimg04.c-ctrip.com/images/220j180000014l7vqC793_R_1136_750_R5_D.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  Mcdonalds  ", path: "https://img.freepik.com/premium-photo/luxury-table-setting-dining-restaurant-pastel-colors-close-up-wedding-party-table-set-banquet_324489-5752.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: " 12.1044$ " },
    { Name: "  Free Fire ", path: "https://th.bing.com/th/id/OIP.1dAJAMgUB2yCt5jyO0s9TAHaE8?pid=ImgDet&w=1030&h=687&rs=1", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },

    { Name: "  Chicker's", path: "https://images.trvl-media.com/hotels/1000000/30000/23000/22994/8b25298d_z.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  Rodeo Grill", path: "https://ludalct.ycl.hky.mybluehost.me/wp-content/uploads/2019/11/2A1A4412-copy-min.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },

  ]
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
                  <Link to="/Details">    Details </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <br />
      <br />
      <br />
      <br />

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
    </>)
}

export default ServicePage