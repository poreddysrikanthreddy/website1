import React from "react";
import i1 from "../../assets/img/partners/powerapps/powerapps-logo.png";
import i2 from "../../assets/img/partners/powerapps/powerapps.png";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const PowerApps = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            PowerApps / Microsoft
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">PowerApps </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          PowerApps
        </h2>
        <p className="mb-8">
          PowerApps is a Microsoft platform allowing users to create custom
          business applications without extensive coding. It simplifies app
          development, enabling users to design, share, and manage apps
          seamlessly. Integrated with Microsoft 365 and Dynamics 365, PowerApps
          facilitates data connectivity, automation, and collaboration. Users
          can build apps for various purposes, from simple data entry to complex
          workflows, fostering efficiency across organizations. This low-code
          solution empowers individuals and teams to transform ideas into
          functional applications, enhancing productivity and adaptability
          within the Microsoft ecosystem.
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
                  PowerApps offers a range of features for streamlined
                  application development. Its intuitive low-code interface
                  allows users to create custom apps without extensive coding.
                  Seamless integration with Microsoft 365 and Dynamics 365
                  ensures robust data connectivity. PowerApps supports
                  responsive design, enabling app deployment across various
                  devices. Pre-built templates and connectors simplify common
                  tasks, while advanced functionalities like AI Builder enhance
                  app capabilities. Automation through Power Automate and a
                  secure environment with Azure Active Directory integration
                  contribute to efficient workflow management. With real-time
                  collaboration and cloud-based deployment, PowerApps empowers
                  users to rapidly build, share, and manage applications,
                  fostering organizational agility.
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
                  PowerApps excels in data integration, allowing users to
                  connect to diverse data sources seamlessly. It supports
                  integration with on-premises databases, cloud services, and
                  external APIs, facilitating comprehensive data utilization.
                  With built-in connectors for popular platforms, users can
                  easily access and manipulate data in real-time. PowerApps also
                  enables offline capabilities, ensuring uninterrupted
                  functionality even in low-connectivity scenarios. Robust data
                  security measures, including Azure Active Directory
                  authentication, safeguard sensitive information. The
                  platform's ability to handle large datasets and provide
                  scalable solutions enhances its versatility for organizations
                  of varying sizes, making PowerApps a dynamic tool for
                  effective data-driven app development.
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

export default PowerApps;
