import React from "react";
import i1 from "../../assets/img/partners/B2B/69eb5318-7bef-4201-8b5f-41dfd9c2a9d7.jpg";
import i2 from "../../assets/img/partners/B2B/cce220d2-f131-491b-8069-7abc7942a7c2.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const IBMSterlingB2B = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            IBM Sterling B2Bi
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">IBM Sterling B2Bi </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          IBM Sterling B2Bi
        </h2>
        <p className="mb-8">
          IBM Sterling B2B Integrator (B2Bi) is a comprehensive
          business-to-business integration solution facilitating seamless
          collaboration between diverse trading partners. It streamlines
          electronic document exchange, enabling secure and efficient
          communication of business transactions. Sterling B2Bi supports
          multiple data formats and communication protocols, ensuring
          compatibility across various systems. Its advanced features include
          data mapping, transformation, and real-time visibility into
          transaction status. This scalable and flexible platform helps
          organizations optimize supply chain processes, enhance partner
          connectivity, and achieve end-to-end automation. IBM Sterling B2Bi
          plays a crucial role in modernizing and enhancing the efficiency of
          B2B communications, fostering a robust and interconnected business
          ecosystem.
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
                  Features of IBM Sterling B2B
                </h2>
                <p className="mb-8">
                  IBM Sterling B2B Integrator (B2Bi) boasts a comprehensive set
                  of features designed to facilitate efficient and secure
                  business-to-business integration. The platform excels in data
                  transformation, ensuring seamless compatibility between
                  diverse data formats and systems. Real-time document tracking
                  provides organizations with visibility into the status of B2B
                  transactions, allowing for effective monitoring and
                  management. Robust security measures, including encryption and
                  authentication, guarantee the confidentiality and integrity of
                  sensitive business data, aiding in compliance with regulatory
                  requirements. With support for multiple communication
                  protocols, B2Bi enables seamless connectivity with various
                  trading partners.
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
                  IBM Sterling B2B Integrator (B2Bi) seamlessly integrates with
                  diverse systems and trading partners, offering robust features
                  for efficient business collaboration. It excels in data
                  transformation, ensuring compatibility across different
                  formats. Real-time document tracking provides visibility into
                  transaction status. Security measures, including encryption,
                  uphold data integrity and compliance. The platform supports
                  various communication protocols, enhancing connectivity.
                  Workflow automation reduces errors, accelerating transaction
                  processing. Scalability accommodates evolving integration
                  needs. Partner onboarding is simplified, fostering diverse
                  business relationships.
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

export default IBMSterlingB2B;
