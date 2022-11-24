import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Cliente = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { register, handleSubmit, reset,  errors } = useForm();

    const onSubmit = data => {        
        axios.post("https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=1", data)
        .then(res => {
            // response            
        })       
    };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Clientes" {...a11yProps(0)} />
          <Tab label="Novo +" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Clientes
      </TabPanel>
      <TabPanel value={value} index={1}>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >      
          <TextField {...register('nome')} id="nome" label="Nome" variant="standard" />
          <TextField {...register('email')} id="email" label="E-mail" variant="standard" />
          <TextField {...register('phone')} id="phone" label="Fone" variant="standard" />
          <TextField {...register('mobile')} id="mobile" label="Celular" variant="standard" />
          <TextField {...register('cpf')} id="cpf" label="CPF" variant="standard" />
          <TextField {...register('cep')} id="cep" label="CEP" variant="standard" />
          <TextField {...register('endereco')} id="endereco" label="Endereço" variant="standard" />
          <TextField {...register('numero')} id="numero" label="Número" variant="standard" />
          <TextField {...register('complemento')} id="complemento" label="Complemento" variant="standard" />
          <TextField {...register('bairro')} id="bairro" label="Bairro" variant="standard" />
          <TextField {...register('emailAdicional')} id="emailAdicional" label="Email adicional" variant="standard" />
          <TextField {...register('observacoes')} id="observacoes" label="Observações" variant="standard" />
        </Box>
        <Box sx={{marginTop: '30px'}}>
          <Button type="submit" variant="contained">Cadastrar</Button>
        </Box>
      </form>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}

export default Cliente;

// {
//     "name": "Marcelo Almeida",
//     "email": "marcelo.almeida@gmail.com",
//     "phone": "4738010919",
//     "mobilePhone": "4799376637",
//     "cpfCnpj": "24971563792",
//     "postalCode": "01310-000",
//     "address": "Av. Paulista",
//     "addressNumber": "150",
//     "complement": "Sala 201",
//     "province": "Centro",
//     "externalReference": "12987382",
//     "notificationDisabled": false,
//     "additionalEmails": "marcelo.almeida2@gmail.com,marcelo.almeida3@gmail.com",
//     "municipalInscription": "46683695908",
//     "stateInscription": "646681195275",
//     "observations": "ótimo pagador, nenhum problema até o momento"
// }