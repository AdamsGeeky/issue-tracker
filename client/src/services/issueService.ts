import axios from 'axios';

const API_URL = 'http://localhost:3000/api/issues';

export const createIssue = async (issue: { title: string; description: string }) => {
    await axios.post(API_URL, issue);
};

export const getIssues = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateIssue = async (issue: { id: number; title: string; description: string }) => {
    await axios.put(`${API_URL}/${issue.id}`, issue);
};

export const deleteIssue = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
