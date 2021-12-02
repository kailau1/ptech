import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import useStyles from '../../styles';
import cart from '../../../cart';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProductDetail = () => {
    const classes = useStyles();
    const productId = useQuery().get("productid");
    const [attribs, setAttribs] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartUrl, setCartUrl] = useState([]);
    // const [product, setProduct] = useState({ id: "", name: "", description: ""});
    const attribUrl = "http://localhost:3000/attribs/" + productId;
    const productUrl = "http://localhost:3000/product/" + productId;
    // var cartUrl = "/cart";

    const fetchData = async (url, type) => {
        try {
            const result = await fetch(url);
            const body = await result.json();
            switch (type) {
                case 'attribs':
                    setAttribs(body);
                    console.log("Attribs found:" + JSON.parse(body));
                    break;
                case 'prod':
                    setProducts(body);
                    console.log("single product found: " + JSON.stringify(body[0]))
                    var firstProduct = body[0];
                    var url = '/cart?name='+firstProduct.NAME+'&price='+firstProduct.price;
                    setCartUrl(url);
                    console.log('cartUrl='+url);
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
                        image = {item.media == null ? '/images/iphone-11WHITE2.png' : item.media }
                        title={item.name} />
                })}

            </div>
            <br/>
            <div>
                 {/* TODO: products[0] not working intermittently */}
                {products != null && products.length && products.map(item => {
                return <span>
                    {item.NAME}
                </span>
                })}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <br/>

                {products != null && products.length && products.map(item => {
                return <span className={classes.price}>
                    £{item.price}
                </span>
                })}

            </div>
            <div>
                <h3>Product Specifications</h3>
                <ul className={classes.smallCardContent}>
                {attribs != null && attribs.length && attribs.map(item => {
                        return <li>{item.name}&nbsp;: {item.value}</li> 
                })}
                </ul>
            </div>
            <div>
            <CardActions disableSpacing className={classes.CardActions}>

                {products != null && products.length && products.map(item => {
                return <Link href={cartUrl}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart href='/cart' />
                    </IconButton> 
                    Buy Now! 
                </Link>
                })}

            </CardActions>

            </div>
            <div class="footer">
                <Link href="/shop">See Products</Link>
            </div>

            </CardContent>

        </Card>
    );
};

export default ProductDetail;
 
