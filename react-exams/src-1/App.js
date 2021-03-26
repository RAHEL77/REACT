import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Product from './components/Product';
import Header from './components/Header';
function App(){
    return(
        <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Route path='/HomePage' component={HomePage} />
            <Route path='/product' component={Product} />
            <Route path='/header' component={Header} />
        </div>
        </BrowserRouter>
    );
}
export default App;

