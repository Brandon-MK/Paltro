import React from 'react';
import axios from 'axios';

export const GetUserData = () => {
  axios
    .get(
      'http://192.168.0.101:5000/paltroServer/v1/accountFeed/nMqQQVTdPFj5G72zt0hX',
    )
    .then(data => {
      return data.data;
    })
    .catch(err => console.log(err));
};
