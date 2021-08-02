import axios from 'axios';
import HOMEURL from './BASEURL';
import RNFetchBlob from 'rn-fetch-blob';

export const GetShopFeed = async () => {
  try {
    const {data: response} = await axios.get(`${HOMEURL}/ShoppingFeed`); //use data destructuring to get data from the promise object
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const UploadItem = async (id, Uri) => {
  try {
    RNFetchBlob.fetch(
      'POST',
      `${HOMEURL}Shopping/Product/${id}`,
      {'Content-Type': 'multipart/form-data'},
      [
        {
          name: 'photo',
          filename: Date.now() + '.jpg',
          type: 'image/jpg',
          data: RNFetchBlob.wrap(Uri),
        },
      ],
    )
      .then(res => console.log(res.json()))
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error);
  }
};
