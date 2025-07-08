import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const GeneratePalette = async (userPrompt) => {
  return await api.post(`/api/generate`, {userPrompt});
};
