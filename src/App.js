import React from 'react';
import MyContext from './context/myContext';
import { Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar/MenuBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cliente from './Pages/Cliente/Cliente';
import Cartao from './Pages/Cartao/Cartao';
import Container from '@mui/material/Container';


const App = () => {
  return (
    
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
    </div>
    </MyContext.Provider>
    
  );
}

// import MyContext from '../../contexts/myContext';
// const { testeState, setTesteState } = React.useContext(MyContext);

export default App;
