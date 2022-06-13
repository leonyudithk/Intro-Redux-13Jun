import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { actionAddSync } from '../redux/actions/actionsProducts';

const AddProducts = () => {

    const dispacth = useDispatch()
    const [formValue, handleInputChange, reset] = useForm({
        id: '',
        nombre: '',
        precio: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
        dispacth(actionAddSync(formValue))
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
                    />
                     <input
                    type="text"
                    name ="nombre"
                    placeholder="Ingrese Nombre de Producto" 
                    onChange={handleInputChange}               
                    />
                     <input
                    type="text"
                    name ="precio"
                    placeholder="Precio del Producto en Pesos" 
                    onChange={handleInputChange}
                    />
                    <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};

export default AddProducts;