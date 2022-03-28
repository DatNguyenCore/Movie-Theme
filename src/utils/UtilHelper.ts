import {Superhero} from '../types/superhero';

export function transformSuperheroListAbleToSearch(data?: Superhero[]) {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.map(item => {
    return {
      ...item,
      textForSearch: `${item.name}|${item.alterEgo}|${item.comic}|${item.description}`,
    };
  });
}
