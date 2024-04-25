import React from "react";
import i1 from "../../assets/img/partners/advancecommerce/ac.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/advancecommerce/44f5f7f1-59f5-4678-8ada-20937d32b8bc.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const AdvanceCommerce = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Advance Commerce
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Advance Commerce </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Advance Commerce
        </h2>
        <p className="mb-8">
          Established by André Brown, former CEO and Founder of Attraqt,
          Advanced Commerce stands as a visionary venture, committed to
          delivering an enterprise-level merchandising platform tailored for
          small and mid-tier retailers. This innovative platform empowers
          retailers by granting them mastery over product display sequences
          through a strategic amalgamation of product and store attributes,
          strategically determining where to apply this blend. The result is a
          significant boost in conversion rates, average order values, and
          overall order volume. Moreover, Advanced Commerce contributes to the
          reduction of returns and cart abandonment rates, providing a
          comprehensive solution for retailers seeking enhanced operational
          efficiency and profitability.
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
                  Features Advance commerce
                </h2>
                <p className="mb-8">
                  In the dynamic landscape of e-commerce, businesses leverage
                  cutting-edge technologies for an enhanced shopping experience.
                  Product Site Search and Voice Search functionalities redefine
                  user interaction, ensuring seamless navigation. Integrated
                  Product Recommendations intelligently anticipate consumer
                  preferences, encouraging personalized purchases. The ability
                  to Link Multiple Stores creates a unified, streamlined
                  shopping ecosystem. Merchandising Strategies, underpinned by
                  Advanced Prioritization, optimize product visibility and drive
                  sales. The incorporation of Merchandising Concepts and
                  Templates empowers retailers with versatile tools to curate
                  compelling displays. This holistic approach not only caters to
                  consumer needs but also positions brands for sustained growth
                  in the competitive marketplace.
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
                  Advanced Commerce integrations refer to the seamless
                  incorporation of sophisticated tools and systems into an
                  e-commerce platform. This involves connecting and leveraging
                  various third-party applications, such as advanced analytics,
                  customer relationship management (CRM), ERP systems, and
                  marketing automation tools. These integrations enhance the
                  capabilities of the e-commerce platform, allowing businesses
                  to optimize operations, personalize customer experiences, and
                  gain valuable insights. With Advanced Commerce integrations,
                  businesses can streamline processes, automate tasks, and
                  deliver a more comprehensive and efficient e-commerce
                  ecosystem, ultimately fostering growth and competitiveness in
                  the dynamic digital marketplace.
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

export default AdvanceCommerce;
