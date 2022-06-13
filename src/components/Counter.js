import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionDecrementSync, actionIncrementarSync, actionResetSync } from '../redux/actions/actionsCounter';

const Counter = () => {

     const {count} = useSelector(store =>store.counterStore)
     console.log(count)

    const dispacth = useDispatch()
    return (
        <div>
        <h1>Counter: {count}</h1>
            <Button onClick={()=> dispacth(actionIncrementarSync(2))}> +1 </Button>
            <Button onClick={()=> dispacth(actionDecrementSync(1))}> -1 </Button>
            <Button onClick={()=> dispacth(actionResetSync(0))}> Reset </Button>
        </div>
    );
};

export default Counter;