import React from 'react';
import { Products, Navigation} from './components';
import Homepage from './components/homepage/homepage'
import home from './home'
import login from './login'
import shop from './shop'
import productDetail from './productDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                <Route path="/" exact component={home} />
                <Route path="/home" exact component={home} />
                <Route path="/shop" exact component={shop} />
                <Route path="/login" exact component={login} />
                <Route path="/detail" exact component={productDetail} />
                </Switch>
            </div>
        </Router>
    )
}



export default App;
