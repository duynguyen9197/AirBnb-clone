import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        margin: "32px 0",

        "& .MuiContainer-root": {
            padding: "0 24px",
            [theme.breakpoints.up("sm")]: {
                padding: "0 40px",
            },
            [theme.breakpoints.up("xl")]: {
                padding: "0 80px",
            },
        },
    },
    places: {
        width: '100%',
        // "& .MuiContainer-root": {
        //     padding: "0 24px",
        //     [theme.breakpoints.up("sm")]: {
        //         padding: "0 40px",
        //     },
        //     [theme.breakpoints.up("xl")]: {
        //         padding: "0 80px",
        //     },
        // },
    },

    places__title: {
        fontWeight: 700,
        letterSpacing: '0',
        paddingBottom: '1rem',
        paddingTop: '1rem',
        fontSize:22,
            lineHeight: "30px",
        [theme.breakpoints.up("md")]: {
      fontSize: 26,
      lineHeight: "36px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
     
              lineHeight: '52px',

    },
    },

    cities: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    city__img: {
        width: '64px',
        height: '64px',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px',
        marginRight: '1rem',
        cursor: 'pointer',
    },

    city__info: {
        '& > p': {
            margin: 0
        }
    }

}))
