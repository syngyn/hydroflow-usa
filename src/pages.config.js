import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Residential from './pages/Residential';
import Industrial from './pages/Industrial';
import Commercial from './pages/Commercial';
import Agriculture from './pages/Agriculture';
import Marine from './pages/Marine';
import WaterHardnessMap from './pages/WaterHardnessMap';
import StateWaterHardness from './pages/StateWaterHardness';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
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
    "Agriculture": Agriculture,
    "Marine": Marine,
    "WaterHardnessMap": WaterHardnessMap,
    "StateWaterHardness": StateWaterHardness,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "BlogList": BlogList,
    "BlogDetail": BlogDetail,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};