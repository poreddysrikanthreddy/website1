import React from "react";
import i1 from "../../assets/img/partners/fluent/94884fe1-08c7-4c2e-845f-502244a73d0f.jpg";
import i2 from "../../assets/img/partners/fluent/bc87ef9e-de10-41ac-98e1-6c0c2b84e07b.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const FluentCommerce = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Fluent Commerce
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Fluent Commerce </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Fluent Commerce
        </h2>
        <p className="mb-8">
          Fluent Commerce is an innovative cloud-native order management system
          (OMS) designed to optimize omnichannel retail operations. It provides
          a centralized platform for retailers to manage orders, inventory, and
          fulfillment across various channels. With real-time visibility and
          flexibility, Fluent Commerce enables retailers to enhance customer
          experiences by efficiently orchestrating and fulfilling orders from
          multiple locations. Its modular architecture supports rapid
          customization and integration, allowing businesses to adapt to
          evolving market demands. Fluent Commerce empowers retailers with the
          agility needed to streamline operations, improve inventory management,
          and deliver seamless customer journeys, ultimately driving growth and
          customer satisfaction in the dynamic e-commerce landscape.
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
                  Features of Fluent Commerce
                </h2>
                <p className="mb-8">
                  Fluent Commerce offers a comprehensive suite of features for
                  optimizing retail operations. Its cloud-native Order
                  Management System (OMS) provides centralized control over
                  orders, inventory, and fulfillment across diverse channels.
                  Real-time visibility and flexibility enhance customer
                  experiences, facilitating efficient order orchestration. The
                  modular architecture supports rapid customization and seamless
                  integration. With capabilities for managing complex order
                  scenarios, inventory across channels, and flexible fulfillment
                  options, Fluent Commerce enables retailers to adapt swiftly to
                  market changes.
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
                  Fluent Commerce excels in seamless integrations, connecting
                  with diverse systems to optimize retail operations. Its
                  modular and flexible architecture allows for easy integration
                  with existing enterprise systems, e-commerce platforms, and
                  third-party applications. Fluent Commerce integrates with
                  various channels, enabling retailers to centralize and
                  synchronize order management, inventory, and fulfillment
                  processes. The platform supports real-time data exchange,
                  ensuring accuracy and efficiency in managing complex order
                  scenarios. By facilitating integrations with payment gateways,
                  ERP systems, and other key components of the retail ecosystem,
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

export default FluentCommerce;
