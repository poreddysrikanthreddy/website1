import React from "react";
import i1 from "../../assets/img/partners/contentstack/stack.jpg";
import i2 from "../../assets/img/partners/contentstack/5e384d2b-1ffb-47a8-97ec-a033edf4fa16.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
import Contentful from "./Contentful";
const ContentStack = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            ContentStack
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">ContentStack </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          ContentStack
        </h2>
        <p className="mb-8">
          Contentstack stands as a leading headless content management system
          (CMS), renowned for its agility and scalability. With an API-first
          approach, it empowers developers to build and deliver digital content
          seamlessly across various channels. The platform's modular
          architecture facilitates flexible content modeling, enabling dynamic
          and personalized user experiences. Contentstack boasts a user-friendly
          interface for content creators, ensuring efficient collaboration and
          streamlined workflows. Its robust APIs support integrations with
          third-party services, while features like versioning, workflow
          management, and digital asset management enhance content governance.
          Contentstack caters to enterprises seeking a modern, scalable solution
          for content creation, management, and delivery in today's dynamic
          digital landscape.
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
                  Contentstack, a leading headless content management system
                  (CMS), offers a suite of powerful features for seamless
                  content creation and delivery. With an API-first approach, it
                  enables developers to deliver content across various channels
                  efficiently. Contentstack's modular content modeling allows
                  for flexible and dynamic structures. The platform supports
                  collaboration with a user-friendly interface for content
                  creators, incorporating features like versioning and workflow
                  management. Robust APIs facilitate smooth integration with
                  third-party services, while digital asset management ensures
                  centralized control over multimedia elements. Contentstack's
                  scalability, coupled with modern content governance tools,
                  caters to enterprises seeking a flexible, efficient solution
                  for managing and delivering digital content.
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
                  Contentstack excels in integrations, seamlessly connecting
                  with a diverse array of technologies to enhance its
                  capabilities. With a focus on extensibility, it effortlessly
                  integrates with popular third-party services such as eCommerce
                  platforms, analytics tools, and marketing automation
                  solutions. Contentstack supports webhooks for real-time
                  communication with external systems, ensuring dynamic
                  workflows. Its compatibility with GraphQL and RESTful APIs
                  enables developers to integrate and deliver content across
                  various applications and devices. Furthermore, Contentstack
                  seamlessly integrates with version control systems,
                  facilitating collaborative content management.
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

export default ContentStack;
