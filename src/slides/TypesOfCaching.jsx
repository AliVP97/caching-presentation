import cacheTypesSchema from "../assets/1682269756130.avif";
import cacheTypesCostSchema from "../assets/1682269756129.png";

const CONTENT = [
  {
    title: "Client-Side Caching",
    content:
      "Caching web content in a browser or device to accelerate content retrieval.",
  },
  {
    title: "CDN",
    content:
      "Distributing content across multiple geographic locations to improve access speed.",
  },
  {
    title: <span className="text-lg">Load Balancer/API Gateway</span>,
    content:
      "Balancing incoming network traffic and requests across multiple servers and potentially caching these requests.",
  },
  {
    title: "Application",
    content:
      "Including CPU Cache, In-memory Cache, Shared Memory Cache, and Disk Cache.",
  },
  {
    title: "Distributed Cache",
    content: `Sharing cache across multiple systems or services. Sharding techniques: including Key-Based Sharding, Hash-Based Sharding, Consistent Hashing`,
  },
  {
    title: "Full-text Search",
    content: "Indexing and searching through documents or logs.",
  },
];

export const TypesOfCaching = ({ order = 0 }) => {
  return (
    <div className="h-screen pe-64">
      <div className="flex h-full flex-col gap-y-6 bg-white p-16 shadow-lg">
        <span className="mb-9 text-5xl font-extrabold">Types of Caching</span>
        <div className="flex flex-wrap gap-9">
          {
            [
              CONTENT.map(({ title, content }) => (
                <div
                  key={title}
                  className="flex h-56 w-80 flex-col rounded-3xl bg-gray-100 p-8"
                >
                  <span className="mb-4 text-justify text-xl font-bold">
                    {title}
                  </span>
                  <div className="text-justify">{content}</div>
                </div>
              )),
              <img key="2" className="mx-auto h-5/6" src={cacheTypesSchema} />,
              <img
                key="3"
                className="mx-auto h-5/6"
                src={cacheTypesCostSchema}
              />,
            ][order]
          }
        </div>
      </div>
    </div>
  );
};
