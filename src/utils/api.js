import axios from "axios";



const BASE_URL = "https://youtube138.p.rapidapi.com";


const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "c2fec001a6msh23ee9373f2ae380p1dc493jsnf58ff3f4e974",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};


export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
} 