import React from "react";
import i1 from "../../assets/img/partners/contentful/contentful.jpg";
import i2 from "../../assets/img/partners/contentful/609741b5-5094-41fc-b8d4-a04b5f276711.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Contentful = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Contentful
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Contentful </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Contentful
        </h2>
        <p className="mb-8">
          Contentful, a leading content management platform, offers a robust set
          of features for efficient and dynamic content creation. Its headless
          architecture allows content to be seamlessly delivered across multiple
          channels. Rich text editing, versioning, and workflow management
          streamline content creation and collaboration. Contentful's flexible
          content modeling accommodates diverse data structures, supporting
          complex projects. GraphQL and RESTful APIs enable developers to
          integrate and deliver content effortlessly. Asset management ensures
          centralized control over multimedia elements. With global content
          delivery network (CDN) capabilities, Contentful ensures
          high-performance content distribution worldwide.
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
                  Features of Contentful
                </h2>
                <p className="mb-8">
                  Contentful, a leading content management platform, offers a
                  versatile feature set for efficient digital content creation
                  and delivery. With an API-first approach, it enables
                  developers to seamlessly integrate and deliver content across
                  diverse channels. Contentful supports flexible content
                  modeling, accommodating various data structures. Rich text
                  editing, versioning, and workflow management streamline
                  collaboration for content creators. The platform provides
                  comprehensive asset management for multimedia elements. Its
                  search and query functionalities, coupled with real-time
                  updates, ensure dynamic and relevant content. Contentful's
                  scalability, global content delivery network (CDN), and
                  extensibility make it an ideal choice for businesses seeking a
                  modern and agile content management solution.
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
                  Contentful excels in integrations, fostering a seamless
                  collaboration with a variety of tools and services. Its
                  API-first approach allows effortless integration with various
                  front-end frameworks, ensuring dynamic content delivery.
                  Contentful integrates smoothly with popular third-party
                  services, such as eCommerce platforms, analytics tools, and
                  marketing automation solutions, enhancing its versatility. The
                  platform's compatibility with webhooks facilitates real-time
                  communication with external systems. Moreover, Contentful
                  supports integration with version control systems, enabling
                  efficient content management workflows.
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

export default Contentful;
