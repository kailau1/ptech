import React, {useState, useEffect} from 'react';
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from '../styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

let Products = () => {
    const classes = useStyles();
    let productId = useQuery().get("productid");
    productId = '1001';

    const [items, setItems] = useState([]);
    const apiUrl = "http://localhost:3000/products/" + productId;

    const fetchData = async () => {
        try {
            const result = await fetch(apiUrl);
            const body = await result.json();
            setItems(body);
        } catch(err) {
            return "Failed to fetch from api"+err;
        }
    }

    // set the useEffect dependency to [] so it is the same as the initialized useState([]). 
    // This tells react that the state has not changed after the fetchData call, and hence does not re-render.
    // This fixes the looping fetch call.
    useEffect(() => 
        fetchData() 
    , []);

    return (    
            <main className={classes.Content}>
                <div className={classes.toolbar} />
                <Grid container justify ="center" spacing={4}>
                    {items && items.length && items.map((product) => (
                    <Grid item key={product.ID} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                    ))}
                </Grid>
            </main>
    )}


export default Products; 

