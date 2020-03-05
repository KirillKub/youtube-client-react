import {CHANGE_SETTING, GET_RESPONSE, SORT_BY_INPUT , SORT_BY_COUNT , SORT_BY_DATE, CHANGE_SEARCH_VALUE} from './actionsType'

export function changeSetting() {
  return {
    type: CHANGE_SETTING,
  }
}

export function sortByDate(event) {
  return {
    type: SORT_BY_DATE,
    event: event,
  }
}

export function sortByCount(event) {
  return {
    type: SORT_BY_COUNT,
    event: event,
  }
}

export function sortByInput(event) {
  return {
    type: SORT_BY_INPUT,
    event: event,
  }
}

export function changeSearchValue(event) {
  return {
    type: CHANGE_SEARCH_VALUE,
    event: event,
  }
}

export function getResponse(cards) {
  return {
    type: GET_RESPONSE,
    cards: cards
  }
}

export function fetchPosts(query) {
  return (dispatch) => {
    return fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&type=video&part=snippet&maxResults=16&q=${query}`)
    .then(res => res.json())
    .then(elements => elements.items.map(elem => elem.id.videoId))
    .then(id => fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&id=${id}&part=snippet,statistics`))
    .then(res => res.json())
    .then(elem => dispatch(getResponse(elem.items)))
  }
}

