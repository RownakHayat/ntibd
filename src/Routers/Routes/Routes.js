import Main from "../../../src/components/layout/Main/Main";
import Blog from "../../components/pages/Blog/Blog";
import Contact from "../../components/pages/Contact/Contact";
import Home from "../../components/pages/Home/Home";
import AboutUs from "../../components/pages/AboutUs/About";
import Management from "../../components/pages/Management/Management";
import Proprietor from "../../components/pages/Proprietor/Proprietor";
import Shop from "../../components/pages/Shop/Shop";
import { createBrowserRouter } from "react-router-dom";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('https://news-potal-server.vercel.app/news')
            },
            {
                path: '/propitor',
                element: <Proprietor></Proprietor>,
                // loader: ({ params }) => fetch(`https://news-potal-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/managment',
                element: <Management></Management>
            },
            
            // {
            //     path: '/news/:id',
            //     element: <PrivetRoute><News></News></PrivetRoute>,
            //     loader: ({ params }) => fetch(`https://news-potal-server.vercel.app/news/${params.id}`)
            // },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
           
        ]
    }
])