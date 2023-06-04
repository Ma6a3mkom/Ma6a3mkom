import React,{useState,useEffect,useContext} from "react";
import "./ServicePage.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Link ,useParams,useNavigate } from 'react-router-dom';

const ServicePage = ({setCurrentTable}) => {

  const [restaurants, setRestaurants] = useState([]);
  const [foodType, setFoodType] = useState('');
  const { type_food } = useParams();

  useEffect(() => {
    {
      axios
        .get(`http://localhost:5000/restaurants/${type_food}`)
        .then((response) => {
          console.log(response.data);
          setRestaurants(response.data);
          console.log(response.data);
        }).catch((error) => console.log(error.message));
    }
  }, [foodType]);



  let cards = [
    {
      Name: "  Qaysar Pizza ",
      Address: "Amman",
      path: "https://d2nuhorlnps36p.cloudfront.net/hotels/93783/93783_039_Restaurant.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Food: "Arabian",
    },
    {
      Name: "  Pizza Nina ",
      path: "https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Amman",
      Food: "Arabian",
    },
    {
      Name: "  The Judge",
      path: "https://eventective-media.azureedge.net/2524260_lg.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Zarqa",
      Food: "Arabian",
    },

    {
      Name: "  Brisket",
      path: "https://dimg04.c-ctrip.com/images/220j180000014l7vqC793_R_1136_750_R5_D.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Zarqa",
      Food: "Arabian",
    },
    {
      Name: "  Mcdonalds  ",
      path: "https://img.freepik.com/premium-photo/luxury-table-setting-dining-restaurant-pastel-colors-close-up-wedding-party-table-set-banquet_324489-5752.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Aqaba",
      Food: "Arabian",
    },
    {
      Name: "  Free Fire ",
      path: "https://th.bing.com/th/id/OIP.1dAJAMgUB2yCt5jyO0s9TAHaE8?pid=ImgDet&w=1030&h=687&rs=1",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Aqaba",
      Food: "Arabian",
    },

    {
      Name: "  Chicker's",
      path: "https://images.trvl-media.com/hotels/1000000/30000/23000/22994/8b25298d_z.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Petra",
      Food: "Arabian",
    },
    {
      Name: "  Rodeo Grill",
      path: "https://ludalct.ycl.hky.mybluehost.me/wp-content/uploads/2019/11/2A1A4412-copy-min.jpg",
      description:
        " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.",
      Address: "Petra",
      Food: "Arabian",
    },
    {
      Name: "Italiano Pizzeria",
      Address: "Amman",
      path: "https://www.seriouseats.com/recipes/images/2016/12/20161216-pizza-francese-margherita-food-lab-57-1500x1125.jpg",
      description:
        "Authentic Italian pizza made with the finest ingredients. Come and savor the taste of Italy at our pizzeria in Amman.",
      Food: "Italian",
    },
    {
      Name: "Pasta La Vista",
      Address: "Amman",
      path: "https://www.thespruceeats.com/thmb/DJpZTys_B3Pq9at4OG08Hk5hVqQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-pasta-spaghetti-2500-56a20f2f5f9b58b7d0c6349b.jpg",
      description:
        "Indulge in the rich flavors of authentic Italian pasta. Our restaurant in Amman offers a wide variety of pasta dishes to satisfy your cravings.",
      Food: "Italian",
    },
    {
      Name: "Mamma Mia Ristorante",
      Address: "Zarqa",
      path: "https://www.mariannasitalian.com/wp-content/uploads/2017/12/italian-restaurant-in-central-oregon.jpg",
      description:
        "Experience the taste of Italy at Mamma Mia Ristorante. From classic Italian dishes to modern creations, our menu has something for everyone.",
      Food: "Italian",
    },
    {
      Name: "Taste of Napoli",
      Address: "Zarqa",
      path: "https://www.lifedaily.com/wp-content/uploads/2016/08/italian-food-11.jpg",
      description:
        "Get a true taste of Napoli right here in Zarqa. Our restaurant serves traditional Neapolitan cuisine with a touch of modern flair.",
      Food: "Italian",
    },
    {
      Name: "La Trattoria",
      Address: "Aqaba",
      path: "https://www.italoamerica.com/wp-content/uploads/2018/03/eat-italian-food.jpg",
      description:
        "Step into La Trattoria and be transported to the heart of Italy. Enjoy the cozy ambiance and authentic Italian dishes prepared with love.",
      Food: "Italian",
    },
    {
      Name: "Bella Cucina",
      Address: "Aqaba",
      path: "https://www.littlethings.com/app/uploads/2017/07/1-italian-food-williams-1.jpg",
      description:
        "Discover the art of Italian cooking at Bella Cucina. Our skilled chefs create mouthwatering dishes using the freshest ingredients.",
      Food: "Italian",
    },
    {
      Name: "Ciao Bella",
      Address: "Petra",
      path: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-lasagna-horizontal-1543876774.png",
      description:
        "Experience the warm hospitality of Italy at Ciao Bella. Indulge in classic Italian flavors and enjoy a delightful dining experience.",
      Food: "Italian",
    },
    {
      Name: "Gusto Italiano",
      Address: "Petra",
      path: "https://www.recipetineats.com/wp-content/uploads/2020/08/Chicken-Piccata_2-SQ.jpg",
      description:
        "Savor the flavors of Italy at Gusto Italiano. From pasta to pizza, our menu showcases the best of Italian cuisine in Petra.",
      Food: "Italian",
    },
    {
      Name: "Pasta Palace",
      Address: "Amman",
      path: "https://www.budgetbytes.com/wp-content/uploads/2013/02/Mushroom-Marina-Pasta-close.jpg",
      description:
        "Welcome to Pasta Palace, where pasta dreams come true. Treat yourself to a wide variety of pasta dishes prepared with love and passion.",
      Food: "Mexican",
    },
    {
      Name: "Pasta Palace",
      Address: "Amman",
      path: "https://www.budgetbytes.com/wp-content/uploads/2013/02/Mushroom-Marina-Pasta-close.jpg",
      description:
        "Welcome to Pasta Palace, where pasta dreams come true. Treat yourself to a wide variety of pasta dishes prepared with love and passion.",
      Food: "Mexican",
    },
  ];

  function handleTable(element){
    setCurrentTable(element)
   
  }

  const [yourSelectedStateValueType, setOptionType] = useState("Arabian");
  const [yourSelectedStateValueAddres, setOptionAddres] = useState("Arabian");
  //-----------------------search------------------------//
  const [searchTermUsers, setSearchTermUsers] = useState("");
  const [FilterDataUsers, setFilterDataUsers] = useState([...cards]);

  const [currentPageUsers, setCurrentPageUsers] = useState(1);



  const filterDataByNameUsers = (searchTermUsers) => {

    const filteredDataUsers = cards.filter((item) =>
      item.Name.toLowerCase().includes(searchTermUsers.toLowerCase())
    );
    setFilterDataUsers(filteredDataUsers);
    setCurrentPageUsers(1);
  };


function handleFind(){

  const filteredDataUsers = cards.filter((item) =>
      item.Food.toLowerCase().includes(yourSelectedStateValueType.toLowerCase())
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
    const [selectedresId, setSelectedresId] = useState('');
    const navigate = useNavigate();

    function handleRes(restaurant){
      let restaurant_id = restaurant.restaurant_id
      
      setSelectedresId(restaurant_id);
       navigate(`/Details/${restaurant_id}`);
    

      // axios
      //   .get(`http://localhost:5000/razan/${restaurant}`)
      //   .then((response) => {

      //   }).catch((error) => console.log(error.message));


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
                  Restaurant table reservation services{" "}
                  <br className="hidden md:block" />
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Diversity between different restaurants and differ in the
                  advantages and services they offer.
                </p>
                <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                  <Link to="/Details"> Details </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    


<div className="flex justify-center mt-5 mb-5">




<div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-white border-solid border-2 border-[#0e0d0d]">
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
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
       
       value={yourSelectedStateValueType} 
       onChange={e => setOptionType(e.target.value)} 
      >
      
        <option value="">All Type</option>
        <option value="Arabian">Arabian</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
      </select>

      <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
       
       value={yourSelectedStateValueAddres} 
       onChange={e => setOptionAddres(e.target.value)} 
      >
      
        <option value="">All Address</option>
        <option value="Amman">Amman</option>
        <option value="Zarqa">Zarqa</option>
      </select>
     
    </div>
    <button onClick={handleFind} className=" w-20 h-14 border-solid border-2 border-[#ea4d24] px-4 py-2 bg-gray-100 hover:bg-[#ea4d24] hover:text-[#efeae9] text-[#ea4d24] text-sm font-medium rounded-md">
      Find
    </button>
  </div>
</div>








</div>
          


      
      <div>
       
      <center>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Restaurant's menu to book
        </h5>
      </center>
      <div className="flex flex-wrap gap-10 justify-center my-16">
        {restaurants.map((restaurant, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
            <a href="#">
              <img className="rounded-t-lg" src={restaurant.img} alt="" />
            </a>
            <center>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {restaurant.restaurant_name}<br /> - {restaurant.address}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {restaurant.des}
                </p>
                <button onClick={()=>{handleRes(restaurant)}} className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
                   Details
                </button>
              </div>
            </center>
          </div>
        ))}
      </div>

        <div className="flex w-full justify-center mt-5">
        {
          <Pagination
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

export default ServicePage;


