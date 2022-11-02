import axios from 'axios';

export const getAllProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getProducts = async (limit) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
