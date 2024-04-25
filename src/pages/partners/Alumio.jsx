import React from "react";
import i1 from "../../assets/img/partners/alumio/alumino.png";
import i2 from "../../assets/img/partners/alumio/Screenshot 2024-01-05 170105.png";
import i3 from "../../assets/img/partners/alumio/Screenshot 2024-01-05 170536.png";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Alumio = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Alumio
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Alumio </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Alumio
        </h2>
        <p className="mb-8">
          "Alumino" could refer to various contexts, but assuming you're
          referring to a fictional or specific term, here's a general
          description: Alumino appears to be a term associated with aluminum or
          alloys. In materials science, alumino could indicate a substance with
          aluminum as a primary component, known for its lightweight,
          corrosion-resistant properties. It might be utilized in manufacturing,
          construction, or aerospace industries. Alternatively, in a fictional
          context, "Alumino" could represent a futuristic or imaginary element
          with unique properties, possibly crucial to a storyline or technology
          within a narrative. The exact meaning depends on the specific domain
          or context in which the term is used.
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
                  Features
                </h2>
                <p className="mb-8">
                  Alumio iPaaS, or Integration Platform as a Service, epitomizes
                  a cloud-native middleware solution. It serves as a
                  collaborative bridge, effortlessly connecting diverse
                  software, systems, data, and business processes. Tailored for
                  both developers and business users, from junior developers to
                  project managers and CTOs, Alumio offers a user-friendly
                  interface. This simplifies the complexity of integration
                  tasks, fostering seamless collaboration across teams. An iPaaS
                  like Alumio becomes indispensable in modern workflows,
                  facilitating agility and efficiency by streamlining
                  connections in a unified platform.
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
                  Digitalize and automate your supply chain with the best
                  software integrations!
                </h2>
                <p className="mb-8">
                  Elevate your supply chain efficiency through top-notch
                  software integrations. Streamline by migrating old systems and
                  data seamlessly—integrate legacy systems or ERP with
                  contemporary cloud apps and SaaS using our specialized
                  connectors. Link your B2B or D2C webshop intricately with
                  e-commerce, CRM, WMS systems, and online marketplaces.
                  Establish a robust connection with partner and supplier data
                  using EDI, unifying information across all stakeholders. Our
                  platform accommodates various protocols and formats like JSON,
                  Edifact, X12, CSV, XML, and cXML. Digitize and automate your
                  supply chain seamlessly, ensuring a synchronized and
                  technologically advanced operational landscape.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Integrations and instances
                </h2>
                <p className="mb-8">
                  Within your organization you can assemble an integration by
                  tying together multiple component's actions. That integration
                  can be tested using our integration designer. Once you are
                  satisfied with your integration, it can be published, and
                  instances of the integration can be configured and deployed to
                  one or many of your customers.
                </p>
                <p className="mb-8">
                  Instances deployed to customers can be configured using
                  customer-specific config variables, so one integration can be
                  uniquely deployed to multiple customers with different setups.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Alumio;
