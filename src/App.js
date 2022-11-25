import React from 'react';
import MyContext from './context/myContext';
import { Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar/MenuBar';
import Footer from './Components/Footer/Footer'
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
  return (
    <ThemeProvider theme={theme}>
    <MyContext.Provider value={{ name: 'John Doe' }}>
    <div>
      <MenuBar />
      <Container fixed>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/cartao" element={<Cartao />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Container>
      {/* <Footer /> */}
    </div>
    </MyContext.Provider>
    </ThemeProvider>
    
  );
}

// import MyContext from '../../contexts/myContext';
// const { testeState, setTesteState } = React.useContext(MyContext);

export default App;
