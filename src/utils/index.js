import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';
const developmentUrl = 'http://localhost:1337/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const getUniqueCategories = (products) => {
  return [
    'all',
    ...new Set(products.map((product) => product.attributes.category)),
  ];
};
export const getUniqueCompanies = (products) => {
  return [
    'all',
    ...new Set(products.map((product) => product.attributes.company)),
  ];
};

export const getMaximumPrice = (products) => {
  if (products.length < 1) {
    return 0;
  }
  return Math.max(...products.map((product) => product.attributes.price));
};

export const calculateTotals = (state) => {
  state.tax = 0.1 * state.cartTotal;
  state.orderTotal = state.cartTotal + state.shipping + state.tax;
};
