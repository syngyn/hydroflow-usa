/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
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
import Expectations from './pages/Expectations';
import FAQ from './pages/FAQ';
import Filtration from './pages/Filtration';
import FiltrationTechnology from './pages/FiltrationTechnology';
import GroundwaterTemperatureMap from './pages/GroundwaterTemperatureMap';
import Home from './pages/Home';
import Industrial from './pages/Industrial';
import KnowledgeBase from './pages/KnowledgeBase';
import Marine from './pages/Marine';
import PerformanceWithTime from './pages/PerformanceWithTime';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductHMRange from './pages/ProductHMRange';
import ProductHS40 from './pages/ProductHS40';
import ProductIRange from './pages/ProductIRange';
import ProductPearl from './pages/ProductPearl';
import ProductPearlPlus from './pages/ProductPearlPlus';
import ProductQuiz from './pages/ProductQuiz';
import Products from './pages/Products';
import Residential from './pages/Residential';
import Scale from './pages/Scale';
import StateTemperature from './pages/StateTemperature';
import StateWaterHardness from './pages/StateWaterHardness';
import Technology from './pages/Technology';
import TermsOfService from './pages/TermsOfService';
import Warranty from './pages/Warranty';
import WaterHardnessMap from './pages/WaterHardnessMap';
import CoolingTowers from './pages/CoolingTowers';
import WastewaterStruvite from './pages/WastewaterStruvite';
import FoodBeverage from './pages/FoodBeverage';
import PlasticManufacturing from './pages/PlasticManufacturing';
import DroughtMitigation from './pages/DroughtMitigation';
import ProtectiveEnclosure from './pages/ProtectiveEnclosure';
import PowerGeneration from './pages/PowerGeneration';
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
    "Expectations": Expectations,
    "FAQ": FAQ,
    "Filtration": Filtration,
    "FiltrationTechnology": FiltrationTechnology,
    "GroundwaterTemperatureMap": GroundwaterTemperatureMap,
    "Home": Home,
    "Industrial": Industrial,
    "KnowledgeBase": KnowledgeBase,
    "Marine": Marine,
    "PerformanceWithTime": PerformanceWithTime,
    "PrivacyPolicy": PrivacyPolicy,
    "ProductHMRange": ProductHMRange,
    "ProductHS40": ProductHS40,
    "ProductIRange": ProductIRange,
    "ProductPearl": ProductPearl,
    "ProductPearlPlus": ProductPearlPlus,
    "ProductQuiz": ProductQuiz,
    "Products": Products,
    "Residential": Residential,
    "Scale": Scale,
    "StateTemperature": StateTemperature,
    "StateWaterHardness": StateWaterHardness,
    "Technology": Technology,
    "TermsOfService": TermsOfService,
    "Warranty": Warranty,
    "WaterHardnessMap": WaterHardnessMap,
    "CoolingTowers": CoolingTowers,
    "WastewaterStruvite": WastewaterStruvite,
    "FoodBeverage": FoodBeverage,
    "PlasticManufacturing": PlasticManufacturing,
    "DroughtMitigation": DroughtMitigation,
    "ProtectiveEnclosure": ProtectiveEnclosure,
    "PowerGeneration": PowerGeneration,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};