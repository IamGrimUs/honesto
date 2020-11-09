import axios from "axios";

export const questionsAPI = axios.create({
  baseURL: "https://frontend-exercise-api.netlify.app/.netlify/functions/server/questions",
});

export const usersAPI = axios.create({
  baseURL: "https://frontend-exercise-api.netlify.app/.netlify/functions/server/users",
});
