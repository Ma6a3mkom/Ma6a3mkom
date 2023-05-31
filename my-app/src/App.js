import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavListMenu from "./components/user/NavListMenu"
import Footer from "./components/user/Footer"
import Home from "./pages/user/Home"
import About from "./pages/user/About"



function App() {

  const [hideRouterUser, setHideRouterUser] = useState(false);
  const [hideRouterAdmin, setHideRouterAdmin] = useState(true);
  const [hideRouterRestaurants, setHideRouterRestaurants] = useState(true);

  
  const AppRouterUser = () => {
    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<Home />} />
             <Route path="About" element={<About />} />

        </Routes>
        <Footer/>
      </Router>
     
    );
  };

  const AppRouterAdmin = () => {
    return (
      
      <Router>
        <Routes>
             <Route index element={<Home />} />
             <Route path="About" element={<About />} />

        </Routes>
        <Footer/>
      </Router>
     
    );
  };

  const AppRouterRestaurants = () => {
    return (
      
      <Router>
       <NavListMenu />
        <Routes>
             <Route index element={<Home />} />
             <Route path="About" element={<About />} />

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
        <AppRouterAdmin />
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
