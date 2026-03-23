import axios from 'axios';

// Create an axios instance with default settings
const api = axios.create({
    baseURL: 'https://your-render-backend-url/api', // Replace with your Render backend URL
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to upload an image
export const uploadImage = async (image: File): Promise<any> => {
    const formData = new FormData();
    formData.append('file', image);

    try {
        const response = await api.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to get a mask for an image
export const getMask = async (imageId: string): Promise<any> => {
    try {
        const response = await api.get(`/mask/${imageId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};