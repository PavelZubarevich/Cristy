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

export const getProducts = async (limit = 20, skip = 0) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products/categories');
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
