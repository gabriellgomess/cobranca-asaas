import React, {useState} from "react";
import "./Cartao.css";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Cartao = () => {
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

    return (
        <div className="cartao">
      
          
                    <Cards
                    cvc={card.cvc}
                    expiry={card.expiry}
                    focused={card.focus}
                    name={card.name}
                    number={card.number}
                    />
                    <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" > 
                        <TextField type='tel' {...register('number')} id="number" label="Número do Cartão" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                        <TextField type='text' {...register('name')} id="name" label="Nome do Titular" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                        <TextField type='tel' {...register('expiry')} id="expiry" label="Validade" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                        <TextField type='tel' {...register('cvc')} id="cvc" label="CVC" variant="standard" onChange={handleInputChange} onFocus={handleInputFocus} />
                       
                    </Box>
                    </div>
               

    );
}

export default Cartao;