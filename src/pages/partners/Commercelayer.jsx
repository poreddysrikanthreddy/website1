import React from "react";
import i1 from "../../assets/img/partners/commercetools/2d251e74-9623-4292-80cd-db4adff26187.jpg";
import i2 from "../../assets/img/partners/commercelayer/0fb4dc48-66ce-45b6-b3e7-983fa68501f7.jpg";
import Commerce from "../solutions/Commerce";
// import i3 from "../../assets/img/universalCommerce/platform/3.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Commercelayer = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            CommerceLayer
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">CommerceLayer </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          CommerceLayer
        </h2>
        <p className="mb-8">
          CommerceLayer is a headless commerce platform designed to facilitate
          flexible and API-first e-commerce experiences. It enables businesses
          to separate the front-end presentation layer from the back-end
          commerce engine, providing agility and customization. CommerceLayer
          supports multi-currency, multi-language, and multi-country
          transactions, accommodating global operations. Its modular
          architecture allows seamless integration with various channels and
          services. The platform focuses on scalability, making it suitable for
          businesses of all sizes. With features like inventory management,
          product catalogs, and order processing, CommerceLayer empowers
          organizations to build and manage dynamic, personalized e-commerce
          solutions while leveraging a robust set of APIs for enhanced
          flexibility and innovation.
        </p>

        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                <img
                  src={i2}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Features of CommerceLayer
                </h2>
                <p className="mb-8">
                  Commerce Layer simplifies the transition to headless commerce,
                  addressing challenges faced by brands. Unlike traditional
                  methods that bind businesses to legacy stores, Commerce Layer
                  offers ready-to-use micro frontends, facilitating swift
                  creation of headless commerce sites without compromising
                  flexibility. It emphasizes a separation of commerce and
                  content, enabling developers to build scalable websites while
                  marketing teams design captivating shopping experiences. The
                  platform boasts a flexible data model based on Markets,
                  streamlining international expansion and diverse business
                  models.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Commercelayer;
