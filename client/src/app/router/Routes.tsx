import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AboutPage from "../components/about/AboutPage";
import Catalogue from "../components/catalogue/Catalogue";
import ProductDetails from "../components/catalogue/ProductDetails";
import ContactPage from "../components/contact/ContactPage";
import HomePage from "../components/homepage/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {path: '', element: <HomePage/>},
            {path: 'catalogue', element: <Catalogue/>},
            {path: 'catalogue/:id', element: <ProductDetails/>},
            {path: 'about', element: <AboutPage/> },
            {path: 'contact', element: <ContactPage/> },
        ]
    }
])