import { typesProducts } from "../types/types"

const initialState ={
    producto: []
}

export const ProductsReducers = (state= initialState, action) =>{
    switch (action.type) {
        case typesProducts.agregar:
            return {
                producto: [...state.producto, action.payload]
            }
             
        default:
           return state
    }

}