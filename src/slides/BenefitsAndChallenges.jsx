const CONTENT = [
  {
    title: "Benefits of Caching",
    content: [
      {
        title: "Reduced Latency",
        content:
          "Caching significantly decreases the time it takes to access data, leading to faster response times for user requests.",
      },
      {
        title: "Decreased Network Traffic",
        content:
          "By storing frequently accessed data locally, caching reduces the amount of data that must be transmitted over a network, thereby decreasing network congestion.",
      },
      {
        title: "Lower Load on Primary Data Stores",
        content:
          "Caching reduces the number of queries to primary data sources like databases, decreasing their load and potentially increasing lifespan.",
      },
      {
        title: "Improved Performance",
        content:
          "Applications and systems often experience a general performance boost, as retrieving data from a cache is typically faster than accessing it from primary storage.",
      },
      {
        title: "Increased Throughput",
        content:
          "Systems can handle more data and user requests in a given time due to the efficiency gains from caching.",
      },
      {
        title: "Data Availability",
        content:
          "In some caching strategies, data can still be available even if the primary data source is temporarily unavailable.",
      },
    ],
  },
  {
    title: "Challenges of Caching",
    content: [
      {
        title: "Cache Coherence",
        content:
          "Ensuring that data remains consistent across multiple caches in a distributed system.",
      },
      {
        title: "Cache Invalidation",
        content:
          "Deciding when and how to update or remove data in the cache, especially when the original data changes.",
      },
      {
        title: "Stale Data",
        content:
          "Handling scenarios where data in the cache is outdated compared to the primary data source.",
      },
      {
        title: "Cache Sizing",
        content:
          "Determining the optimal size of the cache to balance performance gains with resource usage.",
      },
      {
        title: "Cache Eviction Policies",
        content:
          "Choosing appropriate algorithms for which data to keep in the cache and which to evict when the cache is full.",
      },
      {
        title: "Data Locality",
        content:
          "Ensuring data is stored in a cache close to where it is most frequently accessed to minimize latency.",
      },
      {
        title: "Scalability",
        content:
          "Ensuring the cache can scale as the amount of data and the number of users increase.",
      },
      {
        title: "Warm-up Time",
        content:
          "Managing the time for a cache to “warm up” and become effective after being cleared or created.",
      },
    ],
  },
  {
    title: "Challenges of Caching",
    content: [
      {
        title: "Thundering Herd Problem",
        content:
          "This occurs when a cached item expires, and multiple clients or processes simultaneously attempt to regenerate the same cache item, causing a surge in load on the data store or compute resources.",
      },
      {
        title: "Cache Penetration",
        content:
          "This happens when queries for non-existent data (not in cache or primary storage) repeatedly bypass the cache and hit the database, potentially leading to performance degradation.",
      },
      {
        title: "Big Key Problem",
        content:
          "Arises when a single cache key is associated with a large amount of data, leading to inefficiencies in cache utilization and potential performance issues.",
      },
      {
        title: "Hot Key Challenge",
        content:
          "Refers to a situation where a few keys are accessed much more frequently than others, causing load imbalances and potential bottlenecks in the caching system.",
      },
    ],
  },
];

export const BenefitsAndChallenges = ({ order = 0 }) => (
  <div className="h-screen px-32">
    <div className="flex h-full flex-col gap-y-6 bg-white p-16 shadow-lg">
      <span className="mb-9 text-5xl font-extrabold">
        {CONTENT[order]["title"]}
      </span>
      <ul className="flex flex-col gap-y-6 ps-4 text-xl">
        {CONTENT[order]["content"].map(({ title, content }) => (
          <li key={title}>
            <b className="text-2xl">{title}:</b> {content}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
