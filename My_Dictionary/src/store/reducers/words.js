import { ADD_WORDS , DELETE_WORDS } from "../actions/actionTypes";

const initialState = {
    words: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORDS:
            return {
                ...state,
                words: action.words
            };
            case DELETE_WORDS:
                return {
                    ...state,
                    words: state.words.filter(words => {
                        return words.key !== action.key;
                    })
                };
                default:
                    return state;
    }
};

export default reducer;