import React from "react";
import i1 from "../../assets/img/partners/bigcommerce/02979919-975f-4f11-9430-6e191b112c41.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/bigcommerce/58e2f259-e0ee-4d43-b03c-f4edb8b90e03.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const BigCommerce = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Big Commerce
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Big Commerce </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Big Commerce
        </h2>
        <p className="mb-8">
          BigCommerce is a leading e-commerce platform designed for businesses
          of all sizes. Offering a user-friendly interface and a wide range of
          features, it empowers merchants to create and manage online stores
          efficiently. BigCommerce supports diverse industries, providing
          scalability, customization, and seamless integration with popular
          third-party applications. With advanced marketing tools, responsive
          design, and secure hosting, it ensures an optimized customer
          experience. The platform is known for its flexibility, allowing
          businesses to adapt quickly to market changes. BigCommerce's
          cloud-based solution
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
                  BigCommerce excels in seamless integrations, allowing
                  merchants to enhance their e-commerce operations. The platform
                  offers a vast ecosystem of third-party applications and
                  plugins, streamlining various business functions. Integration
                  possibilities cover diverse areas such as payment gateways,
                  shipping carriers, accounting software, marketing tools, and
                  customer relationship management (CRM) systems. This
                  flexibility enables businesses to tailor their online stores
                  to specific needs. BigCommerce's API-driven architecture
                  facilitates easy integration with custom solutions, ensuring
                  adaptability.
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

export default BigCommerce;
