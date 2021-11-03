import React from 'react';
import { Products} from './components';
import Header from './components/header/header'

const home = () => {
    return (
        <div>
        <Header />
        <Products />
        </div>
    );
}

export default home; 