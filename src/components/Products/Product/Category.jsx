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
import Box from '@material-ui/core/Box';
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
  {id:1, location:"Shop Mobile Phones", link:"./shop?categoryid=1001" },
  {id:1, location:"Shop Accessories", link:"./shop?categoryid=1002" },

];

export default function Category() {
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
              PTECH's Shop
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Get our top quality mobile phones and accessories here!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                </Grid>
                <Grid item>
                <Link to="/login">
                  <Button variant="contained" color="primary">
                    Register Now!
                  </Button>
                </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={6} alignItems='center' justify="center">
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small"  href={card.link} target="_blank">
                      {card.location}
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