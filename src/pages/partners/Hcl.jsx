import React from "react";
import i1 from "../../assets/img/partners/hcl/6694a18c-883a-4c14-8087-183203a3f0c4.jpg";
import i2 from "../../assets/img/partners/hcl/99c4d73b-79db-4b74-b513-6c1f6348ef92.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Hcl = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            HCL commerce
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">HCL Commerce </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          HCL commerce
        </h2>
        <p className="mb-8">
          The trajectory of our economy and technology extends beyond mere
          digitization; it's transitioning to Digital+. Digital+ represents a
          comprehensive enterprise business software ecosystem, featuring
          seamlessly integrated technology platforms. Within this dynamic
          landscape, a rapidly evolving hyperconnected environment emerges,
          emphasizing the pivotal role of technology, particularly software. In
          this realm, technology acts as the linchpin, fostering enhanced
          connectivity between individuals and organizations. This
          interconnectedness facilitates improved and secure collaboration,
          communication, and overall business operations. Digital+ signifies a
          future where technology goes beyond mere digitalization, becoming the
          driving force that propels us towards more efficient, safer, and
          advanced ways of working and conducting business.
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
                  Features of HCL Commerce
                </h2>
                <p className="mb-8">
                  Revolutionize your customer experience with a cutting-edge,
                  headless e-commerce platform tailored to meet all your
                  commerce requirements. Our clients propel innovation,
                  achieving more in less time, unlocking unprecedented growth,
                  higher ROI, and accelerated innovation while mitigating
                  business risks. Harnessing the reliable scale, security, and
                  performance you demand, HCL Commerce Cloud offers the agility
                  and speed of a modern, cloud-native, and extensible commerce
                  architecture. With two decades of unmatched omnichannel
                  innovation, clients benefit from a robust foundation that
                  seamlessly integrates into their operations, ensuring a
                  future-proof solution that adapts to evolving market dynamics
                  for sustained success.
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
                  HCL Commerce, a robust e-commerce platform, facilitates
                  seamless integrations to enhance the overall functionality and
                  performance of online businesses. It supports integrations
                  with various systems, services, and third-party applications,
                  enabling a comprehensive and tailored e-commerce ecosystem.
                  These integrations cover areas such as payment gateways,
                  shipping services, customer relationship management (CRM)
                  tools, analytics platforms, and more. HCL Commerce's flexible
                  and extensible architecture allows businesses to connect and
                  synchronize data between different software components,
                  ensuring a cohesive and efficient operation.
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

export default Hcl;
