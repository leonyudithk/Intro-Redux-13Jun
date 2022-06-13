import { typesProducts } from "../types/types"

export const actionAddSync = (formValue)=>{
    return{
        type: typesProducts.agregar,
        payload: formValue
    }
}