import fire from '../fire';


export const getInfo = () => {
  console.log(fire);
  return axios.get('http://localhost:3000/data')
           .then(res => {
              return res.data[0];
           });
};
