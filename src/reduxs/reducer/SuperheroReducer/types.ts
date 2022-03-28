import {Superhero} from '../../../types/superhero';

export interface SuperheroState {
  data: Superhero[];
  fetching: boolean;
  textSearch: string;
}

export interface SuperheroSuccessPayload {
  data: Superhero[];
}

export interface SearchSuperheroPayload {
  text: string;
}
