import axios from 'axios';
import HOMEURL from './BASEURL';

export const GetSocialFeed = async () => {
  try {
    const {data: response} = await axios.get(`${HOMEURL}/Feed`); //use data destructuring to get data from the promise object
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserFeed = async () => {
  try {
    const {data: response} = await axios.get(
      `${HOMEURL}/accountFeed/4denY16y8MSGkWO3Qys5qQbTxFm2`,
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const GetUserContent = async () => {
  try {
    const {data: response} = await axios.get(
      'http://192.168.0.101:5000/paltroServer/v1/accountContent/4denY16y8MSGkWO3Qys5qQbTxFm2',
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
