import React, { useState } from "react";
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


export default function FormDialog(props) {
  console.log("PROPS: ",props)
  const [editValues, setEditValues] = useState({
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

    const handleChangeValues = (values) => {
      setEditValues((prevValues) => ({
        ...prevValues,
        [values.target.id]: values.target.value,
      }));
      
    };

  const handleClose = () => {
    props.setOpen(false);
  };
  console.log("Name: ",editValues.name);
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
        toast.warn('Cliente atualizado!', {
            position: "bottom-center",
            autoClose: 5000,
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

  const handleDeleteClient = () => {
    axios.get(`https://gabriellgomess.com/asaas/cadastrar.php?p=3&id=${props.id}`)
    .then((response) => {
        toast.warn('Cliente deletado!', {
            position: "bottom-center",
            autoClose: 5000,
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
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
            <TextField disabled margin="dense" id="id" label="id" defaultValue={props.id} type="text" fullWidth />
            <TextField autoFocus margin="dense" id="nome" label="Nome" defaultValue={props.name} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="email" label="Email" defaultValue={props.email} type="email" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="desde" label="Desde" defaultValue={props.dateCreated} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="empresa" label="Empresa" defaultValue={props.company} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="telefone" label="Telefone" defaultValue={props.phone} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="celular" label="Celular" defaultValue={props.mobilePhone} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="endereco" label="Endereço" defaultValue={props.address} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="numero" label="Número" defaultValue={props.addressNumber} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="complemento" label="Complemento" defaultValue={props.complement} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="bairro" label="Bairro" defaultValue={props.province} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cep" label="CEP" defaultValue={props.postalCode} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cpf_cnpj" label="CPF/CNPJ" defaultValue={props.cpfCnpj} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="tipo_pessoa" label="Tipo de Pessoa" defaultValue={props.personType} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="excluido" label="Excluido" defaultValue={props.deleted} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="emails_adicionais" label="Emails Adicionais" defaultValue={props.additionalEmails} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="referencia_externa" label="Referência Externa" defaultValue={props.externalReference} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="notificacoes_desabilitadas" label="Notificações Desabilitadas" defaultValue={props.notificationsDisabled} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="observacoes" label="Observações" defaultValue={props.observations} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="inscricao_municipal" label="Inscrição Municipal" defaultValue={props.municipalInscription} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="inscricao_estadual" label="Inscrição Estadual" defaultValue={props.stateInscription} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="pode_excluir" label="Pode Excluir" defaultValue={props.canDelete} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="motivo_nao_excluir" label="Motivo Não Excluir" defaultValue={props.cannotDeleteReason} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="pode_editar" label="Pode Editar" defaultValue={props.canEdit} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="motivo_nao_editar" label="Motivo Não Editar" defaultValue={props.cannotEditReason} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cliente_estrangeiro" label="Cliente Estrangeiro" defaultValue={props.foreigtCustomer} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="cidade" label="Cidade" defaultValue={props.city} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="estado" label="Estado" defaultValue={props.state} type="text" onChange={handleChangeValues} fullWidth />
            <TextField margin="dense" id="pais" label="País" defaultValue={props.country} type="text" onChange={handleChangeValues} fullWidth />
         
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
      autoClose={5000}
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