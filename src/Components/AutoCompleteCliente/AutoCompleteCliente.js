import React, {useContext, useEffect} from "react";

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


const AutoCompleteCliente = () => {
   
    const [nameCliente, setNameCliente] = React.useState(''); // Nome do cliente


    useEffect(()=>{
        axios.get('https://gabriellgomess.com/asaas/cadastrar.php?p=2')
        .then((response) => {
            console.log(response.data.data)
            // Montando um array com os nomes dos clientes
            const client = response.data.data.map((cliente) => {
                return {label: cliente.name, id: cliente.id}
            })
            setNameCliente(client)            
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    return (
        <div>
            <Box sx={{ minWidth: 120 }}>      
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={nameCliente}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Cliente" />}
                />
            </Box>
        </div>
    );
    }

export default AutoCompleteCliente;