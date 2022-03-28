import {Movie} from '../types/movie';

export function transformMovieListAbleToSearch(data?: Movie[]) {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.map(movie => {
    return {
      ...movie,
      textForSearch: `${movie.name}|${movie.alterEgo}|${movie.comic}|${movie.description}`,
    };
  });
}
