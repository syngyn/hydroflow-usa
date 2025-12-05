import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Products from './pages/Products';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Technology": Technology,
    "Products": Products,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};