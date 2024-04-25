import React from "react";
import i1 from "../../assets/img/partners/vtex/170fef11-d546-4106-86c7-a92c9d41a2b8.jpg";
import i2 from "../../assets/img/partners/spryker/bca29af6-5f27-4537-88cd-c7ef85bd09dd.jpg";
import i3 from "../../assets/img/partners/vtex/8ba0feff-e8d6-4d95-9d1c-d792f7ab67fb.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Vtex = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            VTEX
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">VTEX </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          VTEX
        </h2>
        <p className="mb-8">
          VTEX is a cloud-based e-commerce platform known for its robust and
          scalable solutions. Offering a comprehensive suite of tools, VTEX
          enables businesses to create and manage online stores with ease. Its
          unique modular architecture supports seamless integration, allowing
          for flexibility and customization. VTEX emphasizes omnichannel
          capabilities, empowering businesses to deliver consistent and
          personalized customer experiences across various touchpoints. The
          platform's features include advanced order management, real-time
          inventory tracking, and a powerful pricing engine. With a focus on
          innovation, VTEX provides a dynamic and agile e-commerce solution for
          enterprises, enabling them to adapt to evolving market demands and
          optimize their digital operations.
        </p>
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Features of VTEX
                </h2>
                <p className="mb-8">
                  Fast-track your revenue generation with VTEX, offering a swift
                  setup through a comprehensive commerce, marketplace, and OMS
                  solution. Leverage a global seller network to drive
                  incremental sales, expanding your product assortment, reaching
                  new markets, and attracting diverse customers. VTEX ensures
                  the best customer experience across channels, breaking down
                  digital and physical barriers for seamless omnichannel
                  interactions. Trusted by leading brands, VTEX serves as the
                  go-to Enterprise Digital Commerce Platform, emphasizing
                  efficiency and innovation to empower businesses in adapting to
                  the dynamic demands of the digital marketplace and maximizing
                  their potential for growth and success.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Itegration
                </h2>
                <p className="mb-8">
                  Efficiently transition from legacy systems, rapidly scale, and
                  minimize maintenance expenses with VTEX—a unified platform
                  catering to your complete B2C, B2B, marketplace, and
                  omnichannel needs. Seamlessly integrate with various
                  solutions, amplifying the platform's adaptability and
                  functionality. Drive revenue acceleration by tapping into a
                  global seller network, diversifying your product offerings,
                  and expanding into new markets. Ensure an unparalleled
                  customer experience across diverse channels, as VTEX
                  dismantles digital and physical barriers. Trusted by leading
                  brands, VTEX stands as the epitome of an Enterprise Digital
                  Commerce Platform, integrating seamlessly to propel businesses
                  toward innovation, growth, and sustained success.
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

export default Vtex;
