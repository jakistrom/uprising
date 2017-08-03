export const getInfo = () => {

  return axios.get('http://localhost:3000/data')
           .then(res => {
              return res.data[0];
           });
};
