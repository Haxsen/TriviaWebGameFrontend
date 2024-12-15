// src/services/api.js
import axios from 'axios';

const API_URL = "https://localhost:7218/api/Trivia"; // Adjust this URL as needed

export const getTriviaQuestions = async () => {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
};
