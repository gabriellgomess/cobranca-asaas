import React, { useState } from 'react';
import MyContext from './context/myContext';
import { Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar/MenuBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cliente from './Pages/Cliente/Cliente';
import Cartao from './Pages/Cartao/Cartao';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


// Crie seu próprio tema:
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    third: {
      light: '#5fba7d',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {
  const [clientes, setClientes] = useState([]);
  return (
    <MyContext.Provider value={{ clientes, setClientes }}>
    <ThemeProvider theme={theme}>
    <div>
      <MenuBar />
      <Container fixed>
      <Routes>
        <Route path="/app-asaas/" element={<Home />} />
        <Route path="/app-asaas/cliente" element={<Cliente />} />
        <Route path="/app-asaas/cartao" element={<Cartao />} />
        <Route path="/app-asaas/about" element={<About />} />
      </Routes>
      </Container>
    </div>
    </ThemeProvider>
    </MyContext.Provider>
    
  );
}

// import MyContext from '../../contexts/myContext';
// const { testeState, setTesteState } = React.useContext(MyContext);

export default App;
