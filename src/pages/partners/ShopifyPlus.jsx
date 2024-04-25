import React from "react";
import i1 from "../../assets/img/partners/shopify/shopify.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/shopify/4d0e85c0-80b4-4832-a703-9f03119bf57e.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const ShopifyPlus = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Shopify Plus
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Shopify Plus </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Shopify Plus
        </h2>
        <p className="mb-8">
          Shopify Plus is an enterprise-level e-commerce platform tailored for
          high-growth businesses. Offering scalability and flexibility, Shopify
          Plus empowers merchants with advanced features such as custom
          checkout, automation tools, and global infrastructure to handle
          increased demand. It caters to large volumes of transactions, diverse
          product catalogs, and complex business requirements. With a focus on
          ease of use, it enables rapid deployment of online stores,
          streamlining operations. Shopify Plus provides a reliable and secure
          environment, fostering innovation and seamless integration with
          third-party apps. As a fully hosted solution, it alleviates
          infrastructure concerns, allowing businesses to concentrate on
          expanding their online presence and sales.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Features
                </h2>
                <p className="mb-8">
                  Shopify Plus offers robust features for enterprise-level
                  e-commerce. Its custom checkout enables tailored user
                  experiences, and automation tools enhance efficiency. The
                  platform handles high volumes of transactions, supports
                  extensive product catalogs, and accommodates complex business
                  needs. With global infrastructure, it ensures reliability and
                  speed. Shopify Plus facilitates rapid store deployment,
                  allowing businesses to scale quickly. The platform is fully
                  hosted, eliminating infrastructure worries. Advanced security
                  measures safeguard sensitive data. Seamless third-party app
                  integration extends functionality. Shopify Plus prioritizes
                  user-friendly design, empowering merchants to focus on growth.
                  It's a comprehensive solution for large-scale businesses
                  seeking flexibility, scalability, and a streamlined e-commerce
                  experience.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Integration
                </h2>
                <p className="mb-8">
                  Shopify Plus, the enterprise variant of Shopify, stands as a
                  premier global eCommerce platform, catering to online
                  retailers seeking unparalleled scalability, reliability, and
                  security. Tailored for high-volume enterprise brands, it
                  serves as the ideal solution for businesses aiming to expand
                  seamlessly. Renowned for its flexibility, Shopify Plus offers
                  extensive access to store code, empowering businesses with
                  customization options. The platform's commitment to excellence
                  extends to superior user support, ensuring a robust and
                  user-friendly experience. With a focus on growth, Shopify Plus
                  provides a comprehensive, secure, and flexible foundation,
                  facilitating the success of enterprises navigating the dynamic
                  landscape of online retail.
                </p>
              </div>
              <div>
                <img
                  src={i3}
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

export default ShopifyPlus;
