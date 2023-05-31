import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavListMenu from "./components/NavListMenu"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
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
