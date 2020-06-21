import { CHANGE_SETTING, GET_RESPONSE, SORT_BY_COUNT, SORT_BY_DATE, SORT_BY_INPUT, CHANGE_SEARCH_VALUE,} from '../actions/actionsType';

export const initialState = {
  isSetting: true,
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
