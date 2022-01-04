import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Auth from './components/Auth/auth';

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/auth' element={<Auth/>}></Route>
        </Routes> 
      </Container>
    </BrowserRouter>  
  );
};

export default App;
