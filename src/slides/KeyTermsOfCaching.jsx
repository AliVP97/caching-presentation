const CONTENT = [
  [
    {
      title: "Cache Hit",
      content:
        "Occurs when the requested data is found in the cache, allowing for faster data retrieval.",
    },
    {
      title: "Cache Miss",
      content:
        "This happens when the requested data is not in the cache, necessitating fetching the data from its primary storage location.",
    },
    {
      title: "Cache Eviction",
      content:
        "The process of removing data from the cache, typically to make space for new data.",
    },
    {
      title: "Cache Staleness",
      content:
        "Refers to the situation where the data in the cache is outdated compared to the data in the primary storage.",
    },
    {
      title: "Cache Warm-Up",
      content:
        "The process of preloading the cache with data before it is actively used to avoid cache misses in the early stages of usage.",
    },
  ],
  [
    {
      title: "Cache State",
      content: (
        <ul className="flex flex-col gap-y-4 ps-4 text-lg">
          <li>
            <b>Hot:</b> Cache contains data that is being accessed very
            frequently and recently.
          </li>
          <li>
            <b>Warm:</b> Cache is not as actively used as a hot cache but still
            contains relatively frequently accessed data.
          </li>
          <li>
            <b>Cold:</b> Cache is first initialized and has not yet had any data
            loaded.
          </li>
        </ul>
      ),
    },
  ],
];

export const KeyTermsOfCaching = ({ order = 0 }) => {
  return (
    <div className="h-screen pe-64">
      <div className="flex h-full flex-col gap-y-6 bg-white p-16 shadow-lg">
        <span className="mb-9 text-5xl font-extrabold">
          Key Terms of Caching
        </span>
        {
          [
            <div key="1" className="flex h-full flex-col flex-wrap gap-9">
              {CONTENT[order].map(({ title, content }) => (
                <div
                  key={title}
                  className="flex h-56 w-80 flex-col rounded-3xl bg-gray-100 p-8"
                >
                  <span className="mb-4 text-justify text-xl font-bold">
                    {title}
                  </span>
                  <div className="text-justify">{content}</div>
                </div>
              ))}
            </div>,
            <div key="2" className="flex flex-wrap gap-9">
              {CONTENT[order].map(({ title, content }) => (
                <div
                  key={title}
                  className="flex h-56 flex-col rounded-3xl bg-gray-100 p-8"
                >
                  <span className="mb-4 text-justify text-xl font-bold">
                    {title}
                  </span>
                  <div className="text-justify">{content}</div>
                </div>
              ))}
            </div>,
          ][order]
        }
      </div>
    </div>
  );
};
