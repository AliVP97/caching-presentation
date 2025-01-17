import { usePage } from "../hooks";

const CONTENT = [
  {
    title: "Introduction To Caching",
    page: 3,
  },
  {
    title: "Key Terms Of Caching",
    page: 4,
  },
  {
    title: "Types Of Caching",
    page: 6,
  },
  {
    title: "Top Caching Strategies",
    page: 9,
  },
  {
    title: "Cache Eviction Policies",
    page: 14,
  },
  {
    title: "Cache Invalidation",
    page: 17,
  },
  {
    title: "Benefits And Challenges",
    page: 19,
  },
];

export const TableOfContent = () => {
  const { setPage } = usePage();

  return (
    <div className="h-screen ps-80">
      <div className="flex h-full flex-col gap-y-6 bg-white p-16 shadow-lg">
        <span className="mb-9 text-7xl font-extrabold">Table of contents</span>
        <div className="flex flex-col gap-y-4 text-2xl">
          {CONTENT.map(({ title, page }) => (
            <div
              key={title}
              className="flex cursor-pointer justify-between rounded border-2 border-transparent hover:border-slate-400"
              onClick={(e) => {
                e.stopPropagation();
                setPage(page);
              }}
            >
              <span>{title}</span>
              <span>{page}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
