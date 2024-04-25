import { Routes, Route } from "react-router-dom";

// main css
import "./assets/css/index.css";

// components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Services from "./pages/services/Index";
import Products from "./pages/products/Index";
import Blogs from "./pages/blogs/Index";
// import Contact from "./pages/contact/Index";
import ComingSoon from "./pages/coming-soon/index";
import ContactArea from "./pages/contact/ContactArea";
import Platform from "./pages/platforms/universalCommerce/Platform";
import Suit from "./pages/platforms/universalCommerce/Suit";
import Embedded from "./pages/platforms/universalCommerce/Embedded";
import Celonis from "./pages/platforms/universalCommerce/Celonis";
import Dashboard from "./pages/platforms/drCommerce/Dashboard";
import Advisory from "./pages/platforms/drCommerce/Advisory";
import BuyerSupplier from "./pages/platforms/supplyStock/BuyerSupplier";
import InnovateNow from "./pages/platforms/supplyStock/InnovateNow";
import Healthcare from "./pages/platforms/liveMed/Healthcare";
import Remote from "./pages/platforms/liveMed/Remote";
import Telehealth from "./pages/platforms/liveMed/Telehealth";
import AiChatbot from "./pages/solutions/AiChatbot";
import Cloud from "./pages/solutions/Cloud";
import Commerce from "./pages/solutions/Commerce";
import DrCommerce from "./pages/solutions/DrCommerce";
import Interactive from "./pages/solutions/Interactive";
import SupplyChain from "./pages/solutions/SupplyChain";
import Professional from "./pages/services/Professional";
import Engineering from "./pages/services/Engineering";
import Managed from "./pages/services/Managed";
import MACH from "./pages/services/MACH";
import ODC from "./pages/services/ODC";
import RetailDistribution from "./pages/industry/RetailDistribution";
import Manufacturing from "./pages/industry/Manufacturing";
import Telecom from "./pages/industry/Telecom";
import Plasmic from "./pages/partners/Plasmic";
import Barvo from "./pages/partners/Barvo";
import FlutterFlow from "./pages/partners/FlutterFlow";
import Backendless from "./pages/partners/Backendless";
import Xano from "./pages/partners/Xano";
import Prismatic from "./pages/partners/Prismatic";
import Make from "./pages/partners/Make";
import Celligo from "./pages/partners/Celligo";
import Deity from "./pages/partners/Deity";
import Alumio from "./pages/partners/Alumio";
import Clients from "./pages/home/ClientsSection";
import MetaStudio from "./pages/partners/MetaStudio";
import Emporix from "./pages/partners/Emporix";
import Commercetools from "./pages/partners/Commercetools";
import Elasticpath from "./pages/partners/Elasticpath";
import Commercelayer from "./pages/partners/Commercelayer";
import Spryker from "./pages/partners/Spryker";
import Vtex from "./pages/partners/Vtex";
import ShopifyPlus from "./pages/partners/ShopifyPlus";
import BigCommerce from "./pages/partners/BigCommerce";
import SAPCommerceCloud from "./pages/partners/SAPCommerceCloud";
import SalesforceCommerceCloud from "./pages/partners/SalesforceCommerceCloud";
import AdobeCommerceCloud from "./pages/partners/AdobeCommerceCloud";
import Algolia from "./pages/partners/Algolia";
import AdvanceCommerce from "./pages/partners/AdvanceCommerce";
import Sajari from "./pages/partners/sajari";
import ElasticSearch from "./pages/partners/ElasticSearch";
import Contentful from "./pages/partners/Contentful";
import ContentStack from "./pages/partners/ContentStack";
import Strapi from "./pages/partners/strapi";
import Careers from "./pages/aboutUs/CareersNew";
// import Careers from "./pages/aboutUs/Career";
// import ContactArea from "./layout/ContatsUs";

