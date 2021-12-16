import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pay__right__img: {
        width: 115,
        height: 140,
        borderRadius: 8,
        [theme.breakpoints.down(376)]: {

            width: 100,
            height: 100,

        },
        [theme.breakpoints.down(769)]: {

            width: 90,
            height: 100,


        },
    },

    pay__right__style: {
        flex: "0 0 65%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingBottom: 5,

        [theme.breakpoints.down(769)]: {

            paddingLeft: 15


        },
    },
    pay__right__text1: {
        fontSize: 20,
        [theme.breakpoints.down(376)]: {

            fontSize: 10

        },
        [theme.breakpoints.down(769)]: {

            fontSize: 9


        },
    },
    pay__right__text: {
        fontSize: 23,

        [theme.breakpoints.down(1025)]: {

            fontSize: 12


        },
    },
    pay__right__item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        fontSize: 12,
    },
    pay__right__item__icon: {
        fontWeight: 400,
        fontSize: 15,
        color: "red",
        paddingRight: 2,
    },

    root: {
        textAlign: 'left',
        lineHeight: '30px',
        width: "100%",
    },
    infoTicket: {
        display: "flex",
        gap: "5%"

    },

    infoTicket_item: {
        flex: "70%"
    },

    text__second: {
        color: "#000",
        fontWeight: "500",
    },
    table: {
        marginTop: 10,
        width: "100%",
    },
    infoResult_label: {
        margin: "30px 0px 10px",
        fontWeight: 400,
    },
    paymentColor: {
        color: '#f79320'
    },
    errorColor: {
        color: '#fb4226'
    },
    noteresult: {
        fontStyle: 'italic',
        fontWeight: 500,
    },
    table__modal: {
        display: "flex",
        justifyContent: "space-between"
    },
    table__modal__left:{
        width: "40%"
    },
    table__modal__right:{
        width: "50%"
    }
}))



export default useStyles