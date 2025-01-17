export const usePage = (maxPage = 1) => {
  const page = Number(window.location.pathname.split("/")[1]) || 1;
  const setPage = (newPage) => {
    window.location.replace(`/${newPage}`);
  };

  const increasePage = () => {
    page < maxPage && setPage(page + 1);
  };

  const decreasePage = () => {
    page > 0 && setPage(page - 1);
  };

  return { page, setPage, increasePage, decreasePage };
};
