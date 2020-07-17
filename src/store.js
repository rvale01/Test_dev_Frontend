import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from './redux/reducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: "root",    
  storage: storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, logger, promise]

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)
export const persistor = persistStore(store)