const productionConfig = {

};

const devConfig = {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_URL: process.env.REACT_APP_API_URL,
};

export const {
  API_KEY,
  API_URL
} = process.env.NODE_ENV === 'production' ? productionConfig : devConfig;
