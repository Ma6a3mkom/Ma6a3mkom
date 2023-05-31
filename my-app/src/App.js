import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavListMenu from "./components/user/NavListMenu"
import Footer from "./components/user/Footer"
import Home from "./pages/user/Home"
import About from "./pages/user/About"
function App() {

  const [hideRouter1, setHideRouter1] = useState(false);
  const AppRouter1 = () => {
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
  return (
 <>
 
    {hideRouter1 ? null : (
      <>
        <AppRouter1 />
      </>
    )}
 
 </>
  );
}

export default App;
