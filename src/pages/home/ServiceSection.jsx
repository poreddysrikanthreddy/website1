import React from "react";
import { Link } from "react-router-dom";

// images import
// import service1 from "../../assets/img/home/service-web.png";
// import service2 from "../../assets/img/home/service-logo.png";
// import service3 from "../../assets/img/home/service-app.png";
// import service4 from "../../assets/img/home/service-ui-ux.png";
// import service4 from "../../assets/img/home/sss.jpg";
import service1 from "../../assets/img/home/services/BusinessStrategyRoadmap.jpg";
import service2 from "../../assets/img/home/services/DigitalCommerceStrategyImplementation.jpg";
import service3 from "../../assets/img/home/services/MobileApp.jpg";
import service4 from "../../assets/img/home/services/customer-experience.jpg";
import service5 from "../../assets/img/home/services/CloudTransformation.jpg";
import service6 from "../../assets/img/home/services/ProductEngineering.jpg";
import service7 from "../../assets/img/home/services/ManagedServicesandKPOs.jpg";

export default function ServiceSection() {
  return (
    <section
      className="home-service lg:py-24 py-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[380px]
      before:bg-contain before:z-[-1]"
    >
      <div className="container max-w-6xl mx-auto px-2">
        <div className="mb-14">
          <p className="uppercase text-pink text-center mb-3">
            services we're provided
          </p>
          <h2 className="text-blue font-semibold text-4xl font-poppins text-center">
            Our Awesome Technological Services
          </h2>
          <p className="uppercase text-pink text-center mb-3">
            Our mission is to deliver sustainable business outcomes for our
            clients
          </p>
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-6">
          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service1}
                alt="service"
                className="w-30 h-auto mb-10 mx-auto rounded-xl"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              Business Strategy & Roadmap
            </h4>
            <p className="mb-5">
              Innovative strategies and implementation to improve traffic,
              conversions and purchase.
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>

          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service2}
                alt="service"
                className="w-30 h-auto mb-10 mx-auto rounded-xl"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              Digital Commerce Strategy & Implementation
            </h4>
            <p className="mb-5">
              We build customised applications for specific business needs.
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>

          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service3}
                alt="service"
                className="w-30 rounded-xl h-auto mb-10 mx-auto"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              View More
            </h4>
            <p className="mb-5">
              Build awesome cross platform mobile app which can be install in
              any device (Android/iOS).
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>

          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service4}
                alt="service"
                className="w-30 h-auto mb-10 mx-auto rounded-xl"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              Digital Customer Experience
            </h4>
            <p className="mb-5">
              Enhance customer experience for targeting and sustainability.
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>
          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service5}
                alt="service"
                className="w-30 h-auto rounded-xl mb-10 mx-auto"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              Cloud Transformation
            </h4>
            <p className="mb-5">
              Cloud technology integration with minimum infrastructure costs.
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>

          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service6}
                alt="service"
                className="w-30 h-auto mb-10 mx-auto rounded-xl"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              Product Engineering
            </h4>
            <p className="mb-5">
              End-to-end services that are efficient and cost-effective.
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>

          <div className="card text-center px-6 pt-10 pb-8 shadow-md rounded-lg">
            <div>
              <img
                src={service7}
                alt="service"
                className="w-30 h-auto mb-10 mx-auto rounded-xl"
              />
            </div>
            <h4 className="font-semibold text-blue text-2xl leading-8 font-poppins mb-3">
              Managed Services and KPOs
            </h4>
            <p className="mb-5">
              Flexible and cost effective delivery services.
            </p>
            <p>
              <Link
                to="/contact"
                className="flex items-center justify-center font-medium font-poppins"
              >
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
