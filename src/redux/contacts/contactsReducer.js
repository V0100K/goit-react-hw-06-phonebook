import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    addContact,
    allContacts,
    deleteContacts,
    filterContact,
} from './contactsAction';


const reducerItem = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContacts]: (state, { payload }) => state.filter(contact => contact.id !== payload),
    [allContacts]: (_, { payload }) => payload,
});

const reducerFilter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

export const reducerContacts = combineReducers({
    items: reducerItem,
    filter: reducerFilter,
});

// const reducerItem = (state = [], { type, payload }) => {
//     switch (type) {
//         case "add/contact":
//             return [...state, payload];

//         case 'delete/contact':
//             return state.filter(contact => contact.id !== payload);

//         case 'all/contact':
//             return payload;
//         default:
//             return state;

//     }
// }

// const reducerFilter = (state = "", { type, payload }) => {
//     switch (type) {
//         case "filter/contact":
//             return payload;
//         default:
//             return state;
//     }
// }

// export const  reducerContacts = combineReducers({
//     items : reducerItem,
//     filter: reducerFilter,
// });