import React from "react";
import i1 from "../../assets/img/partners/emporix/a8de53e4-7601-4084-80fc-e74c0b467d8f.jpg";
import i2 from "../../assets/img/partners/emporix/b3f75ebf-bb94-41fb-b2dd-d888154bd051.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Emporix = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Emporix
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Emporix </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Emporix
        </h2>
        <p className="mb-8">
          Emporix empowers you to transform and operate your business with
          unparalleled flexibility. Leveraging our cloud-native, MACH-certified
          technology, you have boundless opportunities to tailor channels that
          mirror your business's distinct identity. Break free from the
          constraints of inflexible systems and champion innovation. Unleash the
          full potential of your business as your customers encounter genuine
          added value, while operational efficiency reaches unprecedented
          levels. Embrace a future where customization and adaptability define
          success, and where Emporix serves as the catalyst for a dynamic,
          customer-centric, and operationally streamlined business landscape.
          Say goodbye to limitations and usher in a new era of business
          excellence through the limitless possibilities of Emporix.
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
                  Elevate your business strategically with a robust,
                  high-performance digital commerce platform designed for
                  seamless scalability in intricate business landscapes.
                  Leverage top-tier, enterprise-class applications built upon a
                  secure and potent infrastructure. Implement Digital Commerce
                  Process Automation to optimize operations through automated
                  execution, adapting interactions in real-time with end-to-end
                  process intelligence. Embrace Cloud-Native Commerce
                  Architecture for unparalleled security and cost
                  predictability, ensuring online presence and automatic scaling
                  during peak traffic. With an API-first approach, choose
                  Best-of-Breed capabilities for continuous improvement,
                  allowing composable architecture to tailor services.
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
                  Experience a seamless transition from a monolithic solution
                  like SAP Hybris to the Emporix Composable Commerce Platform
                  with this user-friendly guide. Uncover the simplicity of the
                  migration process as it unfolds through essential steps,
                  encompassing project management, gap analysis, and the
                  seamless transfer of data and custom extensions. This guide
                  provides a comprehensive overview, ensuring a clear
                  understanding of the journey from one robust solution to
                  another, making the migration process straightforward and
                  accessible for businesses seeking to enhance their commerce
                  capabilities with the agility and innovation offered by the
                  Emporix Composable Commerce Platform.
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

export default Emporix;
