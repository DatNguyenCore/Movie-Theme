import Apisauce from 'apisauce';
import {Superhero} from '../types/superhero';

function create(BASE_URL = 'https://my-json-server.typicode.com') {
  const api = Apisauce.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  async function getDcSuperheroes() {
    return api.get<Superhero[]>('/Isaacmeedinaa/dc-superheroes/superheroes');
  }

  return {getDcSuperheroes};
}

export default {
  create,
};
