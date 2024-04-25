import React from "react";

// img import
import AboutImg from "../../assets/img/home/about-cnetric.png";

export default function AboutSection() {
  return (
    // <section className='home-about lg:py-24 py-12'>
    //   <div className="container max-w-6xl mx-auto px-2">
    //     <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
    //       <div>
    //           <img src={ AboutImg } alt="about img" className="max-w-full h-auto" />
    //       </div>
    //       <div>
    //         <p className="uppercase text-pink mb-3">About Us</p>
    //         <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">About Agency</h2>
    //         <p className='mb-8'>
    //           At our web development agency, we pride ourselves on providing top-notch web development services that meet the needs of our clients. We have a team of experienced web developers who are skilled in a variety of programming languages, including HTML, CSS, JavaScript, PHP, and more.
    //           <br />
    //           We work closely with our clients to understand their business goals, target audience, and desired outcomes.
    //         </p>
    //         <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
    //           Our web development agency is committed to providing high-quality web development services that meet the needs of our clients. We take pride in our work and are dedicated to helping our clients succeed online.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="home-about lg:py-24 py-12">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-start">
          <div>
            <img src={AboutImg} alt="about img" className="max-w-full h-auto" />
          </div>
          <div>
            <p className="uppercase text-pink mb-3">
              Disrupting Digital Commerce
            </p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
              About Cnetric Inc.
            </h2>
            <p className="mb-8">
              Is Digital Commerce hard? Is the current pace innovation, the
              fragmentated solutions landscape, significantly undermining your
              customer experience? And perhaps the high implementation and
              maintenance costs are beginning to hurt as well? The good news is,
              Cnetric can change this for you.
              <br />
              We are a global systems integrator, with over 20+ years of
              experience, disrupting this hard world of digital commerce. Our
              core engines of change are our products, Dr. Commerce and
              Universal Commerce, which diagnose and unify best of
              enterprise-grade digital commerce software, under one contract.
              This offers our customers a true choice of software vendors and
              cloud hosting environments, at significantly reduced costs.
            </p>
            <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
              <span className="uppercase text-pink mb-3">Austin, Texas</span>
              <br />
              Based out of Austin, Texas, Cnetric Global Inc., has 15 offices in
              as many countries. Our global presence and commitment towards
              localization, ensures that clients get consistent, market
              appropriate solutions, in the shortest turnaround time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
