import React from 'react';
import { AppBar, IconButton, Badge, Typography, Toolbar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo1.PNG';
import useStyles from './styles'
import {Link} from 'react-router-dom';
import { blueGrey } from '@material-ui/core/colors';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';





const Navigation = () => {
    const classes = useStyles();
    const[state, setState] = React.useState(false)
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }
    const list = () => (
        <div onclick={toggleDrawer(false)} className={classes.list}>
            <List>
                <ListItem>
                    <Link to="./home">
                        <Button> HOME </Button>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="./shop">
                        <Button> SHOP </Button>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="./login">
                        <Button> LOGIN </Button>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem>
                    <Link to="./register">
                        <Button> REGISTER </Button>
                    </Link>
                </ListItem>
            </List>
        </div>
    )
    return (
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color ="inherit">
                        <img src={logo} alt="PTECH" height="50px" className={classes.image}/>
                        PTECH
                    </Typography>
                    <div className={classes.grow} />
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuOpenIcon />
                    </IconButton>
                    <Drawer
                        anchor={'right'}
                        open={state}
                        onClose={toggleDrawer(false)}
                        className={classes.drawer}
                        >
                        {list()}
                    </Drawer>
                </Toolbar>      
            </AppBar>
    )
}

export default Navigation;


