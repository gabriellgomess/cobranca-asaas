import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormDialog.css';
import MyContext from '../../context/myContext';


export default function FormDialog(props) {
  const [editValues, setEditValues] = useState();
// No carregamento do componente, seta os valores do cliente para o estado
useEffect(() => {
    setEditValues({
      id: props.id,
      dateCreated: props.dateCreated,
      name: props.name,
      email: props.email,
      company: props.company,
      phone: props.phone,
      mobilePhone: props.mobilePhone,
      address: props.address,
      addressNumber: props.addressNumber,
      complement: props.complement,
      province: props.province,
      postalCode: props.postalCode,
      cpfCnpj: props.cpfCnpj,
      personType: props.personType,
      deleted: props.deleted,
      additionalEmails: props.additionalEmails,
      externalReference: props.externalReference,
      notificationsDisabled: props.notificationsDisabled,
      observations: props.observations,
      municipalInscription: props.municipalInscription,
      stateInscription: props.stateInscription,
      canDelete: props.canDelete,
      cannotDeleteReason: props.cannotDeleteReason,
      canEdit: props.canEdit,
      cannotEditReason: props.cannotEditReason,
      foreigtCustomer: props.foreigtCustomer,
      city: props.city,
      state: props.state,
      country: props.country
    });
}, [props]);

//      
const handleChangeValues = (values) => {
  setEditValues((prevValues) => ({
    ...prevValues,
    [values.target.id]: values.target.value,
  }));
  console.log(values.target.id);
};

  const handleClose = () => {
    props.setOpen(false);
  };
  const handleEditClient = () => {
    
    axios.put(`https://gabriellgomess.com/asaas/cadastrar.php?p=4`, {
        id:editValues.id,
        dateCreated:editValues.dateCreated,
        name:editValues.name,
        email:editValues.email,
        company:editValues.company,
        phone:editValues.phone,
        mobilePhone:editValues.mobilePhone,
        address:editValues.address,
        addressNumber:editValues.addressNumber,
        complement:editValues.complement,
        province:editValues.province,
        postalCode:editValues.postalCode,
        cpfCnpj:editValues.cpfCnpj,
        personType:editValues.personType,
        deleted:editValues.deleted,
        additionalEmails:editValues.additionalEmails,
        externalReference:editValues.externalReference,
        notificationsDisabled:editValues.notificationsDisabled,
        observations:editValues.observations,
        municipalInscription:editValues.municipalInscription,
        stateInscription:editValues.stateInscription,
        canDelete:editValues.canDelete,
        cannotDeleteReason:editValues.cannotDeleteReason,
        canEdit:editValues.canEdit,
        cannotEditReason:editValues.cannotEditReason,
        foreigtCustomer:editValues.foreigtCustomer,
        city:editValues.city,
        state:editValues.state,
        country:editValues.country   
    }).then(() => {
      props.setClientes(
        props.clientes?.map((value) => {
          return value.id === editValues.id
            ? {
              id:editValues.id,
              dateCreated:editValues.dateCreated,
              name:editValues.name,
              email:editValues.email,
              company:editValues.company,
              phone:editValues.phone,
              mobilePhone:editValues.mobilePhone,
              address:editValues.address,
              addressNumber:editValues.addressNumber,
              complement:editValues.complement,
              province:editValues.province,
              postalCode:editValues.postalCode,
              cpfCnpj:editValues.cpfCnpj,
              personType:editValues.personType,
              deleted:editValues.deleted,
              additionalEmails:editValues.additionalEmails,
              externalReference:editValues.externalReference,
              notificationsDisabled:editValues.notificationsDisabled,
              observations:editValues.observations,
              municipalInscription:editValues.municipalInscription,
              stateInscription:editValues.stateInscription,
              canDelete:editValues.canDelete,
              cannotDeleteReason:editValues.cannotDeleteReason,
              canEdit:editValues.canEdit,
              cannotEditReason:editValues.cannotEditReason,
              foreigtCustomer:editValues.foreigtCustomer,
              city:editValues.city,
              state:editValues.state,
              country:editValues.country   
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteClient = () => {
    axios.get(`https://gabriellgomess.com/asaas/cadastrar.php?p=3&id=${props.id}`)
    .then((response) => {
        toast.warn('Cliente deletado!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: () => { window.location.reload(); }
            });
    
    })
    handleClose();
  };
  console.log(editValues);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        sx={{width: '100%'}}
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
            <TextField disabled margin="dense" id="id" label="id" defaultValue={props.id} type="text" fullWidth />
            <TextField autoFocus margin="dense" id="name" label="Nome" defaultValue={props.name} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="email" label="Email" defaultValue={props.email} type="email" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="dateCreated" label="Desde" defaultValue={props.dateCreated} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="company" label="Empresa" defaultValue={props.company} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="phone" label="Telefone" defaultValue={props.phone} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="mobilePhone" label="Celular" defaultValue={props.mobilePhone} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="address" label="Endereço" defaultValue={props.address} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="addressNumber" label="Número" defaultValue={props.addressNumber} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="complement" label="Complemento" defaultValue={props.complement} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="province" label="Bairro" defaultValue={props.province} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="postalCode" label="CEP" defaultValue={props.postalCode} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cpfCnpj" label="CPF/CNPJ" defaultValue={props.cpfCnpj} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="personType" label="Tipo de Pessoa" defaultValue={props.personType} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="deleted" label="Excluido" defaultValue={props.deleted} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="additionalEmails" label="Emails Adicionais" defaultValue={props.additionalEmails} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="externalReference" label="Referência Externa" defaultValue={props.externalReference} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="notificationsDisabled" label="Notificações Desabilitadas" defaultValue={props.notificationsDisabled} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="observations" label="Observações" defaultValue={props.observations} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="municipalInscription" label="Inscrição Municipal" defaultValue={props.municipalInscription} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="stateInscription" label="Inscrição Estadual" defaultValue={props.stateInscription} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="canDelete" label="Pode Excluir" defaultValue={props.canDelete} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cannotDeleteReason" label="Motivo Não Excluir" defaultValue={props.cannotDeleteReason} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="canEdit" label="Pode Editar" defaultValue={props.canEdit} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cannotEditReason" label="Motivo Não Editar" defaultValue={props.cannotEditReason} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="foreigtCustomer" label="Cliente Estrangeiro" defaultValue={props.foreigtCustomer} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="city" label="Cidade" defaultValue={props.city} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="state" label="Estado" defaultValue={props.state} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="country" label="País" defaultValue={props.country} type="text" onChange={handleChangeValues} fullWidth />
         
        <FormControl>
            <FormLabel id="sexo">Gênero</FormLabel>
            <RadioGroup
                row
                aria-labelledby="sexo"
                defaultValue={props.sexo}
                name="sexo"
                id="sexo"
                onChange={handleChangeValues}
              >
                <FormControlLabel value="feminino" control={<Radio id="sexo"  />} label="Feminino" />
                <FormControlLabel value="masculino" control={<Radio id="sexo" />} label="Masculino" />
                <FormControlLabel value="outro" control={<Radio id="sexo" />} label="Outro" />
            </RadioGroup>
        </FormControl>

         
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteClient()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditClient()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </div>
  );
}