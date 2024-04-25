import React from "react";
import i1 from "../../assets/img/partners/megento/d8c286f2-c535-4ec7-9672-30c2a46b33e0.jpg";
import i2 from "../../assets/img/partners/megento/125d36da-22a8-49d8-8edc-60d83fd6e7d7.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Megento = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Adobe / Megento
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Megento </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Adobe / Megento
        </h2>
        <p className="mb-8">
          Magento is a widely used open-source e-commerce platform renowned for
          its flexibility and scalability. Offering robust features, it empowers
          businesses to create customizable and high-performance online stores.
          With a modular architecture, Magento supports a vast extension
          marketplace, allowing users to enhance functionality and tailor their
          e-commerce experience. The platform provides comprehensive tools for
          product management, customer engagement, and order processing. Its
          responsive design ensures optimal performance across devices. Magento
          is highly adaptable, suitable for both small businesses and
          enterprise-level applications, making it a popular choice for those
          seeking a powerful and versatile e-commerce solution.
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
                  Features of Megento
                </h2>
                <p className="mb-8">
                  Magento is a powerful open-source e-commerce platform with
                  robust features. It offers customizable themes, extensive
                  product management, and a user-friendly admin interface. Its
                  flexibility supports various business sizes and types,
                  enabling easy integration of third-party extensions. Advanced
                  search and navigation options enhance user experience, while
                  the platform's scalability ensures growth potential. Built-in
                  marketing tools, multiple payment gateways, and mobile
                  responsiveness contribute to effective online store
                  management. Additionally, Magento provides analytics and
                  reporting features, fostering data-driven decision-making for
                  businesses.
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
                  Magento facilitates seamless integrations, connecting with
                  diverse systems for enhanced functionality. API support allows
                  integration with third-party applications, ensuring smooth
                  data flow and synchronization. Payment gateways integration
                  simplifies transactions, while shipping and logistics
                  integrations streamline order fulfillment. CRM integrations
                  enhance customer relationship management, optimizing marketing
                  and support efforts. Furthermore, Magento easily integrates
                  with various analytics tools for in-depth business insights.
                  Social media integrations foster broader reach and engagement.
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

export default Megento;
