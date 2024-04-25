import React from "react";
import i1 from "../../assets/img/partners/xano/p1.png";
import i2 from "../../assets/img/partners/xano/p2.png";
import i3 from "../../assets/img/partners/xano/p3.png";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const Xano = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Xano
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Xano </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        {/* <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Engineering Services
        </h2>
        <p className="mb-8">
          The ability to curate your commerce experience using best-in-breed
          microservices, with access to the tools you want and need—nothing
          more, nothing less—is a compelling argument for modern, highly complex
          retail brands.
        </p>

        <p className="mb-8">
          For brands with complex operations or nonstandard needs, the
          modularity of Composable Commerce can decrease development time,
          speeding up time-to-value. These MACH architected digital commerce
          platforms focus on composable architecture by offering the ability for
          business leaders to take a more modular, best-of-breed approach.
        </p>

        <p className="mb-8">
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Xano
                </h2>
                <p className="mb-8">
                  Xano is a no-code and low-code development platform that
                  empowers users to build robust applications without extensive
                  coding. With its intuitive interface and drag-and-drop
                  functionality, Xano simplifies the development process,
                  offering database management, API creation, and business logic
                  automation. Developers can rapidly design and deploy scalable
                  web and mobile applications using Xano's visual tools,
                  reducing the need for manual coding. The platform's real-time
                  collaboration features facilitate teamwork, and its seamless
                  integration capabilities ensure compatibility with various
                  services. Xano provides a user-friendly environment for
                  creating feature-rich applications efficiently, making it a
                  valuable tool for both experienced developers and those new to
                  programming.
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
                  Features of Xano
                </h2>
                <p className="mb-8">
                  When you remove the restraints from your developers and
                  marketers you are empowering your team to deliver
                  extraordinary digital experience. For an omnichannel
                  experience, you need a seamless presentation on multiple
                  screen sizes (smartwatch, mobile, tablet, laptop, desktop, and
                  kiosk). Not to mention all the new channels like IOT, voice
                  assistants, wearables, AR/VR, AI Bots, Social Commerce and any
                  new channels that tomorrow brings.
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
                  Powerful, Secure, Scalable Infrastructure
                </h2>
                <p className="mb-8">
                  Xano stands as a unique No-Code backend solution,
                  distinguished by its provision of a fully managed
                  infrastructure that offers reliability from project initiation
                  to scalable growth. It excels in simplifying the development
                  journey, ensuring a dependable foundation for application
                  creation and expansion. The platform's commitment to a managed
                  infrastructure implies seamless operational efficiency,
                  allowing users to focus on innovation without concerns about
                  backend complexities. Xano's versatility shines through as it
                  accommodates both initial project phases and subsequent
                  scaling, providing a robust and hassle-free environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Xano;
