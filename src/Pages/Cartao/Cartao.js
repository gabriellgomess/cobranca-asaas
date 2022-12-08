import React, { useState, useEffect, useContext } from "react";
import FormCartao from "../../Components/FormCartao/FormCartao";
import MyContext from '../../context/myContext';

import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Cartao = () => {
    const { clientes, setClientes } = useContext(MyContext);


 
    return(
        <>
        <FormControl sx={{marginTop: 10}} fullWidth>                    
        <Autocomplete
            className=""
            id="nome-clientes"
            name="clientes"                            
            options={clientes.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField label="Clientes" />}
        />
        </FormControl>
        <FormCartao />
        </>
    )
}



export default Cartao;