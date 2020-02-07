// eslint-disable-next-line no-unused-vars
import { inputSearch, maxresult, youtubeAPI} from './variable_file';

export async function getDataVideo() {
  const searchText = inputSearch.value;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxresult}&q=${searchText}&key=${youtubeAPI}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}