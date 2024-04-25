import React from "react";
import i1 from "../../assets/img/industry/Telecom/t01.svg";
import i2 from "../../assets/img/industry/Telecom/t02.svg";
import i3 from "../../assets/img/industry/Telecom/t03.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Telecom = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Telecom
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Industry -{" "}
            </a>

            <a className="text-white font-bold">Telecom </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          The Telecommunication Industry Today
        </h2>
        <p className="mb-8">
          Telecommunication companies face a number of challenges. Rolling out
          new Internet protocol (IP) based services, costs control, and
          customers retention are some of the major roadblocks that need to be
          addressed with immediate effect.
        </p>

        <p className="mb-8">
          Business Integration can rescue these enterprises through manual and
          automated processes integration allowing efficient and rapid delivery
          of services that generate new revenue. Streamlining and re-engineering
          allow service providers to curb their operating expenses and raise
          profit margins.
        </p>

        {/* <p className="mb-8">
          Gartner predicts that “By 2023, organizations that have adopted a
          Composable Commerce approach will outpace the competition by 80% in
          the speed of new feature implementation.”
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
                  Telecom Industry Challenges
                </h2>
                <p className="mb-8">
                  Amidst several challenges ranging from deregulation,
                  competition, expansion through new networks, changing market
                  needs and the advent of 5G, telecommunications industry has
                  undergone a massive transformation in the last few decades.
                  Apart from these, the industry has been facing certain other
                  obstacles such as operational inefficiency, poor service
                  quality, no marked differentiations in the services, high
                  customer attrition rate, etc. Encompassing customer-centricity
                  in the business model will go a long way in designing service
                  bundles solely serving customer’s perspectives.
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
                  Embracing Digital Transformation Revived the Telco Industry
                </h2>
                <p className="mb-8">
                  To circumvent the pressure from different angles, telecom
                  industries are going through wide-scale digital and IT
                  transformation across the BSS, OSS and Network layer to build
                  the foundation to move to the next level i.e. 5G and beyond.
                  Digital commerce has flourished primarily to tackle B2C and
                  B2B business models with respect to targeting customers across
                  all possible channels and touch-points.
                </p>
                <p className="mb-8">
                  In this flourishing digital age, it is easy to reach customers
                  through various digital channels for customer acquisition,
                  customer service, marketing and sales, etc. RedHat OpenShift
                  and OpenStack and standards like ONAP are the latest
                  cloud-based technologies that significantly investment cost
                  and provisions for virtualizing the network layer.
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
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Cnetric’s Portfolio
                </h2>
                <p className="mb-8">
                  Centric’s long journey of working with diverse clients has
                  been a glorious chapter. We have extensive experience in
                  handling telecom projects involving middleware technologies
                  for supply chain and ecommerce applications spanning across
                  B2C and B2B channels. We have a proven track record of
                  successfully implementing BSS/OSS transformation projects at
                  Vodafone and Telstra in Australia, O2 in Ireland, Hutch
                  Telecom and Airtel in India and the America Movil group
                  companies namely Claro Colombia and Claro Argentina.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>

                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  An Eye on 5G
                </h2>
                Have you considered how 5G will impact your eCommerce business?
                5G will be 100x faster than 4G and this will have a massive
                effect on how mobile devices consume data. Many modern shoppers
                love to shop from their mobile devices, so your business must
                adapt to 5G. With exponentially higher speed, increased
                capacity, and low latency new channels will emerge or grow like
                with AR/VR and IOT. Cnetric has the expertise to help you
                transform your eCommerce business to a headless system, so you
                can thrive in the era of 5G.
              </div>
              <div>
                <img
                  src={i4}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                <img
                  src={i5}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
              <div>

                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Social Commerce
                </h2>
                <p className="mb-8">
                  Social commerce is your company’s ability to sell its products
                  directly within social media platforms. This is a hot trend
                  and growing by leaps and bounds. But there are a large number
                  of social platforms and each one has its unique difficulty to
                  present your products there. The headless commerce
                  architecture will support your enterprise’s efforts to sell
                  directly within social sites.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Telecom;
