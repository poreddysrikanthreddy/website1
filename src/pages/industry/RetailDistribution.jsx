import React from "react";
import i1 from "../../assets/img/industry/Retail/r01.svg";
import i2 from "../../assets/img/industry/Retail/r02.svg";
import i3 from "../../assets/img/industry/Retail/r03.svg";
import i4 from"../../assets/img/industry/Retail/r04.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const RetailDistribution = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Retail & Distribution
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Industry -{" "}
            </a>

            <a className="text-white font-bold">Retail & Distribution </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Retail & Distribution
        </h2>
        <p className="mb-8">
          Ecommerce is being reborn with cutting-edge technologies like voice
          commerce, exclusive pop-ups, Augmented Reality-enabled shopping,
          online-to-offline (O2O), headless commerce and progressive web
          applications (PWA), etc. Smart mirrors, video games, and live streams
          have transformed the ecommerce landscape. The future of ecommerce
          looks promising with technological breakthrough and changes in
          consumers’ preferences.
        </p>

        {/* <p className="mb-8">
          For brands with complex operations or nonstandard needs, the
          modularity of Composable Commerce can decrease development time,
          speeding up time-to-value. These MACH architected digital commerce
          platforms focus on composable architecture by offering the ability for
          business leaders to take a more modular, best-of-breed approach.
        </p> */}

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
                  Selling Directly To Consumers
                </h2>
                <p className="mb-8">
                  Direct to Consumer (DTC) selling is a growing trend. This is
                  largely due to increasing popularity of private brands that
                  occupy 20% of the consumables market and offer their own
                  brands in lieu of legacy manufacturers. This is causing more
                  traditional brands and manufacturers to opt for DTC selling.
                  Consumers are eager for this change as it provides better
                  value for money. With DTC, brands can own the customers, get
                  access to first-party data for hyper-personalization and offer
                  ultra-personalization and enjoy freedom to design their own
                  customized products that win customers over, turning them into
                  brand evangelists.
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
                  Customer & User Experience
                </h2>
                <p className="mb-8">
                  Soon customer experience will be the top priority for any
                  brand, even more important than pricing. A poor experience
                  will cause customers to switch brands in the blink of an eye.
                  In an era of omnichannel engagement and multiple avenues of
                  shopping, you must optimize every aspect of user experience
                  from website design to load time and payment options. Headless
                  systems that have decoupled architecture can help you deliver
                  a great experience anywhere a customer wants to engage like
                  voice or social commerce. Aside from the popularity of mobile
                  shopping, consumers are catching up with the new trend of
                  social shopping with its varied aspects such as groups,
                  communities, recommendations, discussions and selling products
                  and services online. With group shopping facilities, it is
                  possible to secure group discounts for bulk selling. Voice
                  assistants & voice search are rapidly gaining momentum and
                  becoming consumers’ preferred choice while shopping online.
                  Cnetric’s expertise can help you harness these omnichannel
                  opportunities and deliver a delightful experience that retains
                  customers.
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
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  The Promising World of Artificial Intelligence (AI)
                </h2>
                <p className="mb-8">
                  AI-enabled ecommerce automation is bringing revolution across
                  ecommerce industry, primarily by eliminating human error in
                  managing multiple stores, streamlining cross-border commerce
                  and top-rated shopping experience. Hyper-personalization is
                  booming with mobile voice-related searches – most of these are
                  locally-based. Localization is going to rule in this decade to
                  deliver tailor-made product recommendations at the right time
                  and place. AI is extensively employed in digital self-service
                  tools, such as on websites, apps, or via chatbots. AI-powered
                  chatbots answer customers queries extremely fast and can
                  provide better customer service post sale. With the ecommerce
                  industry moving towards omnichannel marketing, AI provides
                  personalized suggestions and support, driving greater sales.
                  Cnetric can help you delight customers with an AI-powered,
                  omnichannel shopping experience.
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
                  The Power of Analytics
                </h2>
                Today’s tech-savvy consumers look for a superior purchase
                experience across all touch points with relevant and useful
                content. The orchestration of connected technologies and
                channels has the capability to capture the digital footprints of
                these consumers. Organizations can derive valuable insights and
                uncover patterns through the power of analytics utilizing
                Machine Learning and adaptive analytics models. With these
                customer insights, organizations can fine-tune customer
                experience at every step of their journey and deliver
                hyper-personalized services and products. This drives higher
                conversions resulting in enhanced customer satisfaction, loyalty
                and retention.
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
        </section>
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

export default RetailDistribution;
