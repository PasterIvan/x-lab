export const getActualSearchParams = (searchParams: URLSearchParams): any => {
  return {
    page: searchParams.get("page") || "0",
    count: searchParams.get("count") || "4",
    keyword: searchParams.get("keyword") || undefined,
  };
};
