import { configureStore } from "@reduxjs/toolkit";
import { reducerContacts } from './contacts/contactsReducer';


const store = configureStore({
    reducer: { contacts: reducerContacts },

});

export default store;