import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import useStyles from '../../styles';


const Product = ({product}) => {
    const classes = useStyles();
    let detailUrl = "/detail/?productid=" + product.id;
    return (
        <Card className={classes.root}>
            <Link href={detailUrl}>
                <CardMedia className={classes.media} 
                    image = { product.media == null ? '/images/iphone-11WHITE2.png' : product.media }
                    title={product.name} />
            </Link>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name} 
                    </Typography>
                    <br/>
                    <div>
                        <font className={classes.price}>
                            {product.price == null ? 'Enquire Price' : '£'+product.price}
                        </font>
                    </div>
                </div>
                <br/>
                <div>
                    <Typography variant="body2" color="textSecondary">{product.description}</Typography>  
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
