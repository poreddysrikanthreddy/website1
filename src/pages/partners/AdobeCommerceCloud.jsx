import React from "react";
import i1 from "../../assets/img/partners/adobe/28dc598d-c596-42d0-9ab6-b72ee77c164c.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/adobe/2ca536e5-9b36-41d4-9109-79abee2833b1.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const AdobeCommerceCloud = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Adobe Commerce Cloud
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Adobe Commerce Cloud </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Adobe Commerce Cloud
        </h2>
        <p className="mb-8">
          Adobe Commerce Cloud, a part of the Adobe Experience Cloud, is a
          powerful e-commerce platform designed to deliver exceptional online
          shopping experiences. Formerly known as Magento Commerce, it offers
          flexibility, scalability, and a robust set of features for B2B and B2C
          businesses. With a focus on customization, Adobe Commerce Cloud
          enables merchants to create unique storefronts, seamlessly integrate
          with third-party applications, and optimize end-to-end customer
          journeys. Its cloud-based architecture ensures reliability and
          performance, while advanced marketing and analytics tools empower
          businesses to drive growth.
        </p>
        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                <img
                  src={i3}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Features Adobe Commerce Cloud
                </h2>
                <p className="mb-8">
                  Adobe Commerce Cloud, formerly Magento Commerce, boasts a
                  feature-rich platform that revolutionizes e-commerce. Offering
                  flexibility and scalability, it caters to both B2B and B2C
                  businesses. The emphasis on customization allows merchants to
                  create unique storefronts, integrating seamlessly with
                  third-party applications. The platform ensures optimal
                  end-to-end customer journeys. With a robust cloud-based
                  architecture, Adobe Commerce Cloud delivers reliability and
                  high performance. Advanced marketing tools and analytics
                  empower businesses to drive growth by optimizing marketing
                  strategies.
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
                  Adobe Commerce Cloud excels in integrations, offering a
                  seamless ecosystem for diverse business needs. The platform
                  effortlessly integrates with various third-party applications,
                  enabling businesses to enhance functionality and streamline
                  operations. Its open architecture supports easy connections
                  with payment gateways, shipping providers, ERP systems, and
                  more. Adobe Commerce Cloud's modular approach facilitates
                  integrations for marketing automation, customer relationship
                  management (CRM), and analytics tools, ensuring a tailored and
                  efficient e-commerce ecosystem. This adaptability empowers
                  merchants to create personalized and optimized experiences for
                  customers while leveraging a wide array of tools and services
                  that complement and enhance their online store operations.
                </p>
              </div>
              <div>
                <img
                  src={i1}
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

export default AdobeCommerceCloud;
