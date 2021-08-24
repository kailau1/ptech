import React from 'react';
import { AppBar, IconButton, Badge, MenuItem, Menu, Typography, Toolbar } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo1.PNG';
import useStyles from './styles'


const Navigation = () => {
    const classes = useStyles();
    return (
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color ="inherit">
                        <img src={logo} alt="PTECH" height="50px" className={classes.image}/>
                        PTECH
                        </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={3} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>      
            </AppBar>
    )
}

export default Navigation;