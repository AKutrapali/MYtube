// eslint-disable-next-line no-unused-vars
import { inputSearch, maxresult, youtubeAPI} from './variable_file';

export async function getDataVideo() {
  const searchText:any = inputSearch.value;
  const url:string = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxresult}&q=${searchText}&key=${youtubeAPI}`;
  const response:any = await fetch(url);
  const data:any = await response.json();
  return data;
}