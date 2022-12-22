import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Payment } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import useStyles from '../styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Cart = () => {
    const classes = useStyles();
    const name = useQuery().get("name");
    const price = useQuery().get("price");

    return (
        <Card className={classes.root}>
            <br/>
            <br/>
            <CardContent>
                <div>
                    <h2>You Pokemo Mobiles Cart</h2>
                </div>
                <div>
                    <li>{name}&nbsp; £{price}</li>
                </div>
                <br/>
                <br/>
                <div style={{display: "flex", justifyContent: "flex-end", marginRight: "75px"}}>
                    <span><b>Total</b></span>
                    &nbsp;&nbsp;
                    <span className={classes.price}>£{price}</span>
                </div>
            </CardContent>

            <CardContent>
                <p></p>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Checkout Order">
                        <Payment />                 
                    </IconButton> 
                        &nbsp;Checkout Order
                </CardActions>
                <div>
                    <Link href='/shop'>Back to Products</Link>
                </div>
            </CardContent>
        </Card>
    );
    
}

export default Cart;