import { typesCounter } from "../types/types"

export const actionIncrementarSync =(num)=>{
    return {
        type: typesCounter.increment,
        payload: num
    }
}
export const actionDecrementSync =(num)=>{
    return {
        type: typesCounter.decrement,
        payload: num
    }
}
export const actionResetSync =(num)=>{
    return {
          type: typesCounter.reset,
          payload: num
        }
        }
     
    
