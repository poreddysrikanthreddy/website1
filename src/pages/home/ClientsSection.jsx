import React from "react";

// img import
// import prod1 from "../../assets/img/products/commerce.webp";
// import prod2 from "../../assets/img/products/uc.webp";
// import prod3 from "../../assets/img/products/ai.webp";
import client1 from "../../assets/img//clients/adithya.webp";
import client2 from "../../assets/img//clients/canon.png";
// import client3 from "../../assets/img//clients/dhl.png";
// import client4 from "../../assets/img//clients/hcl.png";
import client5 from "../../assets/img//clients/ibm.png";
import client6 from "../../assets/img//clients/kroger.webp";
import client7 from "../../assets/img//clients/mahindra.png";
import client8 from "../../assets/img//clients/o2.webp";
import client9 from "../../assets/img//clients/standard.webp";
import client10 from "../../assets/img//clients/tata.webp";
import client11 from "../../assets/img//clients/yamaha.webp";
import client12 from "../../assets/img//clients/dhl01.png";

export default function Clients() {
  return (
    <section className="lg:py-8 py-8">
      <div className="container max-w-6xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins text-center m-4">
          Our Clients
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-10 gap-6">
          <div className="flex justify-center">
            <a href="#live">
              <img
                src={client1}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client2}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client12}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
           <div>
            <a href="#live">
              <img
                src={client5}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          {/* <div>
            <a href="#live">
              <img
                src={client5}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div> */}
          <div>
            <a href="#live">
              <img
                src={client6}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client7}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client8}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client9}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client10}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={client11}
                alt="client1 img"
                className="w-3/3 rounded-lg mb-4"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
