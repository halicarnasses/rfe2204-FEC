// by serach input
const filterBySearch = (keyword, list) => {
  const filteredList = list.filter(item => item.body.indexOf(keyword) !== -1
  );
  return filteredList;
}
export default filterBySearch;