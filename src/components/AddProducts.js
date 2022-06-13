import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useForm } from '../Hooks/useForm';
import { actionAddSync } from '../redux/actions/actionsProducts';


const AddProducts = () => {

    const dispatch= useDispatch()
    const [formValue, handleInputChange, reset] = useForm({
        id: '',
        nombre: '',
        precio: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
        dispatch(actionAddSync(formValue))
        reset()
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name ="id"
                    placeholder="Ingrese Id" 
                    onChange={handleInputChange}
                    value={formValue.id}
                    />
                     <input
                    type="text"
                    name ="nombre"
                    placeholder="Ingrese Nombre de Producto" 
                    onChange={handleInputChange} 
                    value={formValue.nombre}              
                    />
                     <input
                    type="text"
                    name ="precio"
                    placeholder="Precio del Producto en Pesos" 
                    onChange={handleInputChange}
                    value={formValue.precio}
                    />
                    <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};

export default AddProducts;