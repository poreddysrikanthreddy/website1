import React from "react";
import i1 from "../../assets/img/partners/flutterflow/p3.png";
import i2 from "../../assets/img/partners/flutterflow/p1.png";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const FlutterFlow = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            FlutterFlow
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">FutterFlow </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          What is FlutterFlow?
        </h2>
        <p className="mb-8">
          FlutterFlow revolutionizes mobile app development with its innovative
          low-code builder. Crafting native mobile applications has never been
          easier – leverage our intuitive drag-and-drop interface to expedite
          your development process by an impressive 10 times compared to
          traditional methods. Unleash your creativity without sacrificing
          efficiency as you effortlessly design and implement features.
        </p>

        <p className="mb-8">
          From user interfaces to complex functionalities, FlutterFlow empowers
          you to bring your app vision to life seamlessly. Experience the future
          of app development, where speed meets simplicity, and complexity is
          tamed with a user-friendly approach. Join the movement towards swift,
          efficient, and enjoyable mobile app creation with FlutterFlow.
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
                  FlutterFlow Integration
                </h2>
                <p className="mb-8">
                  Integrations seamlessly link your application with key
                  platforms such as Algolia for robust search functionality,
                  Google Analytics for insightful user behavior analysis, Google
                  Maps for location-based services, and Admob for efficient ad
                  monetization. Additionally, effortlessly manage and
                  synchronize custom code by connecting your project to the
                  GitHub repository. These integrations empower your app with
                  advanced features, data-driven insights, and streamlined code
                  management, ensuring a comprehensive and efficient development
                  and user experience.
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
                  FlutterFlow Marketplace
                </h2>
                <p className="mb-8">
                  Revolutionize your app development with unparalleled speed!
                  The FlutterFlow Marketplace introduces a wealth of user-built
                  components and templates, ready to seamlessly integrate into
                  your FlutterFlow project. Elevate your app's capabilities
                  effortlessly by incorporating these items, designed to swiftly
                  add functionalities currently unavailable or challenging to
                  create within the FlutterFlow framework. In just seconds,
                  unlock a universe of possibilities, enhancing your project
                  with innovative features and cutting-edge design elements.
                  Stay ahead of the curve, harnessing the collective creativity
                  of the FlutterFlow community to amplify the potential of your
                  app development journey.
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

export default FlutterFlow;
