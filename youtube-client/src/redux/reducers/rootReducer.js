import { CHANGE_SETTING, GET_RESPONSE, SORT_BY_COUNT, SORT_BY_DATE, SORT_BY_INPUT, CHANGE_SEARCH_VALUE,} from '../actions/actionsType';

const initialState = {
  isSetting: false,
  response: null,
  responseOld: null,
  search: '',
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
        return {
          ...state,
          search: action.event.target.value,
        }
    case CHANGE_SETTING:
        return {
          ...state,
          isSetting: !state.isSetting,
        }
    case GET_RESPONSE:
        return {
          ...state,
          response: action.cards,
          responseOld: action.cards,
        }
    case SORT_BY_INPUT:
      if(state.responseOld){
        let text = action.event.target.value
        let sortCards = state.responseOld.filter(item => item.snippet.title.toLowerCase().includes(text.toLowerCase()));
        return {
          ...state,
          response: sortCards,
        }
      }
      return {
        ...state,
      }
    case SORT_BY_COUNT:
      if(state.response){
        document.querySelectorAll('.setting-sort_name').forEach(item => item.classList.remove('active'));
        action.event.target.classList.add('active');
        let sortCards = [...state.response];
        sortCards.sort((first,second) => second.statistics.viewCount - first.statistics.viewCount);
        return {
          ...state,
          responseOld: sortCards,
          response: sortCards,
        }
      }
      return {
        ...state,
      }
    case SORT_BY_DATE:
        if(state.response){
          document.querySelectorAll('.setting-sort_name').forEach(item => item.classList.remove('active'));
          action.event.target.classList.add('active');
          let sortCards = [...state.response];
          sortCards.sort((first,second) => +new Date(second.snippet.publishedAt) - +new Date(first.snippet.publishedAt));
          return {
            ...state,
            responseOld: sortCards,
            response: sortCards,
          }
        }
      return {
        ...state,
      }   
    default:
      return state;
  }
}

// let videoResponse = fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&type=video&part=snippet&maxResults=15&q=js`);
// videoResponse
//   .then(item => item.json())
//   .then(element => element.items.map(elem => elem.id.videoId))
//   .then(elem => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&id=${elem}&part=snippet,statistics`))
//   .then(item => item.json())
//   .then(elem => responseInfo = elem.items);

// async function makeResponse(query) {
//   let videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&type=video&part=snippet&maxResults=15&q=${query}`);
//   let videoData = await videoResponse.json();
//   let videoId = videoData.items.map(elem => elem.id.videoId);
//   let infoResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&id=${videoId}&part=snippet,statistics`);
//   let cardsData = await infoResponse.json();
//   responseInfo = cardsData.items;
// }
