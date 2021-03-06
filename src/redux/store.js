// import { configureStore} from  '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import contactsReducer from './contacts/contacts-reducer';


// // const contactsPersistConfig = {
// //   key: 'contacts',
// //   storage,
// //   blacklist: ['filter'],
// // }



// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),

//   logger,
// ];


// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// const stores = { store, persistor }

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactApi } from './contacts/contactsSlice';
import contactsReducer from './contacts/contacts-reducer';
 
 const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware
  ],
});

setupListeners(store.dispatch)

export default store;

