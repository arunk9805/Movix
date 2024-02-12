import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    // Authorization: "Bearer" + TMDB_TOKEN,
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjFmMDM5Zjg2NWU1OWFiMGRlYTRmMzBiYjQwMzRmYSIsInN1YiI6IjY1YmVmMDI0NWNkMTZlMDE3YzljNzgxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iJsnqHVGdydDSaEOEmsajgriMtjrfg7-kWatT7ItCDY",
};

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        }) 
        return data;
    }catch(err) {
        console.log(err);
        return err;
    }
}