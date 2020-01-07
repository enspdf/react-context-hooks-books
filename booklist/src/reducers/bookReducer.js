import uuid from 'uuid/v1';

const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

export const bookReducer = (state, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }];
        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
};