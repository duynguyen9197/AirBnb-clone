import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        width: "100%",
        margin: "32px auto",

        [theme.breakpoints.up("sm")]: {
            padding: "0 40px",
        },
        [theme.breakpoints.up("xl")]: {
            padding: "0 80px",
        },
    },
    stay__title: {
        fontWeight: 700,
        letterSpacing: 0,
        paddingBottom: 16,
        lineHeight: "30px",
        fontSize: 22,
        [theme.breakpoints.up("md")]: {
            fontSize: 26,
            lineHeight: "36px",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: 32,
            lineHeight: '52px',
        },
    },
    stay__item: {
        padding: "7px",
        cursor: "pointer",

    },
    stay__img: {
        objectFit: "cover",
        borderRadius: "8px",
        width: "100%",
        height: "100%",
        // padding: "7px",
        // margin:7
    },
    stay__content: {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "22px"
    }
}))