function App() {
  return (
    <>
      <Header />

      {/* pages */}
      <main>
        <Routes>
          {/* home route */}
          <Route path="/" index element={<Home />} />

          {/* about route */}
          <Route path="/about" element={<About />} />

          {/* service route */}
          <Route path="/services" element={<Services />} />

          {/* service route */}
          <Route path="/products" element={<Products />} />

          {/* blog route */}
          <Route path="/blogs" element={<Blogs />} />

          {/* contact route */}
          {/* <Route path="/contact" element={ <Contact /> } /> */}

          {/* coming soon route */}
          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* coming soon route */}
          <Route path="/platform" element={<Platform />} />

          {/* coming soon route */}
          <Route path="/suit" element={<Suit />} />

          {/* coming soon route */}
          <Route path="/embedded" element={<Embedded />} />

          {/* coming soon route */}
          <Route path="/celonis" element={<Celonis />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/buyerSupplier" element={<BuyerSupplier />} />
          <Route path="/innovateNow" element={<InnovateNow />} />

          {/* live Med */}
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/diagnostics" element={<Remote />} />
          <Route path="/telehealth" element={<Telehealth />} />

          {/* Solutions */}
          <Route path="/AI-Chatbot" element={<AiChatbot />} />
          <Route path="/Cloud" element={<Cloud />} />
          <Route path="/Commerce" element={<Commerce />} />
          <Route path="/DrCommerce" element={<DrCommerce />} />
          <Route path="/Intractive" element={<Interactive />} />
          <Route path="/SupplyChain" element={<SupplyChain />} />

          {/* Services */}
          <Route path="/services/professional" element={<Professional />} />
          <Route path="/services/engineering" element={<Engineering />} />
          <Route path="/services/managed" element={<Managed />} />
          <Route path="/services/MachAcademy" element={<MACH />} />
          <Route path="/services/ODC" element={<ODC />} />

          {/* Industry */}
          <Route
            path="/industry/retailDistribution"
            element={<RetailDistribution />}
          />
          <Route path="/industry/manufacturing" element={<Manufacturing />} />
          <Route path="/industry/telecom" element={<Telecom />} />

          {/* Partners */}
          <Route path="/partners/plasmic" element={<Plasmic />} />
          <Route path="/partners/bravo" element={<Barvo />} />
          <Route path="/partners/flutterflow" element={<FlutterFlow />} />
          <Route path="/partners/backendless" element={<Backendless />} />
          <Route path="/partners/xano" element={<Xano />} />
          <Route path="/partners/prismatic" element={<Prismatic />} />
          <Route path="/partners/alumio" element={<Alumio />} />
          <Route path="/partners/make" element={<Make />} />
          <Route path="/partners/celligo" element={<Celligo />} />
          <Route path="/partners/powerapps" element={<Deity />} />
          <Route path="/partners/metastudio" element={<FlutterFlow />} />
          <Route path="/partners/deity" element={<Deity />} />
          <Route path="/partners/metastudios" element={<MetaStudio />} />
          <Route path="/partners/emporix" element={<Emporix />} />
          <Route path="/partners/commercetools" element={<Commercetools />} />
          <Route path="/partners/elasticpath" element={<Elasticpath />} />
          <Route path="/partners/commercelayer" element={<Commercelayer />} />
          <Route path="/partners/spryker" element={<Spryker />} />
          <Route path="/partners/VTEX" element={<Vtex />} />
          <Route path="/partners/shopifyplus" element={<ShopifyPlus />} />
          <Route path="/partners/bigcommerce" element={<BigCommerce />} />
          <Route path="/partners/SAPcommerce" element={<SAPCommerceCloud />} />
          <Route
            path="/partners/salesforceCommerce"
            element={<SalesforceCommerceCloud />}
          />
          <Route
            path="/partners/adobeCommerceCloud"
            element={<AdobeCommerceCloud />}
          />
          <Route path="/partners/algolia" element={<Algolia />} />
          <Route
            path="/partners/advanceCommerce"
            element={<AdvanceCommerce />}
          />
          <Route path="/partners/sajari" element={<Sajari />} />
          <Route path="/partners/elasticsearch" element={<ElasticSearch />} />
          <Route path="/partners/contentful" element={<Contentful />} />
          <Route path="/partners/contentstack" element={<ContentStack />} />
          <Route path="/partners/strapi" element={<Strapi />} />

          {/* About Us */}
          <Route path="/aboutUS/Careers" element={<Careers />} />
          <Route path="/contact" element={<ContactArea />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
