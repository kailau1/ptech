import React, {useState, useEffect} from 'react';
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
    const productId = useQuery().get("productid");
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [ress, setRes] = useState("empty");
    const apiUrl = "http://localhost:3001/products/" + productId;

        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data === undefined) {
                setItems([]);
            } else {
                setItems(data);
            }
        })
        ;

    let fakeitems = JSON.parse('[{"ID":1001,"NAME":"IPhone 11","DESCRIPTION":"IPhone 11"},'+
                '{ "ID": 1002, "NAME": "IPhone 12", "DESCRIPTION": "IPhone 12" },'+
                '{"ID":1003,"NAME":"Samsung Galaxy 10","DESCRIPTION":"Samsung Galaxy 10"},'+
                '{"ID":1004,"NAME":"Samsung Galaxy 10 Plus","DESCRIPTION":"Samsung Galaxy 10 Plus. Larger phone of the Galaxy 10 range."}]');
        // setItems(fakeitems);
        // ,
        // (error) => {
        //     setError(error);
        // };

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else {
        return (
            <Card className={classes.root}>
                <CardContent>
                <div>
                    <br/><br/>
                </div>
                <div>
                    <h2>Details for product {productId}</h2>
                    <br/>
                </div>
                <div>
                    Number of items: {items.length}
                    <br/>
                    fakeItems: {fakeitems.map(item => <li>{item.NAME}</li>)}
                    <br/>
                    response: {ress}
                    <br/>
                    <h2>Product Specifications</h2>

                    <br/>
                    <ul>
                    {items.map(item => 
                    
                        <li>{item.NAME}</li>
                        
                        )}
                    </ul>
                    <br/>
                    <div class="footer">
                       Footer 
                    </div>
                </div>
                <br/>
                <div>

                    <Link href="/shop">See products</Link>
                </div>
                </CardContent>
            </Card>
        );
    // } 
};

export default ProductDetail;
 
