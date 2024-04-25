import React from "react";
// import i1 from "../../assets/img/industry/Manufacturing/m01.svg";
// import i2 from "../../assets/img/universalCommerce/platform/2.svg";
// import i3 from "../../assets/img/universalCommerce/platform/3.svg";
// import i4 from "../../assets/img/universalCommerce/platform/4.svg";
// import i5 from "../../assets/img/universalCommerce/platform/5.svg";

let careersData = [
  {
    id: 1,
    job: "Salesforce Dev and Admin",
    des: "Salesforce, Apex classes, triggers, visualforce pages, test classes, web services.",
    exp: "4 - 6 yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 2,
    job: "Java Developer",
    des: "java Core, Spring Framework, Database SQL, Hibernate, Spring, vendor integrations",
    exp: "5+ yrs",
    loc: "Bangalore",
    remarks: "",
  },
  {
    id: 3,
    job: ".Net Developer with Azure",
    des: "	.Net MVC, .Net Core, Web API, SQL Server, Azure Cloud, Winforms, AGILE",
    exp: "	8+ yrs",
    loc: "	Bangalore",
    remarks: "",
  },
  {
    id: 4,
    job: "Drupal Developer",
    des: "Drupal CMS, HTML/HTML5, CSS/CSS3, JavaScript/jQuery",
    exp: "4 - 6 yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 5,
    job: "ReactJS Developer",
    des: "ReactJS, JavaScript, HTML5 and CSS3,RESTful APIs",
    exp: "  5+ yrs",
    loc: "  Bangalore",
    remarks: "",
  },

  {
    id: 6,
    job: "ETL Spark",
    des: " Spark and Dataframes using Python or Scala, Data Lake, Star Schema",
    exp: " 4+ yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 7,
    job: "SAP Business Objects",
    des: "in SAP BusinessObjects Business Intelligence, Redshift, Jasper",
    exp: "3+ yrs",
    loc: "Bangalore",
    remarks: "Flexible to work in any shift",
  },

  {
    id: 8,
    job: "Network Administrator",
    des: "Cisco network products, Palo Alto, Riverbed, Administration and troubleshooting of LAN/WAN/WLAN networks, Routing protocols configuration and troubleshooting",
    exp: "4+ yrs",
    loc: "Bangalore",
    remarks: "Shifting/ On-call",
  },

  {
    id: 9,
    job: "Database Administrator",
    des: "DBA	Microsoft-SQL Servers 2000 to 2016, OS Server:",
    exp: "3-7 yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 10,
    job: "Incident Manager",
    des: "Incident Management, Problem & Change Management and IT Operations",
    exp: "3+ yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 11,
    job: "L2 O365 Collaboration Admin (NEW)",
    des: "MS O365 functionality and Administration, Scripting, DNS, Google G Suite functionality",
    exp: "4+ yrs",
    loc: "Bangalore",
    remarks: "",
  },
  {
    id: 12,
    job: "L3 Cloud/ OS admin Wintel",
    des: "Senior OS Wintel/VMWare,(configuration, troubleshooting) in VMWare Administration",
    exp: "5-10 yrs",
    loc: "Bangalore",
    remarks: "VCP / MCSA Win2012 certified.",
  },

  {
    id: 13,
    job: "Patching and Antivirus Admin (NEW)",
    des: "Akamai CDN, DNS/Domain name management.",
    exp: "3-5 yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 14,
    job: "L3 OS Linux Admin",
    des: "Linux, iInstallation, administration, and troubleshooting, Linux RedHat Enterprise 6 to 7, HP-UX operating systems, Windows Server 2003-2019,OS Client",
    exp: "3-7 yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 15,
    job: "Level 1.5 Service Desk - English Speaker",
    des: "IT Help Desk, problem tracking, phone consulting, voicemail,Can speak English	",
    exp: "3+ yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 16,
    job: "Service Desk Specialist - French speaker",
    des: "IT Help Desk, problem tracking, phone consulting, voicemail,Can speak French and English",
    exp: "3+yrs",
    loc: "Bangalore",
    remarks: "24x7 services",
  },

  {
    id: 17,
    job: "Coremedia Consultant",
    des: "CoreMedia Content Cloud (CMCC) front-end-development workflow and architecture",
    exp: " 3+ yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 18,
    job: " Commercetools Consultant",
    des: " Commercetools,Java, spring, Springboot, Webflux, Microservices, Talon, Ecommerce platforms",
    exp: "3+ yrs",
    loc: " Bangalore",
    remarks: "",
  },
  {
    id: 19,
    job: "ReactJS Developer",
    des: "ReactJS, React Native, Redux, React Hooks,HTML, CSS, JavaScript, jQuery, Flux, Webservices Implementation",
    exp: " 3+ yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 20,
    job: "NodeJs Developer",
    des: "NodeJs, Node Red , microservices ,API development with Mongo DB",
    exp: "3+ yrs",
    loc: "Bangalore",
    remarks: "",
  },
  {
    id: 21,
    job: "Core Java Developer/Consultant",
    des: "Java, spring, Springboot, Webflux, Java 8; Microservices, Talon, Commercetools, Ecommerce platforms",
    exp: "3-8 yrs",
    loc: "Bangalore",
    remarks: "",
  },
  {
    id: 22,
    job: "Finance Manager",
    des: "Prepare periodic analytics for income statement, balance sheet and budget to actual variance, MIS reports, Payroll management",
    exp: " 2+ yrs",
    loc: "Bangalore",
    remarks: "",
  },

  {
    id: 23,
    job: " HCL Commerce Senior Consultant",
    des: "Min. 5 years of experience in IBM WCS / HCL Commerce v7.x, v8.x and V9.x. Commercial project experience a must. V9.x project experience required and v8.x to v9.x migration experience a plus. Knowledge of ElasticSearch a plus.",
    exp: " 5+ yrs",
    loc: "Bangalore",
    remarks:
      "Can consider candidates who have v9.x project experience and also migration experience from v8.x to v9.x.",
  },
  {
    id: 24,
    job: "HCL Commerce Architect",
    des: " Min. 7 years of experience in IBM WCS / HCL Commerce v7.x, v8.x and V9.x. Commercial project experience a must. V9.x project experience required and v8.x to v9.x migration experience a plus Knowledge of MACH architecture and ElasticSearch a plus",
    exp: "7+ yrs",
    loc: "Bangalore",
    remarks:
      "Can consider candidates who have v9.x project experience and also migration experience from v8.x to v9.x.",
  },

  {
    id: 25,
    job: "Sr Software Engineer	",
    des: " Devops, enkins , Bamboo, docker, kubernetes, Ansible , terraform or other config mgnt tools, Splunk, AppDynamics	",
    exp: " 3+ yrs	",
    loc: " Bangalore	",
    remarks: "Certification in DevOps Tools",
  },
];

const Careers = () => {
  return (
    <div>
      <div className="w-full h-96 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Careers
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Careers -{" "}
            </a>

            <a className="text-white font-bold">Careers </a>
          </nav>
        </div>
      </div>
      <p className="uppercase text-center mb-3 lg:py-8 py-8">
        Be a part of Cnetric by joining us! Have a look at open job positions
        with us.
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
              </th>
              <th scope="col" className="px-6 py-3">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3">
                Skills
              </th>
              <th scope="col" className="px-6 py-3">
                Experiance
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody>
            {careersData.map((each, index) => {
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {each.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {each.job}
                    </th>
                    <td className="px-6 py-4">{each.des}</td>
                    <td className="px-6 py-4">{each.exp}</td>
                    <td className="px-6 py-4"> {each.loc}</td>
                    <td className="px-6 py-4">{each.remarks}</td>
                  </tr>
                </>
              );
            })}

            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Java Developer
              </th>
              <td className="px-6 py-4">
                Java Core, Spring Framework, Database SQL, Hibernate, Spring,
                vendor integrations
              </td>
              <td className="px-6 py-4">5+ yrs</td>
              <td className="px-6 py-4"> Bangalore</td>
              <td className="px-6 py-4"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Careers;
