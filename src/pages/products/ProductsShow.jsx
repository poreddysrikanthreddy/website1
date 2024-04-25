import React from "react";

// img import
import prod1 from "../../assets/img/products/commerce.webp";
// import prod2 from "../../assets/img/products/uc.webp";
import prod2 from "../../assets/img/home/uc01.jpg";
import prod3 from "../../assets/img/products/ai.webp";
import prod4 from "../../assets/img/products/med.webp";

export default function ProductsShow() {
  return (
    <section className="lg:py-16 py-8">
      <div className="container max-w-6xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins text-center m-4">
          Featured Digital Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center">
            <a href="#live">
              <img
                src={prod1}
                alt="product img"
                className="w-3/3 rounded-lg mb-4"
              />
              <h4
                className="text-blue font-semibold text-2xl font-poppins mb-4"
                style={{ textAlign: "center" }}
              >
                Dr. Commerce
              </h4>
              <p style={{ textAlign: "center" }}>
                Dr. Commerce heals your e-commerce woes and prescribe the latest
                digital innovation that supercharges your eCommerce technology.
              </p>
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={prod2}
                alt="product img"
                className="w-3/3 rounded-lg mb-4"
              />
              <h4
                className="text-blue font-semibold text-2xl font-poppins mb-4"
                style={{ textAlign: "center" }}
              >
                Universal Commerce
              </h4>
              <p style={{ textAlign: "center" }}>
                Universal Commerce was formed from a desire to eliminate
                challenges and to empower business to take control of their
                digital channels.
              </p>
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={prod3}
                alt="product img"
                className="w-3/3 rounded-lg mb-4"
              />
              <h4
                className="text-blue font-semibold text-2xl font-poppins mb-4"
                style={{ textAlign: "center" }}
              >
                AI Virtual Agent
                <br />
                Marco
              </h4>
              <p style={{ textAlign: "center" }}>
                Cnetric Universal Virtual Agent is a cost-effective method to
                help your business provide exceptional, consistent customer
                service at an affordable price.
              </p>
            </a>
          </div>
          <div>
            <a href="#live">
              <img
                src={prod4}
                alt="product img"
                className="w-3/3 rounded-lg mb-4"
              />
              <h4
                className="text-blue font-semibold text-2xl font-poppins mb-4"
                style={{ textAlign: "center" }}
              >
                LiveMed <br />
                TeleHealth
              </h4>
              <p style={{ textAlign: "center" }}>
                Medical device innovation is transforming the industry by
                increasing access to care and lowering patient costs.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
