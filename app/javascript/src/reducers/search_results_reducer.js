import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions"
import { merge } from "lodash"

const defaultState = {
  products: {
    by_id: [],
    all_ids: [],
  },
  users: {
    by_id: [],
    all_ids: [],
  },
}

const searchResultsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = action.searchResults
      return newState

    default:
      return state
  }
}

export default searchResultsReducer

