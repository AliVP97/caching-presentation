// Write-Invalidate: When data is updated in the primary storage, corresponding cache entries are invalidated. This ensures consistency between the cache and the source.
// Change Notification: The cache listens for notifications from the data source about changes. When notified, the cache invalidates the relevant entries.
// Polling: The cache periodically checks the validity of its entries by comparing them with the source data.

const CONTENT = [
  [
    {
      title: "Time to Live (TTL)",
      content: (
        <div>
          <span>
            Data is invalidated after a specified duration. When the TTL
            expires, the cached data is either automatically removed or marked
            as invalid.,
          </span>
          <ul>
            <li>
              <b>Active expiration:</b> A background process or thread
              periodically scans the cache to check the TTL of cache entries.
            </li>
            <li>
              <b>Passive expiration:</b> Checks the TTL of a cache entry at its
              access time.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Write Invalidate",
      content:
        "When data is updated in the primary storage, corresponding cache entries are invalidated. This ensures consistency between the cache and the source.",
    },
    {
      title: "Change Notification",
      content:
        "The cache listens for notifications from the data source about changes. When notified, the cache invalidates the relevant entries.",
    },
  ],
  [
    {
      title: "Polling",
      content:
        "The cache periodically checks the validity of its entries by comparing them with the source data.",
    },
  ],
];

export const CacheInvalidation = ({ order = 0 }) => (
  <div className="h-screen pe-64">
    <div className="flex h-full flex-col gap-y-11 bg-white p-16 shadow-lg">
      <span className="text-5xl font-extrabold">Cache Invalidation</span>
      <span className="text-justify text-xl">
        In addition to removing infrequently accessed items, caches often
        contain data that becomes obsolete or stale. These outdated cache
        entries need to be identified and slated for removal.
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
