import React, { useState } from "react";

import logo from "../assets/img/logo/logo.svg";
import { flushSync } from "react-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const [isMenuOpen6, setIsMenuOpen6] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
    setIsMenuOpen2(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
    setIsMenuOpen5(false);
    setIsMenuOpen6(false);
  };
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
    setIsMenuOpen1(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
    setIsMenuOpen5(false);
    setIsMenuOpen6(false);
  };
  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
    setIsMenuOpen2(false);
    setIsMenuOpen1(false);
    setIsMenuOpen4(false);
    setIsMenuOpen5(false);
    setIsMenuOpen6(false);
  };
  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
    setIsMenuOpen2(false);
    setIsMenuOpen1(false);
    setIsMenuOpen3(false);
    setIsMenuOpen5(false);
    setIsMenuOpen6(false);
  };
  const toggleMenu5 = () => {
    setIsMenuOpen5(!isMenuOpen5);
    setIsMenuOpen2(false);
    setIsMenuOpen1(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
    setIsMenuOpen6(false);
  };

  const toggleMenu6 = () => {
    setIsMenuOpen6(!isMenuOpen6);
    setIsMenuOpen2(false);
    setIsMenuOpen1(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
    setIsMenuOpen5(false);
  };

  return (
    <>
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 navbar-start">
          <a
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse nav-item nav-link"
          >
            <img src={logo} class="h-12" alt="Cnetric Logo" />
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class={`w-5 h-5 ${isMenuOpen ? "hidden" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            {/* Cross icon */}
            <svg
              class={`w-5 h-5 ${isMenuOpen ? "" : "hidden"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            class={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={toggleMenu1}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Platforms{"  "} {/* Here's the space */}
                  {isMenuOpen1 ? (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 5 4 -4 4 4" // This is the up arrow
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" // This is the down arrow
                      />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleMenu2}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Solutions+{"  "} {/* Here's the space */}
                  {isMenuOpen2 ? (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 5 4 -4 4 4" // This is the up arrow
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" // This is the down arrow
                      />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleMenu3}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services+{"  "} {/* Here's the space */}
                  {isMenuOpen3 ? (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 5 4 -4 4 4" // This is the up arrow
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" // This is the down arrow
                      />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleMenu4}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Industry+{"  "} {/* Here's the space */}
                  {isMenuOpen4 ? (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 5 4 -4 4 4" // This is the up arrow
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" // This is the down arrow
                      />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleMenu5}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Partners+{"  "} {/* Here's the space */}
                  {isMenuOpen5 ? (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 5 4 -4 4 4" // This is the up arrow
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" // This is the down arrow
                      />
                    </svg>
                  )}
                </button>
              </li>
              {/* <li>
                <a
                  href="/about"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li> */}
              <li>
                <button
                  onClick={toggleMenu6}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us+{"  "} {/* Here's the space */}
                  {isMenuOpen6 ? (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 5 4 -4 4 4" // This is the up arrow
                      />
                    </svg>
                  ) : (
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4" // This is the down arrow
                      />
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div
            class={`${isMenuOpen1 ? "show" : "hidden"}
            grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-4 md:px-6`}
          >
            <ul>
              <h1
                class="block p-1 rounded-lg"
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                Universal Commerce
              </h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    Platform (Universal Composer for Composable Commerce)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/suit"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    Suite (Pre-composed cross-Industry Solutions)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/embedded"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    Embedded iPaaS with 1000+ connectors (Make)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/celonis"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    Process Mining and Execution Management (Celonis)
                  </div>
                </a>
              </li>
            </ul>
            <ul>
              <h1
                class="block p-1 rounded-lg text-blue"
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                Dr.Commerce
              </h1>
              <li>
                <a
                  href="/dashboard"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    Dashboard (To analyse Commerce KPIs)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/advisory"
                  class="block p-1 rounded-lg "
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    Advisory to Improve & Optimise Commerce KPIs
                  </div>
                </a>
              </li>
            </ul>
            <ul>
              <h1
                class="block p-1 rounded-lg"
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                SupplyStock
              </h1>
              <li>
                <a
                  href="/buyerSupplier"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Buyer & Supplier Marketplace</div>
                </a>
              </li>
              <li>
                <a
                  href="/innovateNow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">InnovateNow</div>
                </a>
              </li>
              {/* <li>
                <a
                  href="/innovateNow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    (Platform to innovate with AI/ML)
                  </div>
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/innovateNow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Blockchain</div>
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/innovateNow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">IoT</div>
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/innovateNow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Robotics</div>
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/innovateNow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">(partnership with Iterate.ai)</div>
                </a>
              </li> */}
            </ul>
            <ul>
              <h1
                class="block p-1 rounded-lg"
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                LiveMed
              </h1>
              <li>
                <a
                  href="/telehealth"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Telehealth Platform</div>
                </a>
              </li>
              <li>
                <a
                  href="/healthcare"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Healthcare Marketplace</div>
                </a>
              </li>
              <li>
                <a
                  href="/diagnostics"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Remote Diagnostics</div>
                </a>
              </li>
            </ul>
          </div>
          <div
            class={`${isMenuOpen2 ? "show" : "hidden"}
            grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-10`}
          >
            <ul>
              <li>
                <a
                  href="/DrCommerce"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Dr. Commerce</div>
                </a>
              </li>
              <li>
                <a
                  href="/Interactive"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Interactive</div>
                </a>
              </li>
              <li>
                <a
                  href="/Commerce"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Commerce</div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/SupplyChain"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Supply Chain</div>
                </a>
              </li>
              <li>
                <a
                  href="/Commerce"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Commerce</div>
                </a>
              </li>
              {/* <li>
                <a
                  href="/AI-Chatbot"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">AI Chatbot</div>
                </a>
              </li> */}
            </ul>
            <ul>
              {/* <li>
                <a
                  href="/SupplyChain"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Supply Chain</div>
                </a>
              </li> */}
              <li>
                <a
                  href="/Cloud"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Cloud</div>
                </a>
              </li>
              <li>
                <a
                  href="/AI-Chatbot"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">AI Chatbot</div>
                </a>
              </li>
            </ul>
          </div>
          <div
            class={`${isMenuOpen3 ? "show" : "hidden"}
            grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-12`}
          >
            <ul>
              <li>
                <a
                  href="/services/professional"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Professional Services</div>
                </a>
              </li>
              <li>
                <a
                  href="/services/engineering"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Engineering Services</div>
                </a>
              </li>
              {/* <li>
                <a
                  href="/services/managed"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Managed Services</div>
                </a>
              </li> */}
            </ul>
            <ul>
              <li>
                <a
                  href="/services/managed"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Managed Services</div>
                </a>
              </li>
              <li>
                <a
                  href="/services/MachAcademy"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    MACH Academy / Training Services
                  </div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/services/ODC"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">
                    ODC / Staff Augmentation / HTP
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div
            class={`${isMenuOpen5 ? "show" : "hidden"}
            grid max-w-screen-xl px-4 py-14 mx-auto text-gray-900 dark:text-white sm:grid-cols-5 md:px-12`}
          >
            <ul>
              <h1
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                Interactive
              </h1>
              <li>
                <a
                  href="/partners/plasmic"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Plasmic</div>
                </a>
              </li>
              <li>
                <a
                  href="/partners/bravo"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Bravo</div>
                </a>
              </li>
              <li>
                <a
                  href="/parners/flutterflow"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Flutterflow</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Backendless</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Xano</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Prismatic</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Alumio</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Make</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Celligo</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Deity</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">PowerApps / Microsoft</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">MetaStudio / Meta</div>
                </a>
              </li>
            </ul>
            <ul>
              <h1
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                Commerce
              </h1>
              <h1 style={{ color: "black", fontWeight: "bold" }}>
                Composable (Mach Commerce)
              </h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Emporix</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">CommerceTools</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">ElasticPath</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">CommerceLayer</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Spryker</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">VTEX</div>
                </a>
              </li>
              <h1 style={{ color: "black", fontWeight: "bold" }}>Headless</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Shopify Plus</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Big Commerce</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">SAP Commerce Cloud</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Salesforce Commerce Cloud</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Adobe Commerce Cloud</div>
                </a>
              </li>
            </ul>
            <ul>
              <h1
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                Ecosystem
              </h1>
              <h1 style={{ color: "black", fontWeight: "bold" }}>Search</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Algolia</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Advanced Commerce</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Sajari</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">ElasticSearch</div>
                </a>
              </li>
              <h1 style={{ color: "black", fontWeight: "bold" }}>CMS</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Contentful</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Contentstack</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Amplience</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Strapi</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Prismic</div>
                </a>
              </li>
              <h1 style={{ color: "black", fontWeight: "bold" }}>MDM</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">PIMCore</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Akeneo</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Stibo</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Salsify</div>
                </a>
              </li>
            </ul>
            <ul>
              <h1 style={{ color: "black", fontWeight: "bold" }}>POS</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Mercaux</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">GPos</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Verifone</div>
                </a>
              </li>
              <h1 style={{ color: "black", fontWeight: "bold" }}>CPQ</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Pros</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Selectica</div>
                </a>
              </li>
              <h1 style={{ color: "black", fontWeight: "bold" }}>Monoliths</h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">HCL / Commerce</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">SAP / Hybris</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Oracle / ATG</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">HCL / Commerce</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Salesforce / Demandware</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Adobe / Magento</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Shopify</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Big Commerce</div>
                </a>
              </li>
            </ul>
            <ul>
              <h1
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                Supply Chain
              </h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">IBM Sterling OMS & WMS</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">IBM Sterling B2Bi</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Fluent Commerce</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Aptos</div>
                </a>
              </li>
              <h1
                style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
              >
                Cloud
              </h1>
              <h1 style={{ color: "black", fontWeight: "bold" }}>
                Multi-Cloud
              </h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Microsoft / Azure</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Google / GCP</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Amazon / AWS</div>
                </a>
              </li>
              <h1 style={{ color: "black", fontWeight: "bold" }}>
                Hybrid-Cloud
              </h1>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">IBM Redhat Openshift</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Google Anthos</div>
                </a>
              </li>
            </ul>
          </div>
          <div
            class={`${isMenuOpen4 ? "show" : "hidden"}
            grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-12`}
          >
            <ul>
              <li>
                <a
                  href="/industry/retailDistribution"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Retail & Distribution</div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/industry/manufacturing"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Manufacturing</div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/industry/telecom"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Telecom</div>
                </a>
              </li>
            </ul>
          </div>

          <div
            class={`${isMenuOpen6 ? "show" : "hidden"}
            grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-12`}
          >
            <ul>
              <li>
                <a
                  href="/about"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Overview</div>
                </a>
              </li>
              <li>
                <a
                  href="/platform"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold"> Team </div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/aboutUS/Careers"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold">Careers </div>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/contact"
                  class="block p-1 rounded-lg"
                  style={{ color: "black", backgroundColor: "while" }}
                >
                  <div class="font-semibold"> Contact Us </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
