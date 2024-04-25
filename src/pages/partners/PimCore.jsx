import React from "react";
import i1 from "../../assets/img/partners/pimcore/0deb5cbc-1677-45cd-8c7c-67159c277a8b.jpg";
import i2 from "../../assets/img/partners/pimcore/a717d6fa-7f26-4e30-8448-825b61e42e93.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Prismic = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            PimCore
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">PimCore </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          PimCore
        </h2>
        <p className="mb-8">
          Pimcore is a robust open-source Product Information Management (PIM)
          and Master Data Management (MDM) platform. It offers a comprehensive
          set of features for centralized product data management, including
          advanced data modeling, real-time collaboration, and workflow
          automation. Pimcore's flexible architecture accommodates various data
          types, supporting diverse product information. With powerful digital
          asset management capabilities, it ensures effective handling of
          multimedia content. The platform facilitates multi-channel publishing,
          enabling consistent product information across touchpoints. Pimcore's
          API-driven approach allows seamless integrations with eCommerce
          systems and other applications. Its user-friendly interface, coupled
          with a customizable data schema, provides scalability for enterprises
          seeking efficient and centralized product data management.
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
                  Features of PimCore
                </h2>
                <p className="mb-8">
                  Pimcore excels in integrations, offering seamless connectivity
                  with a variety of systems to enhance its capabilities as a
                  Product Information Management (PIM) and Master Data
                  Management (MDM) platform. Its API-driven architecture enables
                  effortless integration with eCommerce platforms, enabling a
                  unified approach to product data across channels. Pimcore
                  supports connectors for popular third-party applications,
                  facilitating streamlined workflows. Its versatility extends to
                  integration with Content Management Systems (CMS), Customer
                  Relationship Management (CRM) tools, and other
                  business-critical systems. This comprehensive integration
                  ecosystem ensures that Pimcore seamlessly fits into existing
                  technology stacks, providing enterprises with a flexible and
                  scalable solution for centralized product information
                  management.
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
                  Pimcore stands out in integrations, fostering a versatile
                  connectivity environment for its Product Information
                  Management (PIM) and Master Data Management (MDM)
                  capabilities. Its API-first design facilitates smooth
                  integration with eCommerce platforms, ensuring synchronized
                  and enriched product data across channels. Pimcore supports
                  connectors for popular third-party applications, streamlining
                  workflows and enhancing data interoperability. Notably, it
                  seamlessly integrates with Content Management Systems (CMS),
                  Customer Relationship Management (CRM) tools, and other
                  enterprise applications, creating a unified data ecosystem.
                  This adaptability ensures Pimcore effortlessly aligns with
                  diverse technology stacks, providing enterprises with a
                  powerful and extensible solution for centralized and
                  synchronized management of their product information.
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

export default Prismic;
