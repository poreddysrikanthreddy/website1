import React from "react";
import i1 from "../../assets/img/partners/bravo/p1.png";
import i2 from "../../assets/img/partners/bravo/p2.jpg";
import i3 from "../../assets/img/partners/bravo/p3.png";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Bravo = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Bravo
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Bravo </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          About Bravo
        </h2>
        <p className="mb-8">
          Bravo Studio is a platform designed to empower designers in
          transforming their mobile app designs into fully functional
          applications, all without the necessity of coding. Acting as a bridge
          between popular design tools like Figma and development frameworks
          like React Native, Bravo Studio allows designers to export their
          visual designs and automatically generate React Native code. This
          feature streamlines the process of turning design concepts into
          tangible, interactive mobile applications. Notably, Bravo Studio is
          known for its user-friendly approach, catering to designers who may
          not possess extensive coding expertise.
        </p>

        <p className="mb-8">
          The platform typically supports interactive components, enabling
          designers to incorporate functionality and behavior into their app
          designs without delving into complex coding tasks. Additionally, it
          may offer collaboration features, facilitating seamless cooperation
          between designers and developers throughout the app development
          journey. It's important to note that specific features and details of
          Bravo Studio can evolve over time, and checking the official Bravo
          Studio website or documentation is recommended for the latest
          information.
        </p>

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
                  Bravo Studio
                </h2>
                <p className="mb-8">
                  Since the monolithic approach has multiple constraints any
                  modification requires developers to edit the code, database,
                  business logic, and the frontend as well. This is stressful,
                  time-consuming and places your business at risk for mistakes.
                  Decoupling reduces complexity, and both your frontend and
                  backend teams can work simultaneously while independent of
                  each other.
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
                  Features of Bravo
                </h2>
                <p className="mb-8">
                  BravoStudio is a no-code development platform that empowers
                  users to design, prototype, and publish mobile applications
                  without the need for coding skills. Its user-friendly
                  interface offers design tools for creating the visual aspects
                  of mobile apps, allowing users to customize screens and
                  elements. One of its notable features is interactive
                  prototyping, enabling the simulation of the user experience to
                  refine functionality before actual development. Real data
                  integration capabilities facilitate testing with authentic
                  information.
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
                  Integrations
                </h2>
                <p className="mb-8">
                  Unlocking a new level of versatility, BravoStudio allows
                  seamless integration with third-party tools or services
                  boasting REST APIs. This connectivity provides users with the
                  freedom to harness the power of diverse platforms for various
                  purposes, from a robust backend infrastructure to a secure
                  database for storing app and user content. The flexibility and
                  control offered by Bravo empower developers and creators to
                  craft tailored app experiences, adapting to their specific
                  needs. The platform goes beyond mere design, enabling a
                  dynamic synergy with external systems to enhance functionality
                  and efficiency. Whether you aspire to build a comprehensive
                  backend to fuel your app's capabilities or seek a reliable
                  repository for managing content, BravoStudio stands as a
                  gateway to a plethora of options.
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
                  Turn your Figma design into a real app in no time
                </h2>
                Converting your Figma design into a functional app has become an
                efficient and streamlined process. Figma's collaborative design
                platform enables designers to create visually appealing
                interfaces, and with its export features, developers can
                seamlessly extract assets and design specifications. The
                compatibility with various app development frameworks
                facilitates quick coding, while the collaborative nature of
                Figma fosters communication between designers and developers,
                reducing iterations and expediting the development timeline. The
                platform's adaptability to design changes aligns with agile
                methodologies, enabling rapid prototyping and iteration.
                Overall, Figma accelerates the transition from design to a real
                app, empowering teams to deliver high-quality applications with
                speed and precision.
              </div>
              <div>
                <img
                  src={i5}
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

export default Bravo;
