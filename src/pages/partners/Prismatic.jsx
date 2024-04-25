import React from "react";
import i1 from "../../assets/img/partners/prismatic/organization_and_customers.png";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/prismatic/prismatic.png";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Prismatic = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Prismatic
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Prismatic </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Prismatic
        </h2>
        <p className="mb-8">
          Prismatic refers to the quality of breaking light into its component
          colors, creating a spectrum. In optics, prismatic effects occur when
          light interacts with transparent or translucent materials, such as a
          prism. The phenomenon is characterized by the dispersion of light into
          its various wavelengths, resulting in a vibrant display of colors.
          Beyond optics, "prismatic" can also describe diversity or variety in a
          broader context, representing a range of perspectives or elements.
          Whether applied to physics or metaphorically, prismatic conveys the
          idea of a multifaceted, colorful, and diverse experience or
          phenomenon.
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
                  Prismatic's "Build Integrations Easily" feature streamlines
                  the process of creating connections between different software
                  applications. This functionality provides users with a
                  user-friendly interface and pre-built tools to seamlessly
                  integrate diverse systems. By simplifying the integration
                  workflow, Prismatic empowers users, even without extensive
                  coding expertise, to link various software and automate
                  workflows efficiently. This feature enhances productivity,
                  reduces manual tasks, and enables a more connected and
                  streamlined digital environment. With Prismatic's intuitive
                  integration capabilities, businesses can adapt and optimize
                  their software ecosystem with ease, fostering a more agile and
                  interconnected operational infrastructure.
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
                  Built by B2B software people
                </h2>
                <p className="mb-8">
                  Prismatic was born out of our founders’ experience scaling a
                  B2B software company whose product had hundreds of
                  integrations. We built Prismatic for one reason: to give B2B
                  software teams an easier way to provide integrations to their
                  customers. Our team has worked in SaaS industries like
                  healthcare, agriculture, and fintech. We know how complex
                  integrations can get in the real world, and we built Prismatic
                  to help you handle any integration that comes your way.
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

export default Prismatic;
