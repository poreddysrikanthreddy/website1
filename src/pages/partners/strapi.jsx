import React from "react";
import i1 from "../../assets/img/partners/strapi/a7399ce3-de37-4698-a0df-d7e5cb07df90.jpg";
import i2 from "../../assets/img/partners/strapi/d953f6b3-c283-4759-b59c-7bc24e7d1580.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Strapi = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Strapi
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Strapi </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Strapi
        </h2>
        <p className="mb-8">
          Strapi is a powerful open-source headless Content Management System
          (CMS) that empowers developers to build robust APIs quickly. Designed
          for flexibility, it allows content creators to manage and distribute
          digital content seamlessly. With a user-friendly interface and
          customizable content structures, Strapi streamlines content creation
          and management. Its API-first approach enables developers to create
          scalable and dynamic digital experiences. Strapi supports a wide range
          of databases, making it adaptable to various projects. As a
          self-hosted solution, Strapi provides autonomy and customization,
          positioning itself as a versatile choice for developers and businesses
          seeking a modern, customizable, and extensible CMS.
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
                  Strapi offers a versatile set of features as an open-source
                  headless Content Management System (CMS). With a user-friendly
                  interface and customizable content structures, it facilitates
                  efficient content creation and management. Its API-first
                  approach empowers developers to build scalable and dynamic
                  digital experiences, while supporting a variety of databases
                  for adaptability. Strapi's authentication and access control
                  system ensures robust security measures. The platform allows
                  content localization, user role management, and versioning for
                  enhanced content governance. Strapi's self-hosted nature
                  provides autonomy and customization, making it an ideal choice
                  for developers and businesses seeking a modern, flexible, and
                  extensible CMS solution.
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
                  Strapi excels in integrations, seamlessly connecting with
                  various technologies to enhance its functionality. Its
                  API-first architecture allows smooth integration with frontend
                  frameworks like React, Vue, and Angular, ensuring dynamic and
                  interactive user experiences. Strapi integrates effortlessly
                  with databases such as MongoDB, MySQL, and PostgreSQL,
                  providing adaptability to diverse project requirements. The
                  platform supports third-party authentication providers like
                  OAuth and JWT for secure user management. Strapi's webhook
                  system enables real-time communication with external services,
                  enhancing automation possibilities. Its extensible plugin
                  system allows users to integrate additional features and
                  services, making Strapi a versatile and customizable solution
                  for developers seeking seamless integration into their tech
                  stack.
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

export default Strapi;
