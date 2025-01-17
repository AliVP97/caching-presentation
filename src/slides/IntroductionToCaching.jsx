import cacheLatencyImage from "../assets/1682263585167.png";

export const IntroductionToCaching = () => (
  <div className="h-screen pe-96">
    <div className="flex h-full flex-col gap-y-6 bg-white p-16 shadow-lg">
      <span className="mb-9 text-5xl font-extrabold">
        Introduction To Caching
      </span>
      <div className="flex h-full flex-col justify-between rounded-3xl bg-gray-100 p-16">
        <span className="text-justify text-xl">
          The cache is a layer that stores a subset of data, typically the most
          frequently accessed or essential information, in a location quicker to
          access than its primary storage location. This caching strategy is
          used to reduce latency and improve the efficiency of data retrieval
          across the distributed system.
        </span>
        <img src={cacheLatencyImage} />
      </div>
    </div>
  </div>
);
