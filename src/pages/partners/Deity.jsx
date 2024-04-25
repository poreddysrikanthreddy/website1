import React from "react";
import i1 from "../../assets/img/partners/Deity/Screenshot 2024-01-05 173435.png";
import i2 from "../../assets/img/partners/Deity/Screenshot 2024-01-05 173952.png";
// import i3 from "../../assets/img/universalCommerce/platform/3.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Celligo = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Deity
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Deity </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Deity
        </h2>
        <p className="mb-8">
          dedicated to revolutionizing the ecommerce landscape. Their mission is
          to transform online businesses by introducing unparalleled
          scalability, flexibility, and extensibility, all while mitigating
          risks and eliminating the need for disinvestment. Deity envisions a
          world where ecommerce transcends its current limitations, providing
          businesses with the tools to expand limitlessly. Through their
          innovative approach, they aim to empower online enterprises to thrive
          and adapt dynamically. To delve deeper into their offerings and
          vision, visit the website to explore the comprehensive solutions Deity
          offers for shaping the future of ecommerce.
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
                  Engage the transformative capabilities of our Commerce
                  Composer, a dynamic tool enabling seamless connection and
                  orchestration of data flows between external sources and
                  internal systems. Elevate your digital front-end experiences,
                  crafting a user journey that captivates and exceeds
                  expectations. This innovative solution empowers businesses to
                  effortlessly integrate diverse systems, fostering agility and
                  adaptability. Unleash the full potential of your online
                  presence, achieving unparalleled synergy between technology
                  and user experience. Explore the possibilities and redefine
                  your commerce landscape through Deity's cutting-edge PaaS
                  solutions.
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
                  Compose outstanding digital experiences to
                </h2>
                <p className="mb-8">
                  Deity, the infinitely flexible composer, stands as the epitome
                  of a customer-centric approach for burgeoning and
                  forward-thinking ecommerce merchants. At the forefront of
                  innovation, Deity offers a platform that adapts to the unique
                  needs of fast-growing businesses, ensuring unparalleled
                  flexibility. With a relentless focus on customer satisfaction,
                  Deity empowers merchants to navigate the dynamic landscape of
                  ecommerce seamlessly. Whether it's scaling operations,
                  embracing emerging trends, or enhancing user experiences,
                  Deity's commitment to flexibility and adaptability becomes the
                  cornerstone for success.
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

export default Celligo;
