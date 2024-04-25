import React from "react";
import { Link } from "react-router-dom";
import Clients from "../pages/home/ClientsSection";

export default function Index() {
  return (
    <footer>
      {/* <Clients /> */}
      {/* footer top */}
      <div className="lg:py-12 py-8 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-2">
          <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 lg:gap-5 gap-2">
            <div>
              <h3 className="text-blue text-3xl font-bold font-poppins mb-3">
                Cnetric Global Inc.
              </h3>
              <p className=" text-gray-700">
                Accelerate innovation to empower your brand with technology to
                excel.
              </p>
              {/* <div>
                <h5 className="text-xl font-semibold">Open Hours:</h5>

                <p className=" text-gray-700">Mon – Sat: 8 am – 5 pm,</p>
                <p className=" text-gray-700">Sunday: CLOSED</p>
              </div> */}
            </div>
            <div>
              <h5 className="text-blue font-medium font-poppins text-2xl mb-3">
                Contact Us
              </h5>
              <ul>
                <li className="flex gap-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h5 className="text-xl font-semibold">Email</h5>
                    <a href="#ds">sales@cnetric.com</a>
                  </div>
                </li>
                <li className="flex gap-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h5 className="text-xl font-semibold">Phone</h5>
                    <a href="#f">+1 (800) 792-0355</a>
                  </div>
                </li>
                <li className="flex gap-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    <h5 className="text-xl font-semibold">Address</h5>
                    <a href="#fs">
                      2021 Guadalupe Street Dobie Center, Suite 260, Austin, TX
                      78705
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue font-medium font-poppins text-2xl mb-3">
                Company
              </h5>
              <ul>
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/platform">Technologies</Link>
                </li>
                <li className="mb-2">
                  <Link to="/platform">Partners</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about">Our Company</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue font-medium font-poppins text-2xl mb-3">
                Our Policy
              </h5>
              <ul>
                <li className="mb-2">
                  <Link to="/coming-soon">Terms of use</Link>
                </li>
                <li className="mb-2">
                  <Link to="/coming-soon">Privacy policy</Link>
                </li>
                {/* <li className="mb-2">
                  <Link to="/coming-soon">Refund policy</Link>
                </li> */}
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      {/* <div className="pt-4 pb-4 bg-gray-100">
        <p className="text-center font-medium">
          &copy; {new Date().getFullYear()}. All Rights Reserved by{" "}
          <span className="text-sky-700"> @Cnetric Global.</span>
        </p>
      </div> */}
      <div class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span> */}
          <p className="text-center font-medium">
            &copy; {new Date().getFullYear()}. All Rights Reserved by{" "}
            <span className="text-sky-700"> @Cnetric Global Inc.</span>
          </p>
          <ul class="flex  items-center mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-center">
            <li>
              <a
                href="https://www.facebook.com/cnetricenterprisesolutions"
                target="_blank"
                class="hover:underline m-9 md:m-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cnetricglobalinc/?originalSubdomain=in"
                target="_blank"
                class="hover:underline m-9 md:m-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/cnetrices?lang=en"
                target="_blank"
                class="hover:underline m-9 md:m-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@cnetricglobalinc3081/featured"
                target="_blank"
                class="hover:underline m-9 md:m-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </li>
            {/* <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
