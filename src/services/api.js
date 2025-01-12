import axios from 'axios';

// we should use a config class for env vars but this is just a quick way
const API_URL = process.env.REACT_APP_API_URL || "https://localhost:7218/api/Trivia";

export const getTriviaQuestions = async () => {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
};
