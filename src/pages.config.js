import About from './pages/About';
import Agriculture from './pages/Agriculture';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Commercial from './pages/Commercial';
import Contact from './pages/Contact';
import Filtration from './pages/Filtration';
import Home from './pages/Home';
import Industrial from './pages/Industrial';
import Marine from './pages/Marine';
import Products from './pages/Products';
import Residential from './pages/Residential';
import StateWaterHardness from './pages/StateWaterHardness';
import Technology from './pages/Technology';
import WaterHardnessMap from './pages/WaterHardnessMap';
import ProductPearl from './pages/ProductPearl';
import ProductPearlPlus from './pages/ProductPearlPlus';
import ProductHS40 from './pages/ProductHS40';
import ProductIRange from './pages/ProductIRange';
import ProductHMRange from './pages/ProductHMRange';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Agriculture": Agriculture,
    "BlogDetail": BlogDetail,
    "BlogList": BlogList,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "Commercial": Commercial,
    "Contact": Contact,
    "Filtration": Filtration,
    "Home": Home,
    "Industrial": Industrial,
    "Marine": Marine,
    "Products": Products,
    "Residential": Residential,
    "StateWaterHardness": StateWaterHardness,
    "Technology": Technology,
    "WaterHardnessMap": WaterHardnessMap,
    "ProductPearl": ProductPearl,
    "ProductPearlPlus": ProductPearlPlus,
    "ProductHS40": ProductHS40,
    "ProductIRange": ProductIRange,
    "ProductHMRange": ProductHMRange,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};