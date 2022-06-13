import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const List = () => {
    // lo que va entre { viene del reducers el mi estado}
    // lo que esta entre (viene de store es el estado guardado en la store)
    const {producto} = useSelector(store => store.productoStore)
    console.log(producto)

    return (
        <div> 
         <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th># Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                       
                    </tr>
                </thead>
                <tbody>
                {
                    producto.map((prod, index)=>(
                        <tr key={index}>
                        <td>{prod.id}</td>
                        <td>{prod.nombre}</td>
                        <td>{prod.precio}</td>
                    
                    </tr>    
                    ))
                }
                    
                    
                </tbody>
            </Table>

        </div>
    );
};

export default List;