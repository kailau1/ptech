import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

let products = [
    // TODO: Get products for mobiles category
    { id:1001, name: 'iPhone 11', description: 'Apple iPhone 11', price: '£559'},
    { id:1002, name: 'iPhone 12', description: 'Apple iPhone 12', price: '£659'},
];

let Products = () => {
    const classes = useStyles();

    return (    
            <main className={classes.Content}>
                <div className={classes.toolbar} />
                <Grid container justify ="center" spacing={4}>
                    {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                    ))}
                </Grid>
            </main>
    )}


export default Products;   