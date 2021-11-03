/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Divider,
  Box,
  Grid,
} from "@material-ui/core";
import { AddShoppingCart, Autorenew } from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import useStyles from "../../styles";
import cart from "../../../cart";
import shop from "../../../shop"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductDetail = () => {
  const classes = useStyles();
  const productId = useQuery().get("productid");
  const [attribs, setAttribs] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartUrl, setCartUrl] = useState([]);
  // const [product, setProduct] = useState({ ID: "", NAME: "", DESCRIPTION: ""});
  const attribUrl = "http://localhost:3000/attribs/" + productId;
  const productUrl = "http://localhost:3000/product/" + productId;
  // var cartUrl = "/cart";

  const fetchData = async (url, type) => {
    try {
      const result = await fetch(url);
      const body = await result.json();
      switch (type) {
        case "attribs":
          setAttribs(body);
          console.log("Attribs found:" + JSON.parse(body));
          break;
        case "prod":
          setProducts(body);
          console.log("single product found: " + JSON.stringify(body[0]));
          var firstProduct = body[0];
          var url =
            "/cart?name=" + firstProduct.NAME + "&price=" + firstProduct.PRICE;
          setCartUrl(url);
          console.log("cartUrl=" + url);
          break;
        default:
          console.log("Fetch data cannot be set. Type not defined.");
      }
    } catch (err) {
      return "Failed to fetch from api" + err;
    }
  };
  // set the useEffect dependency to [] so it is the same as the initialized useState([]).
  // This tells react that the state has not changed after the fetchData call, and hence does not re-render.
  // This fixes the looping fetch call.
  useEffect(() => fetchData(attribUrl, "attribs"), []);

  useEffect(() => fetchData(productUrl, "prod"), []);

  return (
    <div style={{ marginTop: "100px", alignItems: "center" }}>
      <Grid container style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Grid item sm={5}>
          {products != null &&
            products.length &&
            products.map((item) => {
              return <img src={item.MEDIA} title={item.NAME} width="95%" />;
            })}
        </Grid>
        <Grid item sm={6}>
          <Grid container direction="column" style={{ height: "100%" }}>
            {/* TODO: products[0] not working intermittently */}
            <Box mt={2}>
              <Typography variant="h4">
                {products != null &&
                  products.length &&
                  products.map((item) => {
                    return <span>{item.NAME}</span>;
                  })}
              </Typography>
              <Typography variant="h5">
                {products != null &&
                  products.length &&
                  products.map((item) => {
                    return <span>£{item.PRICE}</span>;
                  })}
              </Typography>
              <Typography variant="h6">
                {attribs != null &&
                  attribs.length &&
                  attribs.map((item) => {
                    return (
                      <li>
                        {item.NAME}&nbsp;: {item.VALUE}
                      </li>
                    );
                  })}
              </Typography>
            </Box>
            <br /> <br /> <br /> 
            <div>
              {products != null &&
                products.length &&
                products.map((item) => {
                  return (
                    <Link href={cartUrl}>
                      <Button variant="contained" color="primary">
                        PURCHASE
                      </Button>
                    </Link>
                  );
                })}
                &nbsp; &nbsp; &nbsp; &nbsp;
              <Link href="../shop">
                <Button variant="outlined">BACK TO PRODUCTS</Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
