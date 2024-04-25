import React from "react";
import i1 from "../../assets/img/partners/metastudio/20597ae3-29da-4fe0-836f-e82e394063c8.jpg";
import i2 from "../../assets/img/partners/metastudio/d40705d1-7616-46b4-be3a-0ffae2633de5.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const MetaStudio = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            MetaStudio
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">MetaStudio </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          MetaStudio
        </h2>
        <p className="mb-8">
          Dedicated to humanizing virtual interactions, our commitment extends
          to crafting immersive, innovative, and inclusive solutions. We strive
          to create engaging, entertaining, and inspiring experiences for your
          community. Leveraging cutting-edge technologies, we aim to transcend
          the digital realm, fostering meaningful connections and captivating
          narratives. By prioritizing inclusivity, our solutions cater to
          diverse audiences, ensuring everyone feels a part of the virtual
          landscape. Whether through interactive interfaces or groundbreaking
          entertainment, our mission is to enhance and elevate your community's
          digital journey, fostering a sense of connection, joy, and inspiration
          in every virtual encounter.
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
                  Features
                </h2>
                <p className="mb-8">
                  Our comprehensive services encompass the entire metaverse
                  landscape. We specialize in metaverse infrastructure,
                  providing end-to-end solutions for development and
                  maintenance. From conceptualization to monetization, our
                  expertise extends across the entire game development spectrum.
                  Leveraging a global network, we excel in marketing, PR, and
                  community building. We offer venture funding for innovative
                  founders, fostering groundbreaking projects. Our proficiency
                  spans Unity, Unreal, and MetaEngine platforms, ensuring
                  versatile development. Tailored marketplaces and wallets,
                  featuring white label options, cater to unique needs.
                  Additionally, we create branded product experiences through
                  SDK and API integrations. Embracing blockchain, we facilitate
                  seamless integrations with Ethereum, Polygon, Avalanche, and
                  more, ensuring a holistic metaverse experience.
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
                  The highly anticipated Pentaho Data Integration 9.0 (PDI) has
                  recently been unveiled, bringing forth a host of exciting
                  features. The release introduces data flow templates, a
                  revamped flow monitoring system, and enhanced support for
                  distributed environments through containers. Notably, there
                  are expanded integration capabilities with diverse data
                  sources. As PDI plays a pivotal role in our dedicated data
                  quality management solution, we have initiated thorough
                  testing of this new version. The exploration aims to uncover
                  the myriad improvements listed, ensuring seamless integration
                  and optimal performance. Stay tuned to discover the
                  advancements that promise to elevate data management and
                  integration within this innovative release.
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

export default MetaStudio;
