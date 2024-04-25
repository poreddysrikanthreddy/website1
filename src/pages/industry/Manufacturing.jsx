import React from "react";
import i1 from "../../assets/img/industry/Manufacturing/m01.svg";
// import i2 from "../../assets/img/universalCommerce/platform/2.svg";
// import i3 from "../../assets/img/universalCommerce/platform/3.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Manufacturing = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Manufacturing
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Industry -{" "}
            </a>

            <a className="text-white font-bold">Manufacturing </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Drive Engagement & Customer Experience with Manufacturing &
          Distribution
        </h2>
        <p className="mb-8">
          The manufacturing and distribution industry has struggled with
          challenges brought about by manual processes, legacy applications, and
          outdated systems. Buyer engagement has also suffered from a lack of
          visibility across the value chain, leading to over/under production,
          increased costs, and reduced productivity of resources. Around the
          world, companies in the manufacturing and distribution industry are
          seeking to implement digital transformation initiatives to better
          serve partners and customers, with the following priorities receiving
          the greatest attention (source IBM):
        </p>

        <p className="mb-8">
          Operational resilience (88%) Wellbeing/ working environment (83%)
          Supply chain integrity & resilience (75%) Supply chain visibility
          (71%) Improving operational efficiency (65%)
        </p>

        <p className="mb-8">
          Enabling Digital-first operations in Manufacturing & Distribution: We
          can supercharge the digital transformation initiatives for your
          manufacturing and distribution brand through capabilities such as;
          IIoT and Smart Manufacturing: Incorporating IoT devices into
          Industrial use cases is helping enterprises more effectively monitor
          device usage and wear and tear and appropriately assign preventive
          maintenance efforts to prolong device life and protect capital
          investments. Additionally, modeling physical device actions in a
          digital environment helps optimize and tune usage for better
          productivity Employee Engagement Apps: Custom mobile applications that
          track and guide activities, streamline processes and facilitate
          interactions help employees approach their tasks with greater
          confidence and success. B2B & D2C Commerce: Whether selling through to
          your wider distribution network or engaging with end-customers
          directly, utilizing modern eCommerce architectures and frameworks
          helps organizations deliver seamless and personalized experiences to
          drive revenue and loyalty. Supply Chain Visibility: Supply chain
          disruptions globally are delivering shipments and deliveries, causing
          losses and unsatisfied customers. Leveraging supply chain
          visualization tools, businesses can identify potential risks and agree
          on optimal courses of action to minimize business impact.
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
                  Our satisfied clients
                </h2>
                <p className="mb-8">
                  KSH is a leading distribution and market expansion enterprise
                  in Southeast Asia with a presence in over 33 countries and
                  distributing product lines ranging across CPG, performance
                  materials, healthcare and more. We helped DKSH set up a B2B
                  eCommerce solution that helped them engage with their buyers
                  across Southeast Asia. We developed extended sites for each
                  country business unit (eg. Thailand Healthcare, Vietnam CPG,
                  Australia performance materials etc). which allowed those
                  units to engage with their specific buyers through catalog
                  entitlement, differentiated pricing and loyalty programs. The
                  solution has been rolled out to 8 business units.
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
                  Omnichannel Reach
                </h2>
                <p className="mb-8">
                  When you remove the restraints from your developers and
                  marketers you are empowering your team to deliver
                  extraordinary digital experience. For an omnichannel
                  experience, you need a seamless presentation on multiple
                  screen sizes (smartwatch, mobile, tablet, laptop, desktop, and
                  kiosk). Not to mention all the new channels like IOT, voice
                  assistants, wearables, AR/VR, AI Bots, Social Commerce and any
                  new channels that tomorrow brings.
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
        </section> */}
        {/* <section className="home-about lg:py-20 py-10">
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
                  Customization, Personalization & Flexibility
                </h2>
                <p className="mb-8">
                  Going headless allows brands to experiment and create custom
                  experiences for different personas or A/B tests with variants
                  in typography and design. You can have endless flexibility and
                  customization options only limited by your imagination.
                  Besides, being API-driven the headless commerce platform is
                  able to quickly adjust to the latest innovations in
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </section> */}
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

export default Manufacturing;
