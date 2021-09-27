import React, {useState, useEffect, useRef} from 'react';
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
    const [items, setItems] = useState([]);
    const apiUrl = "http://localhost:3000/attribs/" + productId;

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
            <Card className={classes.root}>
                <CardContent>
                <div>
                    <br/><br/>
                </div>
                <div>
                    <h2>Details for product {productId}</h2>
                </div>
                <div>
                    <h2>Product Specifications</h2>
                    <ul>
                    {items != null && items.length && items.map(item => {
                            return <li>{item.NAME}&nbsp;: {item.VALUE}</li> 
                    })}
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
 
