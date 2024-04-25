import React from "react";
import i1 from "../../assets/img/partners/backendless/backendless.png";
import i2 from "../../assets/img/partners/backendless/features.png";
import i3 from "../../assets/img/partners/backendless/api.png";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Backendless = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            BackendLess
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Backendless </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        {/* <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Backendless
        </h2>
        <p className="mb-8">
          Backendless is a versatile backend-as-a-service (BaaS) platform that
          simplifies and accelerates mobile and web app development. It offers
          serverless computing, real-time databases, user authentication, and
          API management, streamlining backend operations. With a visual
          interface and codeless logic, developers can create robust
          applications without extensive coding. Backendless supports multiple
          programming languages and provides scalability, making it suitable for
          various projects. Its features include cloud-based hosting, push
          notifications, and geolocation services, empowering developers to
          focus on frontend innovation while ensuring efficient and scalable
          backend functionality.
        </p> */}
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
                  Backendless
                </h2>
                <p className="mb-8">
                  Backendless is a versatile backend-as-a-service (BaaS)
                  platform that simplifies and accelerates mobile and web app
                  development. It offers serverless computing, real-time
                  databases, user authentication, and API management,
                  streamlining backend operations. With a visual interface and
                  codeless logic, developers can create robust applications
                  without extensive coding. Backendless supports multiple
                  programming languages and provides scalability, making it
                  suitable for various projects.
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
                  Features of backendless
                </h2>
                <p className="mb-8">
                  Backendless mBaaS is a comprehensive backend solution
                  encompassing user authentication, data persistence, file
                  storage, messaging, and customizable business logic. It
                  empowers developers to craft exceptional applications without
                  the burden of server management. With robust support for
                  essential features, including secure user authentication,
                  efficient data storage, seamless file handling, and reliable
                  messaging services, Backendless streamlines the development
                  process. Its serverless architecture ensures hassle-free
                  scalability, allowing developers to focus on creating
                  innovative applications while offloading backend complexities.
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
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  API services
                </h2>
                <p className="mb-8">
                  Backendless mBaaS is a comprehensive backend solution
                  encompassing user authentication, data persistence, file
                  storage, messaging, and customizable business logic. It
                  empowers developers to craft exceptional applications without
                  the burden of server management. With robust support for
                  essential features, including secure user authentication,
                  efficient data storage, seamless file handling, and reliable
                  messaging services, Backendless streamlines the development
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Backendless;
