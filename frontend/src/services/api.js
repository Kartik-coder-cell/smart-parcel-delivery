const API_BASE_URL = 'http://localhost:5000/api';

const request = async (endpoint, method = 'GET', data = null) => {
    const token = localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const config = { method, headers };
    if (data) config.body = JSON.stringify(data);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Operation failed verification parameters.');
    }
    return response.json();
};

export const api = {
    auth: {
        register: (payload) => request('/auth/register', 'POST', payload),
        login: (payload) => request('/auth/login', 'POST', payload)
    }
};