import React from "react";
import i1 from "../../assets/img/partners/stibo/stibo.jpg";
import i2 from "../../assets/img/partners/stibo/39a75939-6b69-4ee3-b5d0-0f33d618baeb.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Stibo = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Stibo
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Stibo </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Stibo
        </h2>
        <p className="mb-8">
          Stibo Systems is a prominent Master Data Management (MDM) and Product
          Information Management (PIM) provider, offering a comprehensive
          platform for managing and optimizing data across enterprises. With a
          focus on data accuracy, Stibo Systems ensures consistent and reliable
          information for better decision-making. The platform's multidomain MDM
          capabilities enable organizations to centralize and harmonize data
          from various domains. Stibo Systems supports data governance, workflow
          management, and real-time collaboration, enhancing data quality and
          operational efficiency. As a trusted MDM solution, it empowers
          businesses to achieve a single, unified view of their data, fostering
          strategic insights and maximizing the value of information assets.
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
                  Features of Stibo
                </h2>
                <p className="mb-8">
                  Stibo Systems provides an extensive set of features in its
                  Master Data Management (MDM) and Product Information
                  Management (PIM) platform. Offering multidomain MDM
                  capabilities, it centralizes and harmonizes data, ensuring
                  accuracy and consistency across enterprises. Stibo facilitates
                  robust data governance with workflow management and real-time
                  collaboration, enhancing overall data quality. The platform
                  supports advanced data modeling for flexibility and
                  adaptability. With its comprehensive set of features,
                  including versioning, audit trails, and role-based access
                  control, Stibo Systems empowers organizations to manage,
                  optimize, and leverage their data strategically, fostering a
                  unified view for better decision-making and operational
                  efficiency.
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
                  Stibo Systems excels in integrations, seamlessly connecting
                  with diverse technologies to enhance its Master Data
                  Management (MDM) and Product Information Management (PIM)
                  capabilities. The platform supports seamless integration with
                  various enterprise applications, ensuring interoperability.
                  Stibo's versatile connectors enable connectivity with
                  eCommerce platforms, ERP systems, and other critical business
                  applications, facilitating synchronized data across the
                  organization. Its adaptable architecture allows for
                  integration with diverse data sources, promoting a unified and
                  enriched data ecosystem. Stibo Systems' commitment to
                  extensive integration possibilities ensures that businesses
                  can leverage its MDM and PIM functionalities within their
                  existing technology landscape for streamlined data management,
                  increased operational efficiency, and improved
                  decision-making.
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

export default Stibo;
