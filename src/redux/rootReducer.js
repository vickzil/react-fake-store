import { combineReducers } from 'redux';
import shoppingReducer from './shopping/shopping-reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// PERSIST CONFIG
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shop']
}
// ROOT REDUCERS COMBINED
const rootReducer = combineReducers({
    shop: shoppingReducer
});

export default persistReducer( persistConfig, rootReducer)