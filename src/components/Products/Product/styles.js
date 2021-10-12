import {makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'

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
        backgroundColor: 'blue',
    },
    smallCardContent: {
        fontSize: '12px',
        backgroundColor: 'grey',
    },
    price: {
        fontSize: '25px',
        fontWeight: "bold",
        fontFamily: 'Arial',
    }

}));