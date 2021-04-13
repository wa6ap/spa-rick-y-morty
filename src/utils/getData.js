let random = Math.round(Math.random() * (34 - 1) + 1);
const API_PAGE = "https://rickandmortyapi.com/api/character/?page="+random;
const API = "https://rickandmortyapi.com/api/character/";
console.log(API_PAGE);

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API_PAGE;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error: " + error);
  }
};

export default getData;
