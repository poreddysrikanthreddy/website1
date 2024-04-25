import React from "react";
import i1 from "../../assets/img/partners/make/Screenshot 2024-01-05 170725.png";
import i2 from "../../assets/img/partners/make/Screenshot 2024-01-05 170814.png";
import i3 from "../../assets/img/partners/make/Screenshot 2024-01-05 171333.png";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Prismatic = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Make
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Make </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Make
        </h2>
        <p className="mb-8">
          make is a powerful automation and integration platform designed to
          connect various apps, services, and data sources. Offering a
          user-friendly visual interface, it enables users to create intricate
          automated workflows without extensive coding. make supports the
          seamless integration of diverse applications, streamlining processes
          through conditional logic and data transformations. Its versatility
          allows users to automate repetitive tasks, synchronize data, and
          enhance overall operational efficiency. With a vast library of
          pre-built integrations and the ability to customize connections,
          Integromat caters to users across different industries, empowering
          them to optimize workflows and focus on more strategic aspects of
          their business.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Features
                </h2>
                <p className="mb-8">
                  Make provides a user-friendly platform allowing you to
                  construct visual workflows that address intricate challenges
                  in alignment with your conceptualization. Starting with a free
                  trial, you can effortlessly connect apps by dragging and
                  dropping elements using the intuitive builder, creating
                  comprehensive workflows known as scenarios. The versatility of
                  Make enables the design of unlimited scenarios, accommodating
                  numerous steps and applications. Witness the seamless flow of
                  data in real time as your scenarios unfold. Additionally, you
                  have the flexibility to schedule scenarios for instant
                  execution or at specified intervals. Make empowers users to
                  streamline processes, fostering efficiency and adaptability.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Create without limits
                </h2>
                <p className="mb-8">
                  Make revolutionizes workflow creation, offering a
                  developer-like experience without requiring coding expertise.
                  With a free start, access a vast array of pre-built apps or
                  seamlessly connect to any public API through Make's HTTP app.
                  Unleash the full potential of your ideas using Make's no-code
                  toolkit, granting control over every facet of workflow
                  execution and data formatting. Choose from thousands of apps,
                  drag and drop effortlessly, and design intricate scenarios
                  with unlimited steps. Make transforms the complex into the
                  accessible, empowering users to innovate and automate with
                  ease. The platform's versatility ensures adaptability, making
                  it a valuable tool for those seeking intuitive yet powerful
                  automation solutions.
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
