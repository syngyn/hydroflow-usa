import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Residential from './pages/Residential';
import Industrial from './pages/Industrial';
import Commercial from './pages/Commercial';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Technology": Technology,
    "Products": Products,
    "Contact": Contact,
    "Residential": Residential,
    "Industrial": Industrial,
    "Commercial": Commercial,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};