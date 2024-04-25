import React from "react";
import i1 from "../../assets/img/partners/aptos/32420c17-24f2-407a-84d8-11bc4ecf1380.jpg";
import i2 from "../../assets/img/partners/aptos/18f6d92e-20e0-4cf2-902d-dd8a979c20a2.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Aptos = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Aptos
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Aptos </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Aptos
        </h2>
        <p className="mb-8">
          With a rich legacy spanning over 40 years, Aptos stands as a prominent
          leader in retail technology solutions. Evolving from its roots in
          Merchandising, CRM, and POS, Aptos now offers a contemporary portfolio
          of Unified Commerce solutions. Countless retail brands have relied on
          Aptos for technology that addresses challenges and fosters brand
          distinctiveness, fueling enduring growth. Managing over $2 trillion
          USD in retail revenue and backed by 1,300 retail specialists
          worldwide, Aptos possesses an unparalleled reach that shapes the
          development and support of its solutions. This extensive experience
          underscores Aptos' commitment to empowering retailers and ensuring
          their sustained success in the dynamic retail landscape.
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
                  Features of Aptos
                </h2>
                <p className="mb-8">
                  Aptos, a retail technology leader for over 40 years, offers a
                  comprehensive suite of solutions. From its origins in
                  Merchandising, CRM, and POS, Aptos has evolved into providing
                  modern Unified Commerce solutions. Its portfolio includes
                  innovative features such as advanced merchandising
                  capabilities, customer relationship management tools, and
                  cutting-edge point-of-sale systems. With a focus on overcoming
                  industry challenges, Aptos empowers retail brands to
                  differentiate and achieve sustained growth. Supported by a
                  global team of 1,300 retail specialists, Aptos manages over $2
                  trillion USD in retail revenue, showcasing its extensive reach
                  and commitment to delivering robust technology solutions for
                  retailers worldwide.
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
                  Aptos excels in seamless integrations, connecting with diverse
                  systems to empower retailers with a unified and efficient
                  operational ecosystem. Its flexible architecture facilitates
                  integration with existing technologies, including ERP systems,
                  e-commerce platforms, and third-party applications. The Aptos
                  platform seamlessly integrates point-of-sale systems, customer
                  relationship management tools, and advanced merchandising
                  solutions. This integration capability ensures real-time data
                  synchronization, providing retailers with accurate insights
                  and streamlined processes. With a focus on enhancing the
                  customer experience, Aptos fosters connectivity across
                  channels,
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

export default Aptos;
