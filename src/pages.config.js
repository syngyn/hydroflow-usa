import About from './pages/About';
import Agriculture from './pages/Agriculture';
import Bio from './pages/Bio';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import Cart from './pages/Cart';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Checkout from './pages/Checkout';
import Commercial from './pages/Commercial';
import Contact from './pages/Contact';
import Corrosion from './pages/Corrosion';
import Filtration from './pages/Filtration';
import FiltrationTechnology from './pages/FiltrationTechnology';
import GroundwaterTemperatureMap from './pages/GroundwaterTemperatureMap';
import Home from './pages/Home';
import Industrial from './pages/Industrial';
import Marine from './pages/Marine';
import ProductHMRange from './pages/ProductHMRange';
import ProductHS40 from './pages/ProductHS40';
import ProductIRange from './pages/ProductIRange';
import ProductPearl from './pages/ProductPearl';
import ProductPearlPlus from './pages/ProductPearlPlus';
import Products from './pages/Products';
import Residential from './pages/Residential';
import Scale from './pages/Scale';
import StateTemperature from './pages/StateTemperature';
import StateWaterHardness from './pages/StateWaterHardness';
import Technology from './pages/Technology';
import WaterHardnessMap from './pages/WaterHardnessMap';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Agriculture": Agriculture,
    "Bio": Bio,
    "BlogDetail": BlogDetail,
    "BlogList": BlogList,
    "Cart": Cart,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "Checkout": Checkout,
    "Commercial": Commercial,
    "Contact": Contact,
    "Corrosion": Corrosion,
    "Filtration": Filtration,
    "FiltrationTechnology": FiltrationTechnology,
    "GroundwaterTemperatureMap": GroundwaterTemperatureMap,
    "Home": Home,
    "Industrial": Industrial,
    "Marine": Marine,
    "ProductHMRange": ProductHMRange,
    "ProductHS40": ProductHS40,
    "ProductIRange": ProductIRange,
    "ProductPearl": ProductPearl,
    "ProductPearlPlus": ProductPearlPlus,
    "Products": Products,
    "Residential": Residential,
    "Scale": Scale,
    "StateTemperature": StateTemperature,
    "StateWaterHardness": StateWaterHardness,
    "Technology": Technology,
    "WaterHardnessMap": WaterHardnessMap,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};