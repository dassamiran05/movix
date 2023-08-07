import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = process.env.TMDB_API_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGFlMDM4YmExYzdiYWY5MTY3MDM4OTg4YjU2ODRkYyIsInN1YiI6IjY0Y2NjNDY4NzY0Yjk5MDBjNjM4NTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SVCW2i2Ijzl3IcMZH8niII5DAyD2KKWiaZq1u_lKNkc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
