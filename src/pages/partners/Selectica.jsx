import React from "react";
import i1 from "../../assets/img/partners/selectica/selectica.jpg";
import i2 from "../../assets/img/partners/selectica/50a382cb-5e78-4f4a-8826-64435ea77877.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Selectica = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Selectica
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Selectica </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Selectica
        </h2>
        <p className="mb-8">
          Selectica International Solutions aspires to lead the global human
          resource consultancy landscape by providing unparalleled value to
          clients. The cornerstone of our success lies in a proven mantra: "Grow
          with the Clients!" We envision a collaborative journey, fostering
          mutual growth and success. By prioritizing client partnerships and
          aligning our strategies with their evolving needs, we aim to establish
          ourselves as a trusted and indispensable HR consultancy. Our
          commitment to sustained growth alongside clients reflects our
          dedication to delivering exceptional service, strategic insights, and
          innovative solutions, ensuring enduring success for both parties in
          the dynamic realm of human resource management.
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
                  Features of Selectica
                </h2>
                <p className="mb-8">
                  At Selectica International Solutions, we ardently believe in
                  the transformative power that arises when the perfect talent
                  aligns with the right opportunity within an organization
                  guided by the right philosophies. Our mission is to catalyze
                  remarkable transformations. By delivering specialized HR
                  solutions, we empower our clients to sustain a competitive
                  edge in burgeoning markets. Through meticulous talent
                  placement and strategic guidance, we not only meet immediate
                  staffing needs but also contribute to the long-term success
                  and resilience of our client partners. At the core of our
                  approach lies a commitment to nurturing synergies that lead to
                  enduring and mutually beneficial growth.
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
                  Selectica International Solutions excels in integrations,
                  collaborating seamlessly with clients across a myriad of
                  industries such as IT, BPO, FMCG, Retail, Real Estate,
                  Telecom, Education, Oil & Gas, Infrastructure, Pharma,
                  Automobiles, Logistics, Finance, Healthcare, and
                  Manufacturing. Our tailored HR solutions are strategically
                  integrated to meet the specific needs of each sector, ensuring
                  a nuanced approach to talent acquisition, workforce
                  optimization, and organizational development. This breadth of
                  industry engagement underscores our versatility and commitment
                  to providing holistic and industry-tailored services,
                  positioning Selectica as a reliable partner in fostering
                  sustained growth and success across diverse business
                  landscapes.
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

export default Selectica;
