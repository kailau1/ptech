/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


const Product = ({ product }) => {
  let detailUrl = "/detail/?productid=" + product.ID;
  return (
    <Card>
      <Link href={detailUrl}>
        <img src={product.MEDIA} />
      </Link>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {product.NAME}
        </Typography>
        <Typography variant="body2">
          {product.PRICE == null ? "Enquire Price" : "£" + product.PRICE}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <Button variant="contained" color="textSecondary" href={detailUrl}>
          {" "}
          VIEW{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
