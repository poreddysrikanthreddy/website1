import React from "react";
import i1 from "../../assets/img/universalCommerce/platform/1.svg";
import i2 from "../../assets/img/universalCommerce/platform/2.svg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Professional = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Professional Services
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/services" className="text-white">
              Services -{" "}
            </a>

            <a className="text-white font-bold">Professional</a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Professional Services
        </h2>
        <p className="mb-8">
          Professional services in the software sector refer to a range of
          specialized, knowledge-based services provided by professionals to
          help businesses plan, implement, manage, and optimize their software
          systems. These services are crucial for organizations looking to
          leverage technology to achieve their business goals. Here are some key
          areas within professional services in the software sector:
        </p>

        <p className="mb-8">
          Professional services in the software sector are often delivered by
          consulting firms, IT service providers, and specialized agencies.
          These services play a crucial role in helping businesses navigate the
          complexities of software development, implementation, and ongoing
          support.
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
                  Consulting Services
                </h2>
                <p className="mb-8">
                  Consulting services in the software sector encompass a broad
                  range of advisory and guidance offerings aimed at helping
                  organizations make informed decisions, solve problems, and
                  optimize their use of technology. Software consulting services
                  can be provided by independent consultants, consulting firms,
                  or specialized agencies. Here are some key aspects of
                  consulting services in the software sector:
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
                  Software Development and Integration
                </h2>
                <p className="mb-8">
                  Software development and integration are critical components
                  of building effective and cohesive information systems within
                  an organization. These processes involve creating custom
                  software applications, ensuring their functionality, and
                  integrating them with existing systems to streamline
                  operations. Here's a breakdown of the key aspects of software
                  development and integration
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

export default Professional;
