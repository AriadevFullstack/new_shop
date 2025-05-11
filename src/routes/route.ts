import {createBrowserRouter} from "react-router";
import  Home  from "../pages/Home.page"
  
export  let router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      
    },
  ]);