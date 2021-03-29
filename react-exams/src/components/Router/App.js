import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Router/Navbar';
import HomePage from './components/Router/HomePage';
import Product from './components/Router/Product';
import Header from './components/Router/Header';
import Card from './components/Router/Card';

function App(){
    return(
        <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Route exact path='/' component={HomePage} />
            <Route path='/product' component={Product} />
            <Route path='/header' component={Header} />
            <Route path='/card/:user' component={Card} />
        </div>
        </BrowserRouter>
    );
}
export default App;

