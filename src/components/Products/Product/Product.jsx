import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import useStyles from './styles';


const Product = ({product}) => {
    const classes = useStyles();
    let detailUrl = "/detail/?productid=" + product.ID;
    return (
        <Card className={classes.root}>
            <Link href={detailUrl}>
                <CardMedia className={classes.media} 
                    image = { product.MEDIA == null ? '/images/iphone-11WHITE2.png' : product.MEDIA }
                    title={product.NAME} />
            </Link>
            <CardContent>
                <div class='smallCardContent' className={classes.CardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.NAME} 
                    </Typography>
                    <font class='cardContent'>
                        {product.PRICE == null ? 'Enquire Price' : '£'+product.PRICE}
                    </font>
                </div>
                <br/>
                <div>
                    <Typography variant="body2" color="textSecondary">{product.DESCRIPTION}</Typography>  
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" color="textSecondary" href={detailUrl} > VIEW </Button>
            </CardActions>
        </Card>
    );
}

export default Product;
