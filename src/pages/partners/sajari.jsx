import React from "react";
import i1 from "../../assets/img/partners/sajari/48a3bf8a-f6a0-4273-8a3f-9ca1edb1381a.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/sajari/f2a2c0eb-6583-458a-b372-4c54a6386d15.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Sajari = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Sajari
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Sajari </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Sajari
        </h2>
        <p className="mb-8">
          Sajari is a comprehensive, fully-hosted site search-as-a-service
          platform, empowering businesses to effortlessly establish intelligent
          site search within minutes. Leveraging machine learning as its
          cornerstone, Sajari dynamically refines search outcomes by analyzing
          both customer and business data. It offers advanced functionalities,
          typically requiring extensive time on legacy platforms, that can be
          swiftly integrated in minutes. These features encompass autocomplete
          with typo tolerance, search analytics, relevance editing, A/B testing,
          reinforcement learning, personalization, and natural language
          processing (NLP). Sajari's innovative approach ensures efficient and
          tailored search experiences, streamlining the implementation of
          complex features for enhanced user engagement and satisfaction.
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
                  Features Advance Sajari
                </h2>
                <p className="mb-8">
                  Sajari, a cutting-edge site search-as-a-service platform,
                  boasts a plethora of advanced features designed to elevate
                  user experience and streamline search functionality. Utilizing
                  machine learning, it ensures dynamic optimization of search
                  results based on customer and business data. Notable features
                  include typo-tolerant autocomplete, robust search analytics,
                  customizable relevance editing, swift A/B testing
                  implementation, reinforcement learning capabilities,
                  personalized search experiences, and sophisticated natural
                  language processing (NLP). Sajari revolutionizes the search
                  landscape by enabling businesses to effortlessly integrate
                  these powerful functionalities in mere minutes, offering a
                  comprehensive solution for intelligent and efficient site
                  searches.
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
                  Sajari offers versatile integrations to seamlessly connect
                  with various tools and platforms, enhancing its usability
                  across diverse business ecosystems. These integrations include
                  compatibility with popular Content Management Systems (CMS)
                  such as WordPress and Magento, allowing users to integrate
                  Sajari's powerful site search capabilities with their existing
                  website infrastructure. Additionally, Sajari supports
                  integrations with e-commerce platforms like Shopify,
                  facilitating enhanced search functionality for online stores.
                  The platform also provides APIs, enabling businesses to
                  integrate Sajari into their custom applications and workflows.
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

export default Sajari;
