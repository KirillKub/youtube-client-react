import reducer, { initialState } from '../../src/redux/reducers/rootReducer';
import * as actionType from '../../src/redux/actions/actionsType';

describe('reducer', () => {
  it('CHANGE_SEARCH_VALUE', () => {
    const action = {
      type: actionType.CHANGE_SEARCH_VALUE,
      event: { 
        target: {
          value: 'value',
        }
      }
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      search: action.event.target.value,
    })
  })

  it('CHANGE_SETTING', () => {
    const action = {
      type: actionType.CHANGE_SETTING,
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isSetting: !initialState.isSetting,
    })
  })

  it('GET_RESPONSE', () => {
    const action = {
      type: actionType.GET_RESPONSE,
      cards: [1, 2, 3],
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      response: action.cards,
      responseOld: action.cards,
    })
  })
  it('SORT_BY_INPUT without items', () => {
    const action = {
      type: actionType.SORT_BY_INPUT,
      event: { 
        target: {
          value: '1',
        }
      }
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
    })
  })
  it('SORT_BY_INPUT with items and correct input', () => {
    const action = {
      type: actionType.SORT_BY_INPUT,
      event: { 
        target: {
          value: '2',
        }
      }
    }
    let newInitialState = {
      ...initialState,
      responseOld: [{snippet: { title: '1'}}, {snippet: { title: '2'}}, {snippet: { title: '3'},}],
    }
    expect(reducer(newInitialState, action)).toEqual({
      ...newInitialState,
      response: [{snippet: { title: action.event.target.value}}]
    })
  })
  it('SORT_BY_INPUT with items and incorrect input', () => {
    const action = {
      type: actionType.SORT_BY_INPUT,
      event: { 
        target: {
          value: '1234',
        }
      }
    }
    let newInitialState = {
      ...initialState,
      responseOld: [{snippet: { title: '1'}}, {snippet: { title: '2'}}, {snippet: { title: '3'},}],
    }
    expect(reducer(newInitialState, action)).toEqual({
      ...newInitialState,
      response: []
    })
  })
})
