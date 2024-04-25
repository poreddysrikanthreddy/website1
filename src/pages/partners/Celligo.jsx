import React from "react";
import i1 from "../../assets/img/partners/celligo/Screenshot 2024-01-05 172753.png";
import i2 from "../../assets/img/partners/celligo/Screenshot 2024-01-05 173121.png";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Celligo = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Celligo
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Celligo </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Celligo
        </h2>
        <p className="mb-8">
          Celigo is a cloud-based integration platform that facilitates seamless
          connectivity between diverse applications and systems. It simplifies
          complex business processes by enabling users to automate workflows
          without extensive coding. Celigo's Integration Platform as a Service
          (iPaaS) offers a user-friendly interface, empowering users to build,
          deploy, and manage integrations efficiently. Known for its
          versatility, Celigo supports a wide range of applications, allowing
          businesses to integrate and synchronize data across their entire
          ecosystem. With pre-built connectors and a robust toolkit, Celigo
          accelerates digital transformation, enhances operational efficiency,
          and fosters a more interconnected and streamlined business
          environment.
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
                  Revolutionizing error resolution, Celigo introduces AI-Driven
                  Error Management, transforming the traditional approach to
                  handling errors. Addressing user pain points in managing
                  flows, especially concerning API and data errors, Celigo
                  employs artificial intelligence to classify and automatically
                  resolve errors. This innovative solution achieves an
                  impressive 95% automatic resolution rate, handling over 500
                  million errors monthly. Celigo's customers collectively
                  reclaim 52,000+ hours weekly, which would have been spent on
                  manual error management. Industry analysts acknowledge Celigo
                  as pioneers in AI Error Management, emphasizing the platform's
                  commitment to efficiency, time savings, and cutting-edge
                  technological advancements in error resolution processes.
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
                  AI-Powered Design Assistance
                </h2>
                <p className="mb-8">
                  Revolutionizing integration work, our AI-Powered Design
                  Assistance propels efficiency to unparalleled heights.
                  Harnessing cutting-edge AI advancements, we seamlessly embed
                  AI guidance throughout the user experience. Elevate user
                  proficiency with continuous AI chat support, bridging
                  knowledge and skill gaps within the Celigo platform. This
                  transformative approach not only assists users in navigating
                  the platform but also aids in tackling more intricate tasks.
                  Jump-start your projects effortlessly as the AI system
                  auto-suggests existing integration templates and flows,
                  streamlining the design process. With this ultimate AI-driven
                  support, we redefine the integration landscape, providing
                  users with an intuitive, efficient, and technologically
                  advanced experience.
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

export default Celligo;
