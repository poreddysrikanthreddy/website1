import React from "react";
import i1 from "../../assets/img/partners/salsify/68da643f-eb5c-4b21-8366-c8f65eac1d16.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/salsify/98678b3f-c43f-410a-8fd3-d181d5d6b6e7.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Salsify = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Salsify
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Salsify </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Salsify
        </h2>
        <p className="mb-8">
          Salsify is a prominent Product Experience Management (PXM) platform,
          empowering brands to optimize product content and enhance customer
          experiences across multiple channels. With a user-friendly interface,
          Salsify facilitates efficient creation, enrichment, and syndication of
          product information. The platform supports robust digital asset
          management, dynamic data modeling, and real-time collaboration.
          Salsify's syndication capabilities ensure seamless distribution of
          accurate and consistent product data to various retail and eCommerce
          channels. As a cloud-based solution, it enables agility and
          scalability, making it a preferred choice for businesses seeking a
          comprehensive PXM platform to excel in the competitive landscape of
          digital commerce.
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
                  Features of Salsify
                </h2>
                <p className="mb-8">
                  Salsify, a leading Product Experience Management (PXM)
                  platform, offers a rich array of features for optimizing
                  product content and enhancing customer experiences. Its
                  user-friendly interface facilitates efficient creation,
                  enrichment, and syndication of product information. Salsify
                  supports dynamic data modeling, enabling flexible
                  representation of diverse product attributes. Robust digital
                  asset management ensures effective handling of multimedia
                  content. The platform's real-time collaboration tools
                  streamline workflows, while syndication capabilities enable
                  seamless distribution of accurate product data across various
                  retail and eCommerce channels.
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
                  Salsify excels in integrations, seamlessly connecting with
                  diverse technologies to enhance its Product Experience
                  Management (PXM) capabilities. The platform supports smooth
                  integration with eCommerce platforms, enabling synchronized
                  and enriched product data distribution across channels.
                  Salsify's connectors facilitate interoperability with various
                  third-party applications, including ERP systems and digital
                  marketing tools, streamlining workflows. Its adaptable API
                  architecture ensures compatibility with different data
                  sources, fostering a unified and enriched data ecosystem.
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

export default Salsify;
