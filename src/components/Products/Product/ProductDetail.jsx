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

const ProductDetail = () => {
    const classes = useStyles();
    const productId = useQuery().get("productid");
    const [attribs, setAttribs] = useState([]);
    const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState({ ID: "", NAME: "", DESCRIPTION: ""});
    const attribUrl = "http://localhost:3000/attribs/" + productId;
    const productUrl = "http://localhost:3000/product/" + productId;

    const fetchData = async (url, type) => {
        try {
            const result = await fetch(url);
            const body = await result.json();
            switch (type) {
                case 'attribs':
                    setAttribs(body);
                    console.log("Attribs found:" + attribs)
                    break;
                case 'prod':
                    setProducts(body);
                    console.log("single product found: " + JSON.parse(products))
                    break;
                default:
                    console.log('Fetch data cannot be set. Type not defined.');
            }

        } catch(err) {
            return "Failed to fetch from api"+err;
        }
    }

    // set the useEffect dependency to [] so it is the same as the initialized useState([]). 
    // This tells react that the state has not changed after the fetchData call, and hence does not re-render.
    // This fixes the looping fetch call.
    useEffect(() => 
        fetchData(attribUrl, 'attribs')
    , []);

    useEffect(() => 
        fetchData(productUrl, 'prod')
    , []);

    return (
        <Card className={classes.root}>

            <br/>
            
            <CardContent>
            <div>
                <br/><br/>
                {products != null && products.length && products.map(item => {
                    return  <CardMedia className={classes.media} 
                        image = {item.MEDIA == null ? '/images/iphone-11WHITE2.png' : item.MEDIA }
                        title={item.NAME} />

                })}
            </div>
            <div>
                <h2>Details for product {productId}</h2>
            </div>
            <div>
                <h2>Product Specifications</h2>
                <ul>
                {attribs != null && attribs.length && attribs.map(item => {
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

                <Link href="/shop">See Products</Link>
            </div>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;
 
