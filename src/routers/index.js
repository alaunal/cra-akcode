import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Errors from '../pages/Errors/index';


const Index = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" exact component={About} /> */}

        {/* 404 */}
        <Route
            render={(props) => (
                <Errors {...props} title="Page not found!" content="Sorry, the route you requested does not exist" />
            )}
        />
    </Switch>
);

export default Index;