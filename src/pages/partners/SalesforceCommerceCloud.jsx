import React from "react";
import i1 from "../../assets/img/partners/salesforce/29146c22-d3cc-4207-9845-983833583e4e.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/salesforce/72a487c8-e6cb-4187-b728-6737c3a415f0.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const SalesforceCommerceCloud = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Salesforce Commerce Cloud
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Salesforce Commerce Cloud</a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Salesforce Commerce Cloud
        </h2>
        <p className="mb-8">
          Salesforce Commerce Cloud, part of the Salesforce Customer 360
          platform, is a leading cloud-based e-commerce solution. It empowers
          businesses to create personalized, seamless, and scalable shopping
          experiences across various digital channels. With a robust set of
          features, including AI-driven personalization, omnichannel
          capabilities, and order management, Salesforce Commerce Cloud caters
          to B2B and B2C needs. The platform prioritizes agility, enabling quick
          adaptation to market changes. It integrates seamlessly with other
          Salesforce products, fostering a unified approach to customer
          engagement.
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
                  Features of Salesforce Commerce Cloud
                </h2>
                <p className="mb-8">
                  Salesforce Commerce Cloud offers a comprehensive set of
                  features for unparalleled e-commerce experiences. With
                  AI-driven personalization, businesses can tailor customer
                  interactions for maximum impact. The platform ensures seamless
                  omnichannel capabilities, allowing for consistent experiences
                  across various touchpoints. Robust order management
                  facilitates efficient processes. Salesforce Commerce Cloud
                  caters to both B2B and B2C needs, supporting diverse business
                  models. Its agility enables quick adaptation to market
                  changes. The platform integrates seamlessly with other
                  Salesforce products, creating a unified ecosystem for customer
                  engagement.
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
                  Salesforce Commerce Cloud encompasses a rich array of features
                  to elevate e-commerce experiences. AI-driven personalization
                  ensures tailored customer interactions, enhancing engagement.
                  The platform excels in delivering seamless omnichannel
                  experiences, guaranteeing consistency across diverse
                  touchpoints. Robust order management streamlines processes for
                  operational efficiency. Addressing both B2B and B2C
                  requirements, it accommodates diverse business models. The
                  platform's agility allows businesses to swiftly adapt to
                  dynamic market conditions. Seamless integration with other
                  Salesforce products creates a unified ecosystem, fostering
                  comprehensive customer engagement.
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

export default SalesforceCommerceCloud;
