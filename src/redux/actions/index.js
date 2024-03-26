export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_QUERY = "SET_QUERY";

export const addToFavouritesAction = (selectedCompany) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: selectedCompany,
  };
};

export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  };
};

export const fetchData = (query) => {
  //   const [query, setQuery] = useState("");
  //   const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: SET_QUERY,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
