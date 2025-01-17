const CONTENT = [
  {
    title: "Cache Aside (Lazy Loading)",
    content:
      "Also known as 'Lazy Loading', this strategy involves loading data into the cache on demand. When an application requests data, it first checks the cache. If the data is not found (cache miss), it is fetched from the database and stored in the cache for future requests.",
    image: "/images/cache-aside.avif",
    pros: [
      "Prevents unnecessary data from being loaded into the cache.",
      "fine-grained control over what is cached.",
    ],
    cons: [
      "This can lead to increased latency for cache misses as the application must wait for data to be loaded from the database.",
      "Requires additional complexity in application code to manage caching logic.",
    ],
  },
  {
    title: "Read Through",
    content:
      "In this approach, data is automatically loaded into the cache from the database when there is a cache miss. The application only interacts with the cache and not directly with the database for read operations.",
    image: "/images/read-through.avif",
    pros: [
      "Simplifies application logic as the caching layer handles data loading.",
      "Ensures that only requested data is loaded into the cache, saving space.",
    ],
    cons: [
      "Initial read operations may be slower due to cache misses and subsequent database access.",
      "The cache can become a bottleneck if it is not efficiently managed.",
    ],
  },
  {
    title: "Write Around",
    content:
      "When data is written, it is written directly to the database and not to the cache. The cache is only updated when data is read.",
    image: "/images/write-around.avif",
    pros: [
      "Reduces cache churn by avoiding caching data that is infrequently read.",
      "Minimizes the risk of cache and database getting out of sync.",
    ],
    cons: [
      "Can lead to slower read operations following a write, as the data must be loaded into the cache from the database.",
      "May increase database load since every write goes directly to the database.",
    ],
  },
  {
    title: "Write Back (Write Behind)",
    content:
      "Data is first written to the cache and then, after a certain amount of time or under certain conditions, written back to the database. This allows for batch updates.",
    image: "/images/write-back.avif",
    pros: [
      "Improves write performance as operations are done quickly in the cache.",
      "Reduces database load by batching write operations.",
    ],
    cons: [
      "Risk of data loss if the cache fails before data is written back to the database.",
      "Complexity in ensuring that the cache and database are eventually synchronized.",
    ],
  },
  {
    title: "Write Through",
    content:
      "Data is written simultaneously to the cache and the database. This ensures data consistency between the cache and database.",
    image: "/images/write-through.avif",
    pros: [
      "Guarantees data consistency as writes to the cache and database are synchronous.",
      "Easy to implement and understand.",
    ],
    cons: [
      "Can lead to higher latency for write operations as they must be completed in both cache and database.",
      "Increased load on the database for every write operation.",
    ],
  },
];

export const TopCachingStrategies = ({ order = 0 }) => {
  const { title, content, image, pros, cons } = CONTENT[order];

  return (
    <div className="h-screen ps-48">
      <div className="flex h-full flex-col gap-y-6 bg-white p-16 shadow-lg">
        <span className="mb-9 text-5xl font-extrabold">
          Top Caching Strategies
        </span>
        <div className="flex flex-col gap-y-3">
          <div className="grid grid-cols-3">
            <div className="flex w-80 flex-col rounded-3xl bg-gray-100 p-8">
              <span className="mb-4 text-justify text-xl font-bold">
                {title}
              </span>
              <div className="text-justify">{content}</div>
            </div>
            <img className="col-span-2 h-[340px]" src={image} />
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            {[pros, cons].map((points, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${index === 0 ? "bg-green-200" : "bg-red-200"}`}
              >
                <div className="mb-4 text-justify text-xl font-bold">
                  {index === 0 ? "Pros" : "Cons"}
                </div>
                <ul className="flex flex-col gap-y-4 ps-4">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
