import React from "react";
import i1 from "../../assets/img/partners/plasmic/p1.png";
import i2 from "../../assets/img/partners/plasmic/p2.webp";
import i3 from "../../assets/img/partners/plasmic/p3.png";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Plasmic = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Plasmic
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Plasmic </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          What is Plasmic?
        </h2>
        <p className="mb-8">Plasmic is a visual builder for the web.</p>

        <p className="mb-8">
          You can use it to build web apps and websites, and you can use it as a
          visual content management system.
        </p>

        <p className="mb-8">
          It lets anyone, regardless of coding background, design and build
          rapidly—code optional.
        </p>
        <p className="mb-8">
          At the same time, it is powerful, with a deep feature set that scales
          to complex projects. And with codebase integration, it removes the
          ceiling typically associated with low-code tools.
        </p>
        <section className="home-about lg:py-5 py-10">
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
                  What can I use Plasmic for?
                </h2>
                <p className="mb-8">
                  The most common use cases for Plasmic are:
                  <ul>
                    <li>
                      <span className="font-bold">
                        Building web applications:
                      </span>{" "}
                      internal tools, customer portals, SaaS products, etc.
                    </li>

                    <li>
                      <span className="font-bold">Building websites:</span>{" "}
                      personal portfolios, blogs, marketing websites, online
                      stores, landing pages, etc.{" "}
                    </li>
                    <li>
                      <span className="font-bold">Content management:</span>{" "}
                      also about building websites, but based in a codebase;
                      non-developers drag and drop components provided by
                      developers, using Plasmic as a visual headless CMS.{" "}
                    </li>
                  </ul>
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
                  What makes Plasmic special among no-code/low-code tools?
                </h2>
                <p className="mb-8">
                  A common criticism of no-code/low-code tools is their
                  complexity ceiling. You’ll inevitably—sometimes very
                  quickly—run up against the limits of what the tool lets you
                  do.
                </p>
                <p className="mb-8">
                  Another common criticism of no-code/low-code tools is that
                  they create unmaintainable spaghetti messes.
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
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-8 items-center">
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
                  what Plasmic provides?
                </h2>
                <p className="mb-8">
                  - Full design freedom and speedy modern design tool UX.
                  <br />
                  - Create rich interactions and behavior.
                  <br />
                  - Connect with arbitrary data source and backend integrations.
                  <br />
                  - Content creator mode: give specific collaborators a more
                  simplified and restricted editing experience.
                  <br />
                  - Deep collaboration with multiplayer, branching,
                  cross-project imports, and multi-workspace organizations.
                  <br />
                  - Integrate with codebases for unlimited flexibility and
                  scale.
                  <br />- Drag/drop and visually manipulate your own React
                  components—design systems, interactions, data, behavior, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-8 items-center">
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  How does Plasmic integrate into a codebase?
                </h2>
                What you build in Plasmic can be consumed flexibly. The most
                common use case is consuming Plasmic designs like CMS content
                over an API, but you can also generate code into your codebase,
                or even publish pages to platforms like Shopify. Plasmic aims to
                be versatile and integrate into any environment.
                <br />
                Furthermore, your existing code and components can become
                building blocks in Plasmic that you can drag/drop and configure.
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
        <section className="home-about lg:py-20 py-10">
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
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Starting from Figma
                </h2>
                <p className="mb-8">
                  Using Figma? Great! Creating from scratch in Plasmic has a
                  number of advantages, but if you have existing Figma designs,
                  you can import them into Plasmic using Plasmic’s best-in-class
                  Figma-to-web converter. Note that this just gets you to a
                  starting point, as you’ll often want to spend more effort to
                  turn static drawings into a real usable site.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Plasmic;
