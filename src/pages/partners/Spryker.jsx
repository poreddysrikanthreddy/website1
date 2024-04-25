import React from "react";
import i1 from "../../assets/img/partners/spryker/53fb30e0-050d-4105-8196-107f624d68ce.jpg";
import i2 from "../../assets/img/partners/spryker/bca29af6-5f27-4537-88cd-c7ef85bd09dd.jpg";
import i3 from "../../assets/img/partners/spryker/bca29af6-5f27-4537-88cd-c7ef85bd09dd.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Spryker = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Spryker
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Spryker </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Spryker
        </h2>
        <p className="mb-8">
          Spryker enables companies to create winning transactional business
          models in B2B, Enterprise Marketplaces, Unified Commerce and B2C. It
          is the most modern cloud native platform-as-a-service solution with
          over 100% year-over-year growth, headless, API based,
          enterprise-ready, and it's loved by Sales, Marketeers, and Developers
          worldwide. Spryker is built out of true innovation to create the most
          flexible and agile commerce software on the market. This requires a
          special mindset, relentless human effort, and lots of collaboration
          within our team, which we proudly call “our herd.” An international
          team of unique “Sprykees” is the reason for our catching spirit!
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
                  Features of Spryker
                </h2>
                <p className="mb-8">
                  Spryker offers versatile solutions for businesses seeking to
                  enhance their operations. Transform your existing platform
                  into a robust Enterprise Marketplace or build a scalable one
                  from the ground up. Whether your requirements are complex or
                  sophisticated, Spryker seamlessly caters to all B2B needs,
                  ensuring effortless adaptability. Embrace the opportunities
                  presented by the expanding IoT ecosystem through Spryker's
                  specialized IoT integrations. Achieve a consolidated and
                  unified approach across all channels with Spryker Unified
                  Commerce, providing a single source of truth for your commerce
                  operations. Explore Spryker's diverse offerings to elevate
                  your business in the evolving landscape of enterprise, B2B,
                  IoT, and unified commerce.
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
                  Itegration
                </h2>
                <p className="mb-8">
                  Discover the comprehensive solutions offered by Spryker,
                  ranging from transforming your platform into an Enterprise
                  Marketplace to addressing sophisticated B2B needs. Whether
                  building from scratch or evolving an existing setup, Spryker
                  adapts effortlessly to diverse business requirements.
                  Seamlessly integrate with the rapidly expanding IoT ecosystem
                  through specialized integrations, and unify your channels with
                  Spryker Unified Commerce for a singular source of commerce
                  truth. Spryker's flexibility ensures that businesses can
                  navigate the evolving landscapes of enterprise, B2B, IoT, and
                  unified commerce. Explore the possibilities with Spryker's
                  diverse offerings, empowering businesses to thrive in the
                  digital commerce realm.
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

export default Spryker;
