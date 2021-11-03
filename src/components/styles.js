import { blue, blueGrey } from '@material-ui/core/colors';
import { makeStyles, fade } from '@material-ui/core/styles';
import { MicNone } from '@material-ui/icons';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    drawer: {
      width: 250
    }
  
  },
  media: {
      height: 0,
      paddingTop: '55%'
  },
  cardActions: {
      display:'flex',
      justifyContent: 'flex-end',
  },
  cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '24px',
      fontFamily: 'Arial',
  },
  smallCardContent: {
      fontSize: '14px',
      fontFamily: 'Arial',
  },
  priceOne: {
      fontSize: '25px',
      fontWeight: "bold",
      fontFamily: 'Arial',
  },
  price: {
      fontSize: '20px'
  },
  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8
  },
  centerBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  checkout: {
    display: 'block',
    width: '50vw',
    height: '45vw'
  },
  div: {
    display: "flex" ,
    justifyContent: "center",
    alignItems: "center"
  }

  

  


}));