const CONTENT = [
  [
    {
      title: "First In, First Out (FIFO)",
      content:
        "Evicts the oldest items in the cache first, regardless of their usage frequency.",
    },
    {
      title: "Least Recently Used (LRU)",
      content:
        "Evicts the least recently accessed items first, assuming that items not accessed recently are less likely to be accessed in the future.",
    },
    {
      title: "Most Recently Used (MRU)",
      content:
        "Opposite of LRU, it evicts the most recently used items first. This can be useful when the most recent items are less likely to be reaccessed.",
    },
  ],
  [
    {
      title: "Least Frequently Used (LFU)",
      content:
        "Prioritizes eviction of least frequently accessed items, assuming frequent access implies future relevance.",
    },
    {
      title: "Most Frequently Used (MFU)",
      content:
        "Eviction policy is a cache eviction strategy where the cache identifies and removes the data items that are accessed most frequently.",
    },
    {
      title: "Random Replacement (RR)",
      content:
        "Randomly selects a cache item to evict, which can be simpler to implement and effective in specific scenarios.",
    },
  ],
  [
    {
      title: "Size-Based Eviction",
      content:
        "Evicts items based on their size to manage the memory footprint, often used in combination with other policies.",
    },
  ],
];

export const CacheEvictionPolicies = ({ order = 0 }) => {
  return (
    <div className="h-screen pe-64">
      <div className="flex h-full flex-col gap-y-11 bg-white p-16 shadow-lg">
        <span className="text-5xl font-extrabold">Cache Eviction Policies</span>
        <span className="text-justify text-xl">
          Cache eviction policies are critical in caching systems due to the
          limited size of caches; they ensure optimal use of available space by
          determining which data to retain or discard. These policies enhance
          overall cache performance by keeping the most relevant data accessible
          while maintaining data accuracy and consistency by removing outdated
          or less frequently used information.
        </span>
        <div className="flex flex-wrap gap-9">
          {CONTENT[order].map(({ title, content }, index) => (
            <div
              key={title}
              className="flex h-96 w-80 flex-col gap-y-3 rounded-3xl bg-gray-100 p-8"
            >
              <span className="text-2xl font-black">
                0{3 * order + index + 1}
              </span>
              <span className="text-justify text-xl font-bold">{title}</span>
              <div className="text-justify">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
