import fetcher from '@utils/fetcher';
import { CATEGORIES, API_BASE_URL } from '@utils/constant';

const fetchCategoriesData = (query, signal) => {
  const categoryKeys = Object.keys(CATEGORIES);
  return Promise.all(
    categoryKeys.map((category) =>
      fetcher(`${API_BASE_URL}/${category}?search=${query}`, {
        params: { search: query },
        signal
      })
    )
  ).then((data) => {
    return data.reduce(
      (acc, data, index) => ({
        ...acc,
        [categoryKeys[index]]: data
      }),
      {}
    );
  });
};

const fetchIndividualCategoryData = async (
  categoryName,
  signal,
  currentPage
) => {
  const { count } = await fetcher(`${API_BASE_URL}/${categoryName}`);
  const numberOfPagesLeft = Math.ceil((count - 1) / 10);

  const urls = [
    currentPage <= numberOfPagesLeft &&
      `${API_BASE_URL}/${categoryName}?page=${currentPage}`,
    currentPage + 1 <= numberOfPagesLeft &&
      `${API_BASE_URL}/${categoryName}?page=${currentPage + 1}`
  ];

  const results = await fetcher(urls, { signal });
  return results[0].results && results[1].results
    ? [...results[0].results, ...results[1].results]
    : [...results[0].results];
};

export { fetchCategoriesData, fetchIndividualCategoryData };
