import { configureStore } from "@reduxjs/toolkit";
import { uiDataReducer } from "./reducers/uiDataReducer";

// const rootReducer = combineReducers({
//     dataReducer: dataReducer,
//     settingReducer: settingReducer
// })
// const store = createStore(rootReducer)

// export default store


export const store = configureStore({
    reducer :{
        uiDataReducer: uiDataReducer.reducer
    }
})

