import * as ActionTypes from './ActionTypes';

export const Comments = (state = {errMess: null, comments: []}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT: 
            var comments = action.payload;
            comments.id = state.comments.length;
            comments.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comments)};
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []}
        default :
            return state;
    }
};