import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #DDDDDD",
        paddingBottom: 25,
    },
    paper: {
        marginTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textfield: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: 8,
    },
    hyperText: {
        color: "red",
        textAlign: "left",
        margin: 0
    },

    add_title: {
        marginTop: 10
    },
    upload__card: {
        height: 300,
        border: "3px dashed #999",
        width: "70%",
        margin: "30px auto",
        backgroundImage: (props) => `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    upload__card__content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        "&>input": {
            display: "none",
        },
    },
    upload__card__icons: {
        width: 80,
        height: 80,
        cursor: "pointer",
        color: (props) => (props.image !== null ? "#fff" : "#000"),
    },
    upload__card__label: {
        fontSize: 30,
        cursor: "pointer",
        color: (props) => (props.image !== null ? "#fff" : "#000"),
    },
    upload__card__btnContent: {
        display: "flex",
        justifyContent: "right",
        width: "70%",
        margin: "0 auto",
        "&>div": {
            width: "20%",
            marginRight: 10,
            marginTop: 15,
        },
    },
    upload__card__btnReset: {
        width: "100%",
        margin: "24px 0px 5px 0",
        borderRadius: 8,
        padding: 14,
        backgroundColor: "#c1c1c8",
        fontWeight: 600,
        lineHeight: "20px",
    },
    completed: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 30,
        marginTop: 20,
        color: "green",
    },
    completedAdd: {
        display: "flex",
        justifyContent: "center",
        "&>div": {
            width: "20%",
            marginRight: 10,
            marginTop: 50,
        },
    },



}))
