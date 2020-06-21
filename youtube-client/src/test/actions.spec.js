import * as actionType from '../redux/actions/actionsType';
import { changeSetting, sortByDate, sortByCount, sortByInput, changeSearchValue, getResponse, fetchPosts } from '../redux/actions/actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('create actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('create GET_RESPONSE when fetching data has been done', () => {
    fetchMock.getOnce(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&type=video&part=snippet&maxResults=16&q=fake`, {
      headers: { 'content-type': 'application/json' }, 
      body: { 
        items: [{id: {videoId: 1}}, {id: {videoId: 2}}, {id: {videoId: 3}}], 
        status: 'ok' },
    })

    fetchMock.getOnce(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyChA0pAtRfUmokB2Hsz3RvDN18YKt8wqCI&id=1,2,3&part=snippet,statistics`, {
      headers: { 'content-type': 'application/json' }, 
      body: { 
        items: [1,2,3], 
        status: 'ok' },
    })

    const expectedAction = [{
      type: actionType.GET_RESPONSE,
      cards: [1,2,3],
    }]

    const store = mockStore({})

    return store.dispatch(fetchPosts('fake')).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  it('changeSetting(): should create an action to set isSetting', () => {
    const expectedAction = {
      type: actionType.CHANGE_SETTING,
    }
    expect(changeSetting()).toEqual(expectedAction)
  })

  it('sortByDate(): should create an action to sort data', () => {
    const expectedAction = {
      type: actionType.SORT_BY_DATE,
      event: 'Date',
    }
    expect(sortByDate('Date')).toEqual(expectedAction)
  })

  it('sortByCount(): should create an action to sort data', () => {
    const expectedAction = {
      type: actionType.SORT_BY_COUNT,
      event: 'Count',
    }
    expect(sortByCount('Count')).toEqual(expectedAction)
  })

  it('sortByInput(): should create an action to filter data', () => {
    const expectedAction = {
      type: actionType.SORT_BY_INPUT,
      event: 'Input',
    }
    expect(sortByInput('Input')).toEqual(expectedAction)
  })

  it('changeSearchValue(): should create an action to set search', () => {
    const expectedAction = {
      type: actionType.CHANGE_SEARCH_VALUE,
      event: 'Search',
    }
    expect(changeSearchValue('Search')).toEqual(expectedAction)
  })

  it('getResponse(): should create an action to get response', () => {
    const expectedAction = {
      type: actionType.GET_RESPONSE,
      cards: 'Response',
    }
    expect(getResponse('Response')).toEqual(expectedAction)
  })
})