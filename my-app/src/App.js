import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
//-----------------------------user-------------------------------//
import NavListMenu from "./components/user/NavListMenu"
import Footer from "./components/user/Footer"
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import PaymentPage from './pages/user/PaymentPage';
import Home from "./pages/user/Home"
import About from "./pages/user/About"
import ContactUs from './pages/user/ContactUs';
import ProfilePage from './pages/user/ProfilePage'
import ServicePage from './pages/user/ServicePage';
import Details from './pages/user/Details';
//----------------------------------------------------------------//

//------------------------ Restaurants----------------------------//
import RestaurantProfile from './pages/restaurants/RestaurantProfile';
import RestaurantHome from './pages/restaurants/RestaurantHome';




//---------------------------------------------------------------//


//----------------------------admin------------------------------//
import Sidebar from './pages/admin/dashboard/Sidebar';
import NavListMenuD from './pages/admin/dashboard/NavDashboard'
import MainDashboard from './pages/admin/MainDashboard';
import ListUser from './pages/admin/ListUser'
import ListRestaurant from './pages/admin/ListRestaurant';
import Chat from './pages/admin/Chat';
//---------------------------------------------------------------//



function App() {

  const [hideRouterUser, setHideRouterUser] = useState(true);
  const [hideRouterAdmin, setHideRouterAdmin] = useState(true);
  const [hideRouterRestaurants, setHideRouterRestaurants] = useState(false);


  //-----------------------------User Router-------------------------------//
  const AppRouterUser = () => {
    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<Home />} />
             <Route path="About" element={<About />} />
             <Route path='ContactUs' element={<ContactUs/>}/>
             <Route path="SignIn" element={<SignIn />} />
             <Route path="SignUp" element={<SignUp />} />
             <Route path="PaymentPage" element={<PaymentPage />} />
             <Route path="ProfilePage" element={<ProfilePage />} />
             <Route path="ServicePage" element={<ServicePage />} />
             <Route path="Details" element={<Details />} />
        </Routes>
        <Footer/>
      </Router>
     
    );
  };

//----------------------------Admin Router------------------------------//
  const AppRouterAdmin = () => {
    return (
      
      <Router>
        <Sidebar />
       <div style={{width:"100%"}}>
       <NavListMenuD/>
        <Routes>        
        <Route index element={<MainDashboard />} />
        <Route path="ListUser" element={<ListUser />} />
        <Route path="ListRestaurant" element={<ListRestaurant />} />
        <Route path="Chat" element={<Chat />} />
        </Routes>
        </div>
      </Router>
     
    );
  };

//------------------------ Restaurants Router----------------------------//
  const AppRouterRestaurants = () => {
    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<RestaurantHome />} />
             <Route path="profile/:id" element={<RestaurantProfile />} />

        </Routes>
      </Router>
     
    );
  };

  return (
 <>
 
    {hideRouterUser ? null : (
      <>
        <AppRouterUser />
      </>
    )}
   {hideRouterAdmin ? null : (
      <>
        <div className='flex'>
        <AppRouterAdmin />
        </div>
      </>
    )}

{hideRouterRestaurants ? null : (
      <>
        <AppRouterRestaurants />
      </>
    )}
 </>
  );
}

export default App;
