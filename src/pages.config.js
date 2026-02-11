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
import AgricultureFarming from './pages/AgricultureFarming';
import AgricultureLandscaping from './pages/AgricultureLandscaping';
import Bio from './pages/Bio';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import Cart from './pages/Cart';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Checkout from './pages/Checkout';
import Commercial from './pages/Commercial';
import Contact from './pages/Contact';
import CoolingTowers from './pages/CoolingTowers';
import Corrosion from './pages/Corrosion';
import DroughtMitigation from './pages/DroughtMitigation';
import ESCO from './pages/ESCO';
import Expectations from './pages/Expectations';
import FAQ from './pages/FAQ';
import FilterCartridges from './pages/FilterCartridges';
import FilterHousings from './pages/FilterHousings';
import Filtration from './pages/Filtration';
import FiltrationTechnology from './pages/FiltrationTechnology';
import FoodBeverage from './pages/FoodBeverage';
import GroundwaterTemperatureMap from './pages/GroundwaterTemperatureMap';
import Home from './pages/Home';
import Industrial from './pages/Industrial';
import KnowledgeBase from './pages/KnowledgeBase';
import Marine from './pages/Marine';
import PerformanceWithTime from './pages/PerformanceWithTime';
import PlasticManufacturing from './pages/PlasticManufacturing';
import PowerGeneration from './pages/PowerGeneration';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductActivatedCarbon10 from './pages/ProductActivatedCarbon10';
import ProductActivatedCarbon20 from './pages/ProductActivatedCarbon20';
import ProductFilterHousing10 from './pages/ProductFilterHousing10';
import ProductFilterHousing20 from './pages/ProductFilterHousing20';
import ProductForceField10 from './pages/ProductForceField10';
import ProductHMRange from './pages/ProductHMRange';
import ProductHS40 from './pages/ProductHS40';
import ProductPearl from './pages/ProductPearl';
import ProductPearlPlus from './pages/ProductPearlPlus';
import ProductQuiz from './pages/ProductQuiz';
import ProductSediment20 from './pages/ProductSediment20';
import Products from './pages/Products';
import ProtectiveEnclosure from './pages/ProtectiveEnclosure';
import RemovedContentPage from './pages/RemovedContentPage';
import Residential from './pages/Residential';
import Savings from './pages/Savings';
import Scale from './pages/Scale';
import StateTemperature from './pages/StateTemperature';
import StateWaterHardness from './pages/StateWaterHardness';
import Support from './pages/Support';
import Technology from './pages/Technology';
import TermsOfService from './pages/TermsOfService';
import VideoLibrary from './pages/VideoLibrary';
import Warranty from './pages/Warranty';
import WastewaterStruvite from './pages/WastewaterStruvite';
import WaterHardnessMap from './pages/WaterHardnessMap';
import ProductIRange from './pages/ProductIRange';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Agriculture": Agriculture,
    "AgricultureFarming": AgricultureFarming,
    "AgricultureLandscaping": AgricultureLandscaping,
    "Bio": Bio,
    "BlogDetail": BlogDetail,
    "BlogList": BlogList,
    "Cart": Cart,
    "CaseStudies": CaseStudies,
    "CaseStudyDetail": CaseStudyDetail,
    "Checkout": Checkout,
    "Commercial": Commercial,
    "Contact": Contact,
    "CoolingTowers": CoolingTowers,
    "Corrosion": Corrosion,
    "DroughtMitigation": DroughtMitigation,
    "ESCO": ESCO,
    "Expectations": Expectations,
    "FAQ": FAQ,
    "FilterCartridges": FilterCartridges,
    "FilterHousings": FilterHousings,
    "Filtration": Filtration,
    "FiltrationTechnology": FiltrationTechnology,
    "FoodBeverage": FoodBeverage,
    "GroundwaterTemperatureMap": GroundwaterTemperatureMap,
    "Home": Home,
    "Industrial": Industrial,
    "KnowledgeBase": KnowledgeBase,
    "Marine": Marine,
    "PerformanceWithTime": PerformanceWithTime,
    "PlasticManufacturing": PlasticManufacturing,
    "PowerGeneration": PowerGeneration,
    "PrivacyPolicy": PrivacyPolicy,
    "ProductActivatedCarbon10": ProductActivatedCarbon10,
    "ProductActivatedCarbon20": ProductActivatedCarbon20,
    "ProductFilterHousing10": ProductFilterHousing10,
    "ProductFilterHousing20": ProductFilterHousing20,
    "ProductForceField10": ProductForceField10,
    "ProductHMRange": ProductHMRange,
    "ProductHS40": ProductHS40,
    "ProductPearl": ProductPearl,
    "ProductPearlPlus": ProductPearlPlus,
    "ProductQuiz": ProductQuiz,
    "ProductSediment20": ProductSediment20,
    "Products": Products,
    "ProtectiveEnclosure": ProtectiveEnclosure,
    "RemovedContentPage": RemovedContentPage,
    "Residential": Residential,
    "Savings": Savings,
    "Scale": Scale,
    "StateTemperature": StateTemperature,
    "StateWaterHardness": StateWaterHardness,
    "Support": Support,
    "Technology": Technology,
    "TermsOfService": TermsOfService,
    "VideoLibrary": VideoLibrary,
    "Warranty": Warranty,
    "WastewaterStruvite": WastewaterStruvite,
    "WaterHardnessMap": WaterHardnessMap,
    "ProductIRange": ProductIRange,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};