import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ClientsTable from '../ClientsTable/ClientsTable';
import MyContext from '../../context/myContext';

const ListaClientes = () => {
    const { clientes, setClientes } = useContext(MyContext);
    useEffect(()=>{
        axios.get('https://gabriellgomess.com/asaas/cadastrar.php?p=2')
        .then((response) => {
            console.log(response.data.data)
            setClientes(response.data.data)
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    return(
        <div className='container-lista-clientes'>
            <p>Lista de clientes</p>            
            <ClientsTable clientes={clientes}/>
        </div>
    )

}

export default ListaClientes;