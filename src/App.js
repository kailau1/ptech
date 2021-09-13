import React from 'react';
import { Products, Navigation} from './components';
import Homepage from './components/homepage/homepage'
import home from './home'
import login from './login'
import shop from './shop'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                <Route path="/home" exact component={home} />
                <Route path="/shop" exact component={shop} />
                <Route path="/login" exact component={login} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
