import React from "react";
import i1 from "../../assets/img/partners/OMS/69eb5318-7bef-4201-8b5f-41dfd9c2a9d7.jpg";
import i2 from "../../assets/img/partners/OMS/b18b2173-ec98-49b5-8a1f-fb88652ee4fb.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const IBMSterling = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            IBM Sterling OMS & WMS
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">IBM Sterling OMS & WMS </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          IBM Sterling OMS & WMS
        </h2>
        <p className="mb-8">
          IBM Sterling Order Management System (OMS) is a comprehensive solution
          that orchestrates order fulfillment processes across multiple
          channels. It optimizes inventory visibility, order promising, and
          customer service, ensuring efficient order processing and delivery.
          IBM Sterling Warehouse Management System (WMS) complements OMS by
          managing warehouse operations, including inventory tracking, order
          picking, and shipping. Together, OMS and WMS form an integrated
          platform that enhances supply chain efficiency, improves customer
          satisfaction, and supports end-to-end order fulfillment for
          businesses, ensuring a seamless and agile approach to managing orders
          and inventory across the entire supply chain.
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
                  Features of IBM Sterling OMS & WMS
                </h2>
                <p className="mb-8">
                  Leverage advanced intelligence with AI-powered insights to
                  scale your e-commerce business and optimize fulfillment
                  operations for maximum profitability. Accelerate
                  transformation by simplifying technology complexities,
                  implementing quick solutions, and fast-tracking customer
                  experiences. Explore case studies such as JOANN Stores, which
                  enhanced resilience and customer-centricity through expanded
                  omnichannel fulfillment capabilities. Witness how Parker
                  Hannifin Corporation turned supply network complexity into a
                  competitive advantage with a global orchestration framework.
                  Hagebau, a home improvement retailer, drove higher customer
                  satisfaction with an integrated order management system.
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
                  IBM Sterling Order Management System (OMS) and Warehouse
                  Management System (WMS) seamlessly integrate to optimize
                  end-to-end supply chain operations. OMS orchestrates order
                  fulfillment processes, leveraging AI for intelligent insights
                  and scaling e-commerce. It ensures consistent, high-quality
                  customer experiences across channels. Paired with WMS, the
                  solution manages warehouse operations, enhancing inventory
                  visibility, order picking, and shipping. This integration
                  transforms supply network complexity into a competitive
                  advantage, as demonstrated by case studies like Parker
                  Hannifin Corporation.
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

export default IBMSterling;
