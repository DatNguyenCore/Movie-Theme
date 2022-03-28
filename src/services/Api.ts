import Apisauce from 'apisauce';

function create(BASE_URL = 'https://my-json-server.typicode.com') {
  const api = Apisauce.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const getDcSuperheroes = async () => {
    return api.get('/Isaacmeedinaa/dc-superheroes/superheroes');
  };

  return {getDcSuperheroes};
}

export default {
  create,
};
