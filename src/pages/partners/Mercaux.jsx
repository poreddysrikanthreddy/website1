import React from "react";
import i1 from "../../assets/img/partners/mercaux/1e.jpg";
import i2 from "../../assets/img/partners/mercaux/4069f9b6-d05e-42b5-ad61-931f454df89f.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Mercaux = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Mercaux
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Mercaux </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Mercaux
        </h2>
        <p className="mb-8">
          Mercaux is a retail technology platform designed to enhance the
          in-store shopping experience. This mobile-first solution empowers
          sales associates with digital tools, enabling them to access real-time
          product information, personalized recommendations, and assist
          customers seamlessly. Mercaux bridges the online and offline retail
          worlds, offering features like clienteling, endless aisle, and mobile
          checkout. The platform optimizes store operations, improves customer
          engagement, and provides retailers with valuable insights through
          analytics. With an emphasis on creating a connected and interactive
          shopping environment, Mercaux revolutionizes traditional retail,
          helping brands adapt to the evolving landscape of omnichannel
          commerce.
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
                  Features of Mercaux
                </h2>
                <p className="mb-8">
                  Mercaux, a retail technology platform, enriches the in-store
                  shopping experience with a suite of dynamic features. Its
                  mobile-first solution empowers sales associates by providing
                  real-time access to product information, personalized
                  recommendations, and clienteling tools. Mercaux enables
                  endless aisle capabilities, allowing customers to explore a
                  wider range of products. The platform facilitates mobile
                  checkout, streamlining transactions. With its analytics tools,
                  retailers gain valuable insights into customer behavior and
                  store performance. Mercaux transforms traditional retail,
                  creating a connected and interactive environment that
                  optimizes operations, elevates customer engagement, and aligns
                  seamlessly with the demands of the evolving omnichannel
                  commerce landscape.
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
                  Mercaux excels in integrations, seamlessly connecting with
                  diverse retail technologies to enhance its in-store shopping
                  capabilities. The platform supports integration with various
                  point-of-sale (POS) systems, ensuring a cohesive transactional
                  experience. Mercaux smoothly integrates with Customer
                  Relationship Management (CRM) tools, enabling personalized
                  clienteling. It interfaces with inventory management systems,
                  optimizing stock visibility and availability. Integration with
                  e-commerce platforms ensures consistent product information
                  across channels. Mercaux adapts to retailers' existing
                  technology stacks, offering compatibility with different data
                  sources and APIs.
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

export default Mercaux;
