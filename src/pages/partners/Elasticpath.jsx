import React from "react";
import i1 from "../../assets/img/partners/elasticpath/elasticpath.jpg";
import i2 from "../../assets/img/partners/metastudio/d40705d1-7616-46b4-be3a-0ffae2633de5.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Elasticpath = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Elasticpath
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Elasticpath </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Elasticpath
        </h2>
        <p className="mb-8">
          Elastic Path is an e-commerce platform that provides flexible and
          scalable solutions for creating personalized and connected commerce
          experiences. Known for its headless commerce approach, Elastic Path
          enables businesses to decouple the front-end customer experience from
          the back-end infrastructure, allowing for seamless integration with
          various digital touchpoints. This platform empowers organizations to
          adapt quickly to evolving market demands, optimize customer journeys,
          and deliver dynamic, API-driven commerce solutions. With a focus on
          agility and innovation, Elastic Path helps businesses build and manage
          unique, tailored e-commerce experiences to drive customer engagement
          and loyalty.
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
                  Elastic Path seamlessly integrates with a variety of
                  third-party tools and services to enhance its capabilities. It
                  supports popular content management systems like WordPress and
                  Drupal, ensuring a cohesive digital experience. Payment
                  gateways such as Stripe and PayPal integrate effortlessly,
                  facilitating secure transactions. CRM integrations, including
                  Salesforce and HubSpot, enable businesses to synchronize
                  customer data for personalized interactions. Additionally,
                  Elastic Path integrates with marketing automation platforms
                  like Marketo and email services like Mailchimp for targeted
                  campaigns. With versatile API connectivity, businesses can
                  easily link their e-commerce operations with an array of
                  applications, fostering a connected and streamlined ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Elasticpath;
