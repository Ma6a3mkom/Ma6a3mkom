import React from 'react'
import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js';
import { mdiCheckCircle } from '@mdi/js';
import { mdiDelete } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import { useState } from 'react';

 import Pagination from "@mui/material/Pagination";

const ApproveTable = () => {

 let x =[
{NAME:"KFC",	
EMAIL:"majdi.shomali.1997@gmail.com",
DATE:"30.Jan.2021",
LOCATION:"Zarqa"
},
{NAME:"MAC",	
EMAIL:"majdi.shomali.444@gmail.com",
DATE:"14.Jan.2022",
LOCATION:"amman"
},
{NAME:"abc3",	
EMAIL:"majdi.shomali.000@gmail.com",
DATE:"2.Jan.2023",
LOCATION:"irbid"
},
{NAME:"NAR",	
EMAIL:"majdi.shomali.000@gmail.com",
DATE:"2.Jan.2023",
LOCATION:"irbid"
},
{NAME:"MAZAG",	
EMAIL:"majdi.shomali.000@gmail.com",
DATE:"2.Jan.2023",
LOCATION:"irbid"
}

 ]



       //-----------------------search------------------------//
       const [searchTermRestaurants, setSearchTermRestaurants] = useState('');
       const [FilterDataRestaurants, setFilterDataRestaurants] = useState(x);
       
       
       const filterDataByNameRestaurants = (searchTermRestaurants) => {
         console.log(searchTermRestaurants)
         
         const filteredDataRestaurants = x.filter(item =>
       
           item.NAME.toLowerCase().includes(searchTermRestaurants.toLowerCase())
         );
         setFilterDataRestaurants(filteredDataRestaurants);
          setCurrentPageRestaurants(1)
       }
       
       const [currentPageRestaurants, setCurrentPageRestaurants] = useState(1);

       let totalItemsRestaurants;
       
       let totalPagesRestaurants;
       
       let slicedArrayRestaurants;
       
       const itemsPerPage = 3;
       
       totalItemsRestaurants = FilterDataRestaurants.length;
       
       totalPagesRestaurants = Math.ceil(totalItemsRestaurants / itemsPerPage);
       
       const startIndexRestaurants = (currentPageRestaurants - 1) * itemsPerPage;
       
       const endIndexRestaurants = startIndexRestaurants + itemsPerPage;
       
       slicedArrayRestaurants = FilterDataRestaurants.slice(startIndexRestaurants, endIndexRestaurants);
       
       const handlePageChangeRestaurants = (event, pageNumber) => {
         setCurrentPageRestaurants(pageNumber);
       };

       
  return (
    
<>





<div className='bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl'>


<form>
 
  <div className="relative">
 
    <input
      type="email"
      id="search"
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Email"
      required=""
    />
    <button
      type="submit"
      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      add Email
    </button>
  </div>
</form>









  <div className="relative flex items-center justify-between pt-4">
    <div className="text-xl font-bold text-navy-700 dark:text-white">
    Restaurants Table
    </div>
 
  </div>

  <form>
 
 <div className="relative">

   <input
     type="text"
     id="search"
     className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     placeholder="Search"
     required=""
     value={searchTermRestaurants}
     onChange={(e) =>{
      setSearchTermRestaurants(e.target.value);
     filterDataByNameRestaurants(e.target.value);
    }}
   />

 </div>
</form>

  <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
    <table role="table" className="w-full">
      <thead>
        <tr role="row">
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">NAME</p>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">EMAIL</p>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">DATE</p>
          </th>
          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">LOCATION</p>
          </th>

          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">EDIT</p>
          </th>

          <th
            colSpan={1}
            role="columnheader"
            title="Toggle SortBy"
            className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
            style={{ cursor: "pointer" }}
          >
            <p className="text-xs tracking-wide text-gray-600">DELETE</p>
          </th>

        </tr>
      </thead>
      

{

slicedArrayRestaurants.map((e)=>{

return(

<tbody role="rowgroup">
<tr role="row">
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {e.NAME}
            </p>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
            <div className="flex items-center gap-2">
              <div className="rounded-full text-xl">
                {/* <Icon color= {e.STATUSt=="APPROVED" ? 'green' : 'blue'} path={e.STATUS} size={1} /> */}
                {e.EMAIL}
              
              </div>
              {/* <p className="text-sm font-bold text-navy-700  dark:text-white">
                {e.STATUSt}
              </p> */}
            </div>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
            <p className="text-sm font-bold text-navy-700 dark:text-white">
              {e.DATE}
            </p>
          </td>
          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
          <p className="text-sm font-bold text-navy-700 dark:text-white">
              {e.LOCATION}
            </p>
          </td>

          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
                     <button>
                     <Icon color="blue" path={mdiFileEdit} size={1} />
                    </button>
          </td>


          <td className="pt-[14px] pb-[18px] sm:text-[14px]" role="cell">
                     <button>
                      <Icon color="red" path={mdiDelete} size={1} />
                    </button>
          </td>


        </tr>
       
      </tbody>




)



})

}


        
    </table>
  </div>


</div>

<div className='flex w-full justify-center mt-5'>   
    {(
        <Pagination
          count={totalPagesRestaurants}
          page={currentPageRestaurants}
          onChange={handlePageChangeRestaurants}
        />
      )}
    </div> 


  </>
  )
}

export default ApproveTable