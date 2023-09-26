import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
import axios from 'axios' 
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchdata = async ()=>{
    try {
      const res = await axios.get(url)
      const data = res.data
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    console.log('first axios request');
    fetchdata()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
