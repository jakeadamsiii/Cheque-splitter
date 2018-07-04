import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Evenly from './Evenly.js';

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/evenly' component={Evenly}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router; 