import React from "react";
import i1 from "../../assets/img/partners/oracle/d0f1e155-ff20-43d7-9d47-866b91248684.jpg";
import i2 from "../../assets/img/partners/oracle/bc065eed-b2c6-42fa-b897-5cc09b169421.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Oracle = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Oracle / ATG
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Oracle </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Oracle / ATG
        </h2>
        <p className="mb-8">
          The Oracle ATG Web Commerce platform, a versatile and highly
          customizable framework, serves as the foundation for all applications
          detailed in this guide, with a primary focus on developing and
          supporting e-commerce websites. Comprising multiple layers, the ATG
          platform's Dynamo Application Framework (DAF) forms the base,
          providing a JavaBeans and JavaServer Pages (JSPs) environment for
          component development. Leveraging Nucleus configuration files,
          developers assemble applications by linking component beans. The
          Personalization module (DPS) supports dynamic web content personalized
          for each user, managing user profiles and business rules.
          Additionally, the Scenarios module (DSS) extends content targeting
          capabilities through time-sensitive, event-driven campaigns. The ATG
          platform seamlessly operates on Oracle WebLogic, JBoss, or IBM
          WebSphere application servers.
        </p>
        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                <img
                  src={i1}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Features of PimCore
                </h2>
                <p className="mb-8">
                  The Oracle ATG Web Commerce platform offers a feature-rich
                  environment for e-commerce. Its highly customizable Dynamo
                  Application Framework facilitates JavaBeans and JSPs for
                  flexible component development. The Personalization module
                  (DPS) dynamically tailors web content per user through user
                  profiles and business rules. The Scenarios module (DSS)
                  enhances content targeting with time-sensitive, event-driven
                  campaigns. ATG supports robust e-commerce functionality,
                  including order management, catalog management, and pricing.
                  It integrates seamlessly with Oracle's suite of products and
                  operates on popular application servers like Oracle WebLogic,
                  JBoss, and IBM WebSphere.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Integration
                </h2>
                <p className="mb-8">
                  Oracle ATG Web Commerce seamlessly integrates with various
                  systems and technologies, ensuring a comprehensive and
                  connected e-commerce ecosystem. It facilitates
                  interoperability with Oracle's extensive suite of products,
                  enabling seamless data exchange between applications. The
                  platform supports integration with external systems such as
                  Customer Relationship Management (CRM) tools, Enterprise
                  Resource Planning (ERP) solutions, and third-party services.
                  Through its open and extensible architecture, ATG accommodates
                  API integrations, allowing businesses to tailor their
                  integrations based on specific needs.
                </p>
              </div>
              <div>
                <img
                  src={i2}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Oracle;
