import React from "react";
import i1 from "../../assets/img/partners/amplience/48357ed1-0b93-4ca2-bfea-ea854911b51b.jpg";
import i2 from "../../assets/img/partners/amplience/6c17fa94-3212-42af-a48c-6b1c8a15299f.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Amplience = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Amplience
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Amplience </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Amplience
        </h2>
        <p className="mb-8">
          Amplience is a leading headless commerce and content management
          platform, designed for dynamic digital experiences. Offering a robust
          set of features, it enables businesses to create, manage, and deliver
          rich, personalized content seamlessly across multiple channels.
          Amplience's modular architecture supports flexible content modeling,
          facilitating rapid content creation and updates. With a focus on speed
          and scalability, it integrates seamlessly with eCommerce platforms and
          other technologies. The platform's API-driven approach empowers
          developers to build and customize digital experiences, while its
          user-friendly interface streamlines collaboration for content
          creators. Amplience is an ideal solution for enterprises seeking an
          agile and versatile content management platform.
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
                  Features
                </h2>
                <p className="mb-8">
                  Amplience, a leading headless commerce and content management
                  platform, offers a suite of powerful features for creating
                  immersive digital experiences. Its modular content modeling
                  ensures flexibility, facilitating rapid and personalized
                  content creation. The platform's dynamic media capabilities
                  allow for the seamless delivery of rich, engaging visuals
                  across various channels. Amplience integrates effortlessly
                  with eCommerce systems, providing a unified solution. Its
                  API-driven architecture empowers developers to build and
                  customize experiences. With a user-friendly interface,
                  collaborative workflows are streamlined for content creators.
                  Amplience's focus on speed, scalability, and personalized
                  content delivery positions it as an ideal solution for
                  enterprises navigating the demands of modern digital commerce.
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
                  Amplience excels in integrations, seamlessly connecting with
                  diverse technologies to enhance its capabilities as a headless
                  commerce and content management platform. The platform
                  smoothly integrates with popular eCommerce systems, enabling a
                  unified approach to digital experiences. Its compatibility
                  with various APIs facilitates seamless connections with
                  third-party services, enhancing flexibility. Amplience
                  supports integrations with leading marketing technologies,
                  analytics tools, and customer relationship management (CRM)
                  platforms. This enables businesses to leverage existing tools
                  within the Amplience framework for a cohesive solution.
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

export default Amplience;
