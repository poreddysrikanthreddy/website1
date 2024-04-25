import React from "react";
import i1 from "../../assets/img/partners/hybris/f27f9b18-8ef7-4e4f-abae-0d824ea3645d.jpg";
import i2 from "../../assets/img/partners/hybris/155e20ac-2f2d-485d-97d3-abdb3434ed2b.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const SAP = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            SAP / Hybris
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">SAP </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          SAP / Hybris
        </h2>
        <p className="mb-8">
          Hybris, a proven leader in e-commerce and digital marketing solutions,
          has evolved into SAP Commerce Cloud, seamlessly integrated into the
          SAP Customer Experience portfolio. This robust, cloud-based platform
          offers a comprehensive suite of tools for online businesses. With a
          legacy of industry success, SAP Commerce Cloud provides a scalable and
          flexible solution, empowering enterprises to create engaging customer
          experiences. Leveraging the latest advancements in technology, this
          integrated platform facilitates streamlined e-commerce operations and
          effective digital marketing strategies. Businesses can now benefit
          from the trusted Hybris capabilities within the broader SAP ecosystem,
          ensuring a powerful and cohesive customer experience across the entire
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
                  Features
                </h2>
                <p className="mb-8">
                  SAP Hybris, now part of SAP Customer Experience, offers a
                  comprehensive suite of e-commerce and digital marketing
                  solutions. Its features include robust customer experience
                  management, personalized content delivery, and seamless
                  omnichannel commerce capabilities. The platform supports B2B
                  and B2C business models, providing efficient order management,
                  flexible product information management, and integrated
                  marketing tools. With cloud-based architecture, SAP Hybris
                  ensures scalability, security, and adaptability. Advanced
                  analytics and reporting empower data-driven decision-making,
                  while AI-driven insights enhance customer engagement. The
                  platform's modular structure allows for easy customization,
                  making it a versatile solution for businesses aiming to
                  optimize and elevate their online presence.
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
                  SAP Hybris integrates seamlessly into diverse business
                  ecosystems, supporting interoperability with various systems
                  and applications. Its robust integration capabilities
                  encompass CRM systems, ERP solutions, payment gateways,
                  shipping services, and third-party applications. By
                  facilitating bidirectional data flow, Hybris ensures a
                  synchronized and streamlined operation. Its flexibility
                  enables businesses to connect with existing infrastructure,
                  enhancing efficiency and reducing silos. The platform's open
                  architecture supports API integrations, enabling a tailored
                  approach to meet specific business needs. Whether integrating
                  with SAP solutions or external tools, SAP Hybris provides a
                  cohesive, scalable, and adaptable framework, optimizing
                  processes and delivering a unified experience across the
                  entire business landscape.
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

export default SAP;
