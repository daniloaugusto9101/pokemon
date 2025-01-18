import axios from "axios";
// import { env } from "./env";

const defaultEnv = "production";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  //   headers: {
  //     Authorization: `Bearer ${env[defaultEnv].theMovieDBToken}`,
  //   },
});
