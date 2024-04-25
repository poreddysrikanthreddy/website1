import React from "react";
import i1 from "../../assets/img/partners/Demandware/10a428f9-a66d-4258-b146-350970846803.jpg";
import i2 from "../../assets/img/partners/Demandware/e912929f-68a1-4343-bace-ddaafc9d0642.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Demandware = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Salesforce / Demandware
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Demandware </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Salesforce / Demandware
        </h2>
        <p className="mb-8">
          Salesforce Commerce Cloud, formerly known as Demandware, is a robust
          e-commerce platform offering scalable solutions for businesses. As
          part of the Salesforce ecosystem, it seamlessly integrates with
          Salesforce CRM, providing a unified approach to customer engagement.
          This cloud-based platform empowers retailers with features like
          comprehensive order management, responsive design for various devices,
          and AI-driven personalization. Salesforce Commerce Cloud simplifies
          complex e-commerce operations, enabling businesses to create seamless,
          personalized customer experiences. With its global scalability,
          security, and flexibility, it caters to diverse retail needs,
          fostering growth and innovation in the rapidly evolving digital
          commerce landscape.
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
                  Features of Demandware
                </h2>
                <p className="mb-8">
                  Salesforce Commerce Cloud, formerly Demandware, offers a
                  feature-rich e-commerce solution. Its robust platform provides
                  omnichannel capabilities, responsive design, and AI-driven
                  personalization for enhanced customer experiences. Seamless
                  integration with Salesforce CRM ensures unified customer
                  engagement. The platform supports comprehensive order
                  management, facilitating efficient inventory and fulfillment
                  processes. Advanced analytics and reporting empower
                  data-driven decision-making. Its cloud-based architecture
                  ensures global scalability, security, and flexibility. With
                  built-in features like A/B testing, merchandising tools, and
                  marketing automation.
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
                  Salesforce Commerce Cloud, formerly Demandware, seamlessly
                  integrates with various business systems, fostering a unified
                  and connected commerce ecosystem. Through its open and
                  extensible architecture, it supports API integrations,
                  enabling streamlined connectivity with CRM tools, ERP
                  solutions, payment gateways, and third-party applications.
                  This interoperability ensures real-time data exchange and
                  synchronization, enhancing operational efficiency and agility.
                  The platform's adaptability allows businesses to tailor
                  integrations to their specific needs, facilitating a cohesive
                  technological infrastructure. Salesforce Commerce Cloud's
                  integration capabilities empower businesses to leverage the
                  full spectrum of Salesforce features while connecting
                  seamlessly with external tools, creating a holistic and
                  efficient digital commerce environment.
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

export default Demandware;
