import React, { useState } from "react";
import axios from "./axios";
const API_KEY = "04ae7689fc21853d7db93ebc5e887fa0";
const external_id = [];

function movie_id({ History }) {
  History.map((movie) => {console.log(movie); return({movie})})
}


const requests = {
  fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchGeneral: `/search/movie?api_key=${API_KEY}&query=${movie_id}`
};

export default requests;
// https://api.themoviedb.org/3/movie/550?api_key=04ae7689fc21853d7db93ebc5e887fa0
// https://api.themoviedb.org/3/find/{external_id}?api_key=04ae7689fc21853d7db93ebc5e887fa0&language=en-US&external_source=imdb_id
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher