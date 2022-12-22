import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormDialog from '../FormDialog/FormDialog';



export default function ClientsTable(props) {
  const [open, setOpen] = React.useState(false);
  const [dialog, setDialog] = React.useState([]);
    
  const handleClickRow = (e) => {
      setOpen(true);
      setDialog(e);
  }

  const handleDeleteCliente = (id) => {
    axios.get(`https://gabriellgomess.com/asaas/cadastrar.php?p=3&id=${id}`)
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
    .catch((error) => {
        console.log(error);
    });
    
  };
  return (
    <>
    {props.clientes.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">E-mail</TableCell>
            <TableCell align="center">Telefone</TableCell>
            {/* <TableCell align="center">Endereço</TableCell> */}
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.clientes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="center">{row.mobilePhone}</TableCell>
              {/* <TableCell align="center">{row.address}, {row.addressNumber} - {row.province}</TableCell> */}
              <TableCell sx={{ display: 'flex' }} align="center">
                <ModeEditIcon sx={{ color: 'green', cursor: 'pointer' }} onClick={()=>handleClickRow(row)} />
                <DeleteIcon sx={{ color: 'tomato', cursor: 'pointer' }} onClick={()=>handleDeleteCliente(row.id)} />
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>) : (<LinearProgress />)}
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
    <FormDialog
      open={open} 
      setOpen={setOpen}
      id={dialog.id}
      dateCreated={dialog.dateCreated}
      name={dialog.name}
      email={dialog.email}
      company={dialog.company}
      phone={dialog.phone}
      mobilePhone={dialog.mobilePhone}
      address={dialog.address}
      addressNumber={dialog.addressNumber}
      complement={dialog.complement}
      province={dialog.province}
      postalCode={dialog.postalCode}
      cpfCnpj={dialog.cpfCnpj}
      personType={dialog.personType}
      deleted={dialog.deleted}
      additionalEmails={dialog.additionalEmails}
      externalReference={dialog.externalReference}
      notificationsDisabled={dialog.notificationsDisabled}
      observations={dialog.observations}
      municipalInscription={dialog.municipalInscription}
      stateInscription={dialog.stateInscription}
      canDelete={dialog.canDelete}
      cannotDeleteReason={dialog.cannotDeleteReason}
      canEdit={dialog.canEdit}
      cannotEditReason={dialog.cannotEditReason}
      foreigtCustomer={dialog.foreigtCustomer}
      city={dialog.city}
      state={dialog.state}
      country={dialog.country}
      clientes={props.clientes}
      setClientes={props.setClientes}                         
  />
    </>
  );
}