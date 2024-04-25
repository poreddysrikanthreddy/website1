import React from "react";
import i1 from "../../assets/img/partners/elasticsearch/97145490-7ae7-45f1-afeb-d59e61f5e86e.jpg";
import i2 from "../../assets/img/partners/elasticsearch/fb14b75c-0532-4b46-ae0b-e2ec06739ff8.jpg";
import i3 from "../../assets/img/universalCommerce/platform/3.svg";
import i4 from "../../assets/img/universalCommerce/platform/4.svg";
import i5 from "../../assets/img/universalCommerce/platform/5.svg";
const ElasticSearch = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            ElasticSearch
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">ElasticSearch </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          ElasticSearch
        </h2>
        <p className="mb-8">
          Elasticsearch stands as the core element within the free and open
          Elastic Stack, offering a distributed, RESTful search, and analytics
          engine. Designed to handle a diverse array of use cases, Elasticsearch
          efficiently centralizes data, ensuring rapid search responses, finely
          tuned relevance, and scalable, powerful analytics. Positioned at the
          heart of the Elastic Stack, it not only provides lightning-fast search
          capabilities but also supports the seamless integration of various
          data sources. This versatile engine adapts to the evolving needs of
          users, creating a robust foundation for comprehensive data management,
          analysis, and retrieval, all underlining its pivotal role within the
          Elastic Stack ecosystem.
        </p>
        <section className="home-about lg:py-20 py-10">
          <div className="container max-w-5xl mx-auto px-2">
            <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
              <div>
                <img
                  src={i2}
                  alt="About our agency"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                {/* <p className="uppercase text-pink mb-3">About Us</p> */}
                <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
                  Features of ElasticSearch
                </h2>
                <p className="mb-8">
                  Elasticsearch, a pivotal component of the Elastic Stack,
                  boasts versatile features as a distributed, RESTful search and
                  analytics engine. Offering scalability, it efficiently
                  addresses diverse use cases by centrally storing and
                  retrieving data with lightning-fast search capabilities. The
                  engine's fine-tuned relevancy ensures precision in results,
                  while its adaptability supports seamless integration of
                  various data sources. Elasticsearch's distributed nature
                  ensures resilience and high availability, crucial for handling
                  large datasets. With robust analytics and real-time
                  processing, it provides actionable insights.
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
                  Elasticsearch excels in integrations, seamlessly connecting
                  with a myriad of technologies. Its adaptability is evident
                  through compatibility with popular data visualization tools
                  such as Kibana, facilitating insightful analysis. Integration
                  with Logstash streamlines data processing and enhances data
                  pipeline capabilities, while Beats enables lightweight data
                  shippers for various sources. Elasticsearch integrates
                  effortlessly with diverse cloud platforms like AWS and Azure,
                  ensuring flexibility in deployment. Moreover, its
                  compatibility with programming languages like Java and Python
                  extends its reach to diverse development environments. This
                  extensive integration ecosystem empowers users to incorporate
                  Elasticsearch into their existing infrastructure, creating a
                  cohesive and efficient data management and analytics
                  environment.
                </p>
              </div>
              <div>
                <img
                  src={i1}
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

export default ElasticSearch;
