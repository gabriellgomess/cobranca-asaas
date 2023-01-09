import React, {useState} from "react";
import "./FormCartao.css";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const FormCartao = () => {
    const [card, setCard] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    });

    const handleInputFocus = (e) => {
        setCard({...card, focus: e.target.name});
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCard({...card, [name]: value});
    }

    const { register, handleSubmit, reset,  errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset();
    }

    const locale = {
        valid: 'validade',
        month: 'mês',
        year: 'ano',
        cvc: 'cvc',
        name: 'nome',
        number: 'número do cartão',
        
    };

    return (
        <div className="cartao">
            <Card sx={{ minWidth: 350, padding: 5, background: '#e3f2fd', marginBottom: '30px' }}>
            <Cards
            locale={locale}
            cvc={card.cvc}
            expiry={card.expiry}
            focused={card.focus}
            name={card.name}
            number={card.number}
            />
            </Card>
            <Card sx={{ minWidth: 350, padding: 5, background: '#e3f2fd' }}>
            <Box className="container-form-card" onSubmit={handleSubmit(onSubmit)} component="form"  noValidate autoComplete="off" > 
                <TextField type='tel' {...register('number')} id="number" label="Número do Cartão" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                <TextField type='text' {...register('name')} id="name" label="Nome do Titular" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                <Box>
                    <TextField type='tel' {...register('expiry')} id="expiry" label="Validade" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                <TextField type='tel' {...register('cvc')} id="cvc" label="CVC" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                </Box>
                
                <Button sx={{marginTop: 5}} type='submit' variant="contained" color="primary">finalizar</Button>
            </Box>
            </Card>
        </div>
               

    );
}

export default FormCartao;