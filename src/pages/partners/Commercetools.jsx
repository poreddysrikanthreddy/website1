import React from "react";
import i1 from "../../assets/img/partners/commercetools/2d251e74-9623-4292-80cd-db4adff26187.jpg";
import i2 from "../../assets/img/partners/commercetools/36c27fd4-31bf-4a10-85db-ff23ac2998a4.jpg";
import Commerce from "../solutions/Commerce";
// import i3 from "../../assets/img/universalCommerce/platform/3.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Commercetools = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            CommerceTools
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">CommerceTools </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          CommerceTools
        </h2>
        <p className="mb-8">
          Commercetools is a leading cloud-based, headless commerce platform
          that empowers businesses to create unique, flexible, and scalable
          digital commerce experiences. Utilizing an API-first and microservices
          architecture, Commercetools enables seamless integration with various
          channels, devices, and touchpoints. This headless approach allows for
          unparalleled customization and agility, as businesses can adapt and
          innovate swiftly. With a focus on flexibility, Commercetools provides
          a modular and composable solution, empowering enterprises to
          orchestrate personalized and efficient commerce experiences.
        </p>

        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                <img
                  src={i2}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Features of Commercetools
                </h2>
                <p className="mb-8">
                  Craft unparalleled commerce experiences tailored to your
                  customers with the power of composable commerce. Elevate your
                  brand's uniqueness as global leaders, including Sephora and
                  Audi, demonstrate the art of delivering personalized,
                  meaningful shopping journeys. Dive into the realm of the most
                  flexible, scalable, and agile commerce solution available.
                  Uncover the secrets behind the success of renowned brands,
                  discovering how they leverage composable commerce to create
                  memorable customer experiences. Experience the difference that
                  a dynamic and adaptable commerce approach can make, empowering
                  you to stand out and thrive in the competitive landscape of
                  personalized and customer-centric retail.
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
                  Commercetools excels in integrations, seamlessly connecting
                  with various third-party systems to enhance commerce
                  functionalities. Its API-first architecture allows smooth
                  integration with existing technologies, providing flexibility
                  and adaptability. Commercetools readily integrates with
                  popular platforms, such as CRM, ERP, and marketing tools,
                  facilitating a cohesive ecosystem. This ensures a unified
                  approach to data management, order processing, and customer
                  engagement. With a focus on headless commerce, Commercetools
                  enables versatile front-end integrations, allowing businesses
                  to deliver consistent and personalized experiences across
                  multiple channels.
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

export default Commercetools;
