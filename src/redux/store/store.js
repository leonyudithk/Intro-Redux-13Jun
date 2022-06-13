import { combineReducers, createStore } from "redux";
import { CountersReducers } from "../reducers/CountersReducers";
import { ProductsReducers } from "../reducers/ProductsReducers";


const reducers = combineReducers({
    counterStore: CountersReducers,
    productoStore: ProductsReducers
   
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);