import { useEffect } from 'react';
import axios from 'axios';
const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios(productsUrl)
      const res2 = await axios(randomUserUrl)
      console.log(res1.data)
    } catch (error) {
      console.log(error.response)
    }
    console.log('global axios instance');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
