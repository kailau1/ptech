import React from 'react';
import ReactDOM from "react-dom";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProductDetail = ({product}) => {
    const classes = useStyles();
    let query = useQuery();
    return (
        <Card className={classes.root}>
            <CardContent>
            <div>
                <br/><br/>
            </div>
            <div>

                <h1>helllooo</h1>
                Detail for: {query.get("productid")}
                name: {product.name}
                title: 
            </div>

            <div>

                <Link href="/shop">See products</Link>
            </div>
            </CardContent>
        </Card>
    )
};

export default ProductDetail;
 
