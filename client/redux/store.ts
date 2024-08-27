import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig={
    key:"root",
    storage:storage,

}
const combine=combineReducers({
    user:userSlice
})

const PersistReducers=persistReducer(persistConfig,combine)

export const store=configureStore({
    reducer:PersistReducers
})

export const persistor=persistStore(store)