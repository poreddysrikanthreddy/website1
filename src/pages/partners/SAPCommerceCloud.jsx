import React from "react";
import i1 from "../../assets/img/partners/SAP/e0d396a2-49c5-4291-88b3-4213183e988b.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/SAP/f260e885-cf87-4bff-bdf5-f5b3d93129d9.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const SAPCommerceCloud = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            SAP Commerce Cloud
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">SAP Commerce Cloud </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          SAP Commerce Cloud
        </h2>
        <p className="mb-8">
          SAP Commerce Cloud is an omnichannel e-commerce solution designed by
          SAP, a global leader in enterprise software. This cloud-based platform
          integrates seamlessly with SAP's business suite, offering a
          comprehensive set of tools for managing digital commerce. SAP Commerce
          Cloud empowers businesses with features like product content
          management, personalized customer experiences, and advanced order
          management. It supports B2B and B2C scenarios, ensuring flexibility
          and scalability. With real-time analytics, omnichannel capabilities,
          and a modular architecture, SAP Commerce Cloud enables businesses to
          adapt to market changes, optimize operations, and deliver a unified
          and personalized shopping experience across various touchpoints.
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
                  Features
                </h2>
                <p className="mb-8">
                  SAP Commerce Cloud prioritizes one-to-one customer engagement,
                  leveraging real-time insights and AI to cater to individual
                  preferences throughout the online buying journey. It ensures
                  personalized experiences through compelling storefront
                  encounters, integrating one-to-one recommendations and
                  real-time merchandising. The platform employs AI and machine
                  learning to enhance customer conversion, automatically
                  maximizing conversions based on behavior-based
                  recommendations. Businesses benefit from a maximized return on
                  investment through features like "A/B" testing and real-time
                  algorithms, optimizing strategies to achieve and exceed
                  business targets. SAP Commerce Cloud thus provides a holistic
                  approach, utilizing cutting-edge technology for dynamic and
                  tailored customer interactions that drive successful outcomes.
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
                  SAP Commerce presents diverse integration solutions for
                  seamless collaboration with other SAP applications and
                  services. Utilizing integration tools, users can swiftly
                  configure Context-Driven Services applications or facilitate
                  the exchange of master data with SAP back-end systems via
                  Integration APIs linked to the SAP Business Technology
                  Platform. For efficient data import and export, the platform
                  incorporates ImpEx. Furthermore, SAP Commerce offers pre-built
                  integrations for Context-Driven Services, connecting to
                  data-driven applications like Merchandising and Segmentation.
                  Complementing these are foundational tools like the
                  Integration API module and Data Hub, supporting master data
                  integration
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

export default SAPCommerceCloud;
