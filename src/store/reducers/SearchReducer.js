import { SEARCH_RESULT } from "../types/SearchType"

const initialState = {
    searchResult: {}
}

const SearchReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SEARCH_RESULT: {

            return { ...state, searchResult: payload }
        }

        default:
            return { ...state }
    }
}

export default SearchReducer;