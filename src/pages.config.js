import Agriculture from './pages/Agriculture';
import Bio from './pages/Bio';
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
import KnowledgeBase from './pages/KnowledgeBase';
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
import TermsOfService from './pages/TermsOfService';
import Warranty from './pages/Warranty';
import WaterHardnessMap from './pages/WaterHardnessMap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import About from './pages/About';
import BlogDetail from './pages/BlogDetail';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Agriculture": Agriculture,
    "Bio": Bio,
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
    "KnowledgeBase": KnowledgeBase,
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
    "TermsOfService": TermsOfService,
    "Warranty": Warranty,
    "WaterHardnessMap": WaterHardnessMap,
    "PrivacyPolicy": PrivacyPolicy,
    "FAQ": FAQ,
    "About": About,
    "BlogDetail": BlogDetail,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};