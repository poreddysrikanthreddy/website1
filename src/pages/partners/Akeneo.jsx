import React from "react";
import i1 from "../../assets/img/partners/akeneo/7ffd32b1-b59e-4257-afd2-ed431e4f54d8.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/akeneo/d4e5a55b-1b08-44ad-9549-07b2d6c7956b.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Akeneo = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Akeneo
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Akeneo </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Akeneo
        </h2>
        <p className="mb-8">
          Akeneo is a leading Product Information Management (PIM) platform,
          empowering businesses to efficiently manage and optimize product data.
          Its open-source and user-friendly interface facilitate centralized
          data storage, ensuring consistency and accuracy across multiple
          channels. Akeneo simplifies product information workflows with
          features like dynamic data modeling, versioning, and localization. The
          platform supports seamless collaboration among teams, streamlining the
          process of enriching and distributing product information. Akeneo's
          API-centric architecture allows integrations with eCommerce platforms
          and other business applications. With a focus on scalability and
          flexibility, Akeneo is an ideal solution for enterprises seeking a
          comprehensive PIM solution to enhance product data management.
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
                  Features of Akeneo
                </h2>
                <p className="mb-8">
                  Akeneo, a leading Product Information Management (PIM)
                  platform, offers a robust feature set for efficient product
                  data management. Its dynamic data modeling ensures flexible
                  and structured information representation. Akeneo simplifies
                  collaboration with versioning, workflow management, and
                  localization capabilities, streamlining the enrichment and
                  distribution of product information. The platform supports
                  comprehensive data quality and completeness checks, ensuring
                  accuracy. Akeneo's user-friendly interface enables intuitive
                  navigation for content creators. Its API-centric design
                  facilitates seamless integration with eCommerce systems and
                  third-party applications.
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
                  Integration with Akeneo
                </h2>
                <p className="mb-8">
                  Akeneo seamlessly integrates with diverse technologies,
                  enhancing its capabilities as a versatile Product Information
                  Management (PIM) platform. The API-centric architecture
                  ensures smooth connections with eCommerce platforms, enabling
                  synchronized and enriched product data across channels. Akeneo
                  supports connectors for popular third-party applications,
                  streamlining workflows and enhancing interoperability. Its
                  adaptability extends to integration with Content Management
                  Systems (CMS), Customer Relationship Management (CRM) tools,
                  and other enterprise applications, creating a unified data
                  ecosystem. This comprehensive integration ecosystem ensures
                  Akeneo aligns seamlessly with various technology stacks,
                  offering businesses a flexible and scalable solution for
                  centralized and synchronized management of their product
                  information.
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

export default Akeneo;
