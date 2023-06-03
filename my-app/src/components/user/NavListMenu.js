import React,{useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../UserContext';
import Swal from 'sweetalert2'

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import logo from '../../images/logo.png'
 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "About us",
    description: "Learn about our story and our mission statement.",
    path:"./About"
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Contact Us",
    description: "News and writings, press releases, and resources",
    path:"./ContactUs"
  },

  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "User Profile",
    description: "Checkout your profile",
    path:"./UserProfile"
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Admin",
    description: "Add you recipes",
    path:"./Admin"
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "recipes",
    description: "What I can cook",
    path:"./Recipes"
  },

];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color,path }, key) => (
      <Link to={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );
 
  return (
    <React.Fragment>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        
        <Link to="/">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white hover:bg-black hover:text-white focus:bg-amber-600">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Home
        </ListItem>
        </Link>

      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        
        <Link to="/About">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white hover:bg-black hover:text-white focus:bg-amber-600">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          About Us
        </ListItem>
        </Link>

      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/ContactUs">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white hover:bg-black hover:text-white focus:bg-amber-600">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          Contact Us
        </ListItem>
        </Link>
      </Typography>
    </List>
  );
}
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
  const { SignStatus,updateSignStatus } = useContext(UserContext)

  useEffect(() => {
    if(localStorage.SignStatus != null){
      updateSignStatus(localStorage.SignStatus)
     }
  }, []);



  
  function handleSign(){

  if(SignStatus=="signUp"){
    window.location.href = 'http://localhost:3000/SignUp';
  }else{

    Swal.fire({
      title: ` logout?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: "#ea4d24",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#ea4d24",
      icon: 'warning'
  }
  ).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
  
          Swal.fire(`  done `, '', 'success');
       
          updateSignStatus("signUp")
          localStorage.setItem("SignStatus","signUp")
      
          localStorage.removeItem("auth");
          localStorage.removeItem("roles");
          window.location.href = 'http://localhost:3000/';
      
  
      } else
          Swal.fire(' Cancelled', '', 'error')
  
  })


  }


  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="w-screen sticky top-0 z-20" style={{backgroundColor: "black" , border: "none", borderRadius:"0"}}>
      <div className="flex items-center justify-between text-white">
       
        <Typography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
           <Link to="/">
          <img src={logo} alt="logo" width={200}/>
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {/* <Link to="/SignUp">
          
          </Link> */}
          <Button onClick={()=>handleSign()} size="sm" className="bg-amber-600 hover:shadow-lg-amber-600">
            {SignStatus}
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}