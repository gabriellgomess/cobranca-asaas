import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import ListaClientes from '../../Components/ListaClientes/ListaClientes';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Tooltip from '@mui/material/Tooltip';
import { formatToCEP, isCEP } from 'brazilian-values';


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
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { register, handleSubmit, reset,  errors } = useForm();

    const onSubmit = data => {        
        // axios.post("https://gabriellgomess.com/pesquisa/api/cadastrar.php?p=1", data)
        // .then(res => {
        //     // response            
        // })  
        console.log(data)     
    };

    const handleFormatCep = (event) => {
      var cep = event.target.value
      var cepFormatado = formatToCEP(cep)
      event.target.value = cepFormatado
      setCep(cepFormatado)
      if(isCEP(cepFormatado)){
        buscaCep(cepFormatado)
      }
  }

  const buscaCep = (cep) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      console.log(response.data)
        setEndereco(response.data)
        // setClientes(response.data.data)
    })
    .catch((error) => {
        console.log(error);
    });
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tooltip title="Clientes" placement="bottom">
          <Tab icon={<PeopleAltIcon />} {...a11yProps(0)} />
        </Tooltip>
        <Tooltip title="Adicionar Cliente" placement="bottom">
          <Tab icon={<PersonAddAltOutlinedIcon />} {...a11yProps(1)} />
        </Tooltip>
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListaClientes />
      </TabPanel>
      <TabPanel value={value} index={1}>      
        <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >      
          <TextField {...register('nome')} id="nome" label="Nome" variant="standard" />
          <TextField {...register('cpf')} id="cpf" label="CPF" variant="standard" />
          <TextField {...register('phone')} id="phone" label="Fone" variant="standard" />
          <TextField {...register('email')} id="email" label="E-mail" variant="standard" />          
          <TextField {...register('mobile')} id="mobile" label="Celular" variant="standard" />
          <TextField {...register('cep')} id="cep" inputProps={{ maxLength: 9 }} onKeyUp={(event)=>handleFormatCep(event)} label="CEP" variant="standard" />
          <TextField {...register('endereco')} id="endereco" label="Endereço" variant="standard" value={endereco.logradouro || ''} onChangeText={(text) => setEndereco(text)} />
          <TextField {...register('numero')} id="numero" label="Número" variant="standard" />
          <TextField {...register('complemento')} id="complemento" label="Complemento" variant="standard" />
          <TextField {...register('bairro')} id="bairro" label="Bairro" variant="standard" value={endereco.bairro || ''} />
          <TextField {...register('cidade')} id="cidade" label="Cidade" variant="standard" value={endereco.localidade || ''} />
          <TextField {...register('estado')} id="estado" label="Estado" variant="standard" value={endereco.uf || ''} />
          <TextField {...register('emailAdicional')} id="emailAdicional" label="Email adicional" variant="standard" />
          <TextField {...register('observacoes')} id="observacoes" label="Observações" variant="standard" />
        </Box>
        <Box sx={{marginTop: '30px'}}>
          <Button type="submit" variant="contained">Cadastrar</Button>
        </Box>      
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