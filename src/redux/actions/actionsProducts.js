import { typesProducts } from "../types/types"

export const actionAddSync =(producto)=>{
    return {
        type: typesProducts.add,
        payload: producto
    }

}