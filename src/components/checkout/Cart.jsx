import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import {
  Card,
  List,
  ListItem,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { Payment } from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import useStyles from "../styles";
import comfortaaFont from "../../assets/fonts/Comfortaa-VariableFont_wght.ttf";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Cart = () => {
  const classes = useStyles();
  const name = useQuery().get("name");
  const price = useQuery().get("price");

  return (
    <Grid container spacing={6} justifyContent="center">
      <Card className={classes.checkout} flexGrow="1">
        <br />
        <br />
        <CardContent>
          <Box m={2} pt={3} />
          <Typography variant="h5" align="center  ">
            Your Shopping Cart
          </Typography>
          <br />
          <List>
            <ListItem>
              <Typography variant="h6" align="center">
                {name}&nbsp; £{price}
              </Typography>
            </ListItem>
          </List>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "75px",
            }}
          >
            <span>
              <b>Total</b>
            </span>
            &nbsp;&nbsp;
            <span className={classes.price}>£{price}</span>
          </div>
        </CardContent>
        <CardContent>
          <p></p>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="Checkout Order">
              <Payment />
            </IconButton>{" "}
            &nbsp;
            <Button variant="contained" color="primary" style={{ height: 40 }}>
              {" "}
              Checkout Order{" "}
            </Button>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button
              variant="contained"
              size="small"
              target="_blank"
              style={{ height: 40 }}
            >
              <Link href="/shop">Back to Products</Link>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cart;
