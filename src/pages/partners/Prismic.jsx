import React from "react";
import i1 from "../../assets/img/partners/prismic/63d5c61f-ae99-4366-87b4-37df1caa49f3.jpg";
import i2 from "../../assets/img/partners/prismic/84799a68-52c5-4f4c-ba11-7fa4534198d2.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Prismic = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Prismic
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Prismic </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Prismic
        </h2>
        <p className="mb-8">
          Prismic is a headless Content Management System (CMS) that enables
          efficient content creation and delivery for web and mobile
          applications. It follows a Software as a Service (SaaS) model,
          offering a user-friendly interface for content editors and developers.
          Prismic's dynamic content modeling supports structured data, providing
          flexibility in content management. Its API-driven approach allows
          developers to fetch content easily for various platforms. With
          features like content versioning, multi-language support, and a
          customizable content schema, Prismic caters to diverse project needs.
          As a cloud-based solution, it ensures scalability and ease of
          collaboration, making it a preferred choice for modern web
          development.
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
                  Features of Prismic
                </h2>
                <p className="mb-8">
                  Prismic is a headless content management system (CMS) that
                  enables developers and content creators to manage and deliver
                  digital content seamlessly. It follows a "Content as a
                  Service" (CaaS) approach, allowing users to create, edit, and
                  organize content independently from its presentation. With a
                  focus on flexibility and scalability, Prismic supports various
                  platforms and technologies, offering an API-driven
                  architecture. Users can structure content with custom types,
                  facilitating dynamic and personalized web experiences.
                  Prismic's cloud-based platform streamlines content creation
                  and delivery, empowering teams to efficiently manage and
                  update content across websites, applications, and other
                  digital channels.
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
                  Prismic is a headless content management system (CMS) that
                  facilitates seamless integrations with various platforms.
                  Through its API-driven approach, Prismic allows developers to
                  effortlessly connect and retrieve content for websites and
                  applications. Integrations with popular frameworks and
                  technologies, such as React, Vue, and Node.js, enable dynamic
                  and flexible content delivery. Prismic's extensibility and
                  customization options make it a versatile choice for managing
                  and delivering content across diverse digital platforms,
                  ensuring a streamlined and efficient content creation and
                  publishing process.
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

export default Prismic;
