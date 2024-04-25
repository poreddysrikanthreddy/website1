import React from "react";
import i1 from "../../assets/img/partners/algolia/3208ec2b-a320-4d6f-9c93-780feffcb7a6.jpg";
import i2 from "../../assets/img/partners/prismatic/acmeerp-integration.png";
import i3 from "../../assets/img/partners/algolia/6460e025-0409-4e97-9b0c-95c704540b03.jpg";
import i4 from "../../assets/img/partners/plasmic/p4.png";
import i5 from "../../assets/img/partners/plasmic/p5.png";
const Algolia = () => {
  return (
    <div>
      <div className="w-full h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <h2 className="text-white font-bold text-3xl text-center md:text-left">
            Algolia
          </h2>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/" className="text-white">
              Home -{" "}
            </a>

            <a href="/" className="text-white">
              Partners -{" "}
            </a>

            <a className="text-white font-bold">Algolia </a>
          </nav>
        </div>
      </div>
      <div className=" h-auto  p-8  border-b-2 container max-w-5xl mx-auto px-2">
        <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">
          Algolia
        </h2>
        <p className="mb-8">
          Algolia is a leading search and discovery platform designed to
          optimize user experiences on websites and applications. Leveraging
          powerful search algorithms and advanced features like instant search
          and autocomplete, Algolia enhances the speed and relevance of search
          results. Its flexible and developer-friendly APIs facilitate seamless
          integration for quick deployment. Algolia's robust infrastructure
          supports real-time indexing and updates, ensuring accurate and dynamic
          search results. With features like typo tolerance and geolocation,
          Algolia empowers businesses to deliver highly responsive and
          personalized search experiences, driving user engagement. Trusted by
          major brands, Algolia is a go-to solution for organizations seeking
          efficient and scalable search capabilities.
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
                <h2 className="text-blue font-semibold text-3xl font-poppins mb-6">
                  Features of Algolia
                </h2>
                <p className="mb-8">
                  Algolia, a prominent search and discovery platform, offers a
                  suite of features for optimizing user experiences. Leveraging
                  powerful search algorithms, it provides instant search and
                  autocomplete functionalities, enhancing search result speed
                  and relevance. The flexible and developer-friendly APIs enable
                  quick integration, ensuring seamless deployment. Algolia's
                  robust infrastructure supports real-time indexing, allowing
                  for dynamic updates. With features like typo tolerance and
                  geolocation, businesses can deliver highly responsive and
                  personalized search experiences. Trusted by major brands,
                  Algolia is recognized for its efficiency and scalability,
                  making it an ideal choice for organizations aiming to elevate
                  their search capabilities and provide superior user
                  engagement.
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
                  Integration with Contentful
                </h2>
                <p className="mb-8">
                  Algolia seamlessly integrates with Contentful, a content
                  management platform, to enhance search and retrieval of
                  dynamic content. By leveraging Algolia's powerful search
                  capabilities, Contentful users can optimize the speed and
                  relevance of their content searches. The integration allows
                  for real-time indexing and synchronization, ensuring that any
                  updates or changes in Contentful are reflected immediately in
                  Algolia's search index. This combination empowers businesses
                  to deliver fast and accurate search experiences for their
                  dynamic content, providing a cohesive and efficient solution
                  for managing and retrieving content seamlessly across
                  platforms. The Algolia-Contentful integration streamlines
                  content search processes, enhancing user satisfaction and
                  engagement.
                </p>
              </div>
              <div>
                <img
                  src={i3}
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

export default Algolia;
