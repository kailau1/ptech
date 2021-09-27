import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../../components/Navigation/Navigation'
import Box from '@material-ui/core/Box'
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {id:1, location:"Bristol", map:"https://www.google.com/maps/dir//Currys+PC+World+Featuring+Carphone+Warehouse,+Unit+1+Cribbs+Causeway,+Bristol+BS34+5TX/@51.5112345,-2.5131588,8z/data=!3m1!5s0x487191805d17cc09:0x6e3ce34b056bafa5!4m8!4m7!1m0!1m5!1m1!1s0x4870cfcaf2de042d:0x895db98be0cd48a1!2m2!1d-2.6010799!2d51.5270912"},
  {id:2, location:"London", map:"https://www.google.com/maps/dir//47,+Currys+PC+World+Featuring+Carphone+Warehouse,+53+Kensington+High+St,+London+W8+5ED/@51.5020847,-0.1917653,17z/data=!3m1!5s0x48760ff7b4304e4d:0x457ba6b3a3f68b90!4m16!1m6!3m5!1s0x487604df7f190ecb:0x497bab278d17090e!2sCurrys+PC+World+Featuring+Carphone+Warehouse!8m2!3d51.5020847!4d-0.1895766!4m8!1m0!1m5!1m1!1s0x487604df7f190ecb:0x497bab278d17090e!2m2!1d-0.1895766!2d51.5020847!3e1"},
  {id:3, location:"Manchester", map:"https://www.google.com/maps/dir//Currys+PC+World+Featuring+Carphone+Warehouse,+Manchester+Arndale,+The+Arndale+Shopping+Center,+Manchester/@53.4830184,-2.3122058,12z/data=!3m2!4b1!5s0x487bb1c72e83f029:0x7edf0a3af8115e70!4m9!4m8!1m0!1m5!1m1!1s0x487bb1c72964d56f:0x4426646c9691e678!2m2!1d-2.2421666!2d53.4830389!3e1"}
];

export default function Homepage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Box m={2} pt={3} />
      <main>
        <div className={classes.heroContent} color="primary">
          <Container maxWidth="sm">
            <Typography component="h3" variant="h5" align="center" color="textPrimary">
              &nbsp;Welcome to<br/>
              P@KEMo Mobiles
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Get top quality mobile phones and accessories here!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <Link to="/shop">
                  <Button variant="contained" color="primary">
                    Shop Now!
                  </Button>
                </Link>
                </Grid>
                <Grid item>
                <Link to="/login">
                  <Button variant="outlined" color="primary">
                    Register Now!
                  </Button>
                </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Visit our store!
                    </Typography>
                    <Typography>
                      Location: {card.location}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary" href={card.map} target="_blank">
                      FIND ON MAP!
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}