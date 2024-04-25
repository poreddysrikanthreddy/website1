import React from "react";
// import i1 from "../../assets/img/universalCommerce/platform/1.svg";
// import i2 from "../../assets/img/services/Engineering/en01.svg";
// import i1 from "../../assets/img/universalCommerce/platform/1.svg";
// import i3 from "../../assets/img/universalCommerce/platform/3.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
import i1 from "../../assets/img/services/Engineering/en01.svg";
import i2 from "../../assets/img/services/Engineering/en02.svg";
const Engineering = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Buyer & Supplier Marketplace
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Services -{" "}
            </a>

            <a className="text-white font-bold">Engineering </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Engineering Services Can Accelerate Time-to-Market
        </h2>
        <p className="mb-8">
          With the software market becoming more competitive and mature, product
          companies are under pressure to regularly release new versions and
          updates to the market. Achieving better time-to-market turnarounds has
          become critical due to shorter product lifecycles, rapid technological
          obsolescence, advances in engineering technologies and increasing
          design complexity.
        </p>

        <p className="mb-8">
          At the same time, investment in product development needs to be
          balanced with market analysis and marketing activities which directly
          impact the success of the company. More and more companies are
          recognizing, that outsourcing “non-core” activities is crucial to
          gaining an economic advantage.
        </p>

        <p className="mb-8">
          This is borne out by a KPMG survey that found that software
          application development maintenance are the leading outsourced
          functions worldwide. 57% of the respondents in another Deloitte study
          felt that outsourcing helped them focus on their core business, with
          cost efficiencies being another key advantage (59%).
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
                  Engineering Services to Meet Your Every Need
                </h2>
                <p className="mb-8">
                  Engineering services follow a broad spectrum of offerings
                  ranging from simple resource augmentation all the way to
                  complete end-to-end product development and testing.
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
                  Cnetric is Your Engineering Services Partner for Success
                </h2>
                <p className="mb-8">
                  If you’re exploring outsourcing elements of your product
                  development, you need a partner who can support you through
                  the entire lifecycle. Cnetric has vast experience in providing
                  engineering for clients around the world, leveraging our
                  expertise in industry-leading frameworks and next generation
                  technologies. We work as an extension of your team and ensure
                  scalability, flexibility and transparency across delivery. Our
                  Engineering Services model can adapt to your specific needs:
                  Whether you need specific skills, development of a particular
                  product module or even implementation of the end-to-end
                  product, we have the resources and the infrastructure to
                  support your needs. With Cnetric, you get: Access to
                  motivated, skilled resources you need to power your product
                  ideas. Product engineering teams and domain experts available
                  across the globe. Continuous delivery capabilities powered by
                  Design Thinking and Agile Scrum/Kanban in every stage. A
                  partner who will work with you across product development,
                  client implementations and support.
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

export default Engineering;
