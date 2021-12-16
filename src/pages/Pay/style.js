import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    //ROOT
    pay: {
        paddingTop: 0,
        paddingLeft: 160,
        paddingRight: 160,
        [theme.breakpoints.down("lg")]: {

            paddingLeft: 40,
            paddingRight: 40,
        },
        [theme.breakpoints.down("md")]: {
            paddingLeft: 30,
            paddingRight: 30,
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: 0,
            paddingLeft: 20,
            paddingRight: 20,
        },
    },

    pay__title: {
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
        paddingBottom: 48,
        [theme.breakpoints.down("sm")]: {
            padding: "15px 0",
            position: "fixed",
            backgroundColor: "#fff",
            zIndex: 999,
            minWidth: 375,
        },
    },
    pay__content: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: 75,
        },
    },

    pay__title__iconBtn: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    pay__title__icon: {
        fontSize: 15,
        textAlign: 'center',
        margin: 'auto'
    },
    pay__title__text: {
        fontSize: 32,
        lineHeight: "20px",
        fontWeight: 600,
        color: "#222222",
        marginLeft: 40,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            fontSize: 24,
        },
    },


    pay__left__noti: {
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: 12,
        padding: 24,
        marginBottom: 24
    },
    pay__left__noti__content: {
        display: "flex"
    },
    pay__left__noti__content__left: {
        "&>h6": {
            fontSize: 14,
            lineHeight: "20px",
        },
    },
    pay__left__noti__text: {
        fontSize: 16,
        lineHeight: "20px",
        fontWeight: 600,
        marginBottom: 8
    },
    pay__left__noti__content__right: {
        marginLeft: 20
    },
    // CHUYẾN ĐI CỦA BẠN
    pay__item: {
        paddingBottom: 24
    },
    pay__item__title: {
        fontSize: 22,
        lineHeight: "26px",
        fontWeight: 600
    },
    pay__item__style: {
        display: "flex",
        justifyContent: "space-between",
    },
    // CHỌN CÁCH THANH TOÁN
    pay__item__style__title: {
        padding: "24px 0",
        borderTop: "1px solid rgb(221, 221, 221)",
        [theme.breakpoints.down("sm")]: {
            borderTop: "8px solid rgb(221, 221, 221)",
            width: "100%"
        },
    },
    pay__text__style: {
        fontWeight: 600,
        fontSize: 16
    },
    pay__button__style: {
        textDecoration: "underline",
        fontWeight: 700,
        cursor: "pointer",
        color: "#222222",
        "&:active": {
            color: " rgb(113, 113, 113)",
        }
    },





    pay__radio__style: {
        fontSize: 15
    },
    //THANH TOÁN BẰNG
    pay__left__payment: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 0",
        borderTop: "1px solid rgb(221, 221, 221)",
        [theme.breakpoints.down("sm")]: {
            borderTop: "8px solid rgb(221, 221, 221)",
            width: "100%"
        },
    },

    // CHÍNH SÁCH HỦY
    pay__button__confirm: {
        fontSize: 16,
        lineHeight: "20px",
        fontWeight: 600,
        borderRadius: 8,
        padding: "14px 24px",
        outline: "none",
        transition: "box-shadow 0.2s ease 0s",
        background: "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important",
        color: "rgb(255, 255, 255) !important",
        "&:hover": {
            opacity: 0.8
        }
    },
    pay__item__content__text: {
        fontWeight: 700
    },

    //RIGHT
    pay__right: {
        position: "sticky",
        top: 150,
        marginLeft: 60,
        marginBottom: 100,
        [theme.breakpoints.down("sm")]: {
            height: 150,
            borderBottom: "8px solid #DDDDDD",
            marginLeft: 0,
            marginBottom: 30

        },
    },
    pay__right__img: {
        width: 115,
        height: 100,
        borderRadius: 8,
        [theme.breakpoints.down("md")]: {
            width: 90,
            height: 100,
        },
        [theme.breakpoints.down("sm")]: {
            width: 100,
            height: 100,
        },
    },
    pay__right__style: {
        flex: "0 0 65%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingBottom: 5,
        [theme.breakpoints.down("md")]: {
            paddingLeft: 15
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        },
    },
    pay__right__text__caption: {
        [theme.breakpoints.down("md")]: {
            fontSize: 9
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 12
        },
    },
    pay__right__text: {
        fontSize: 14,
        [theme.breakpoints.down("lg")]: {
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


    pay__left__list: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& >li": {
            padding: "0 5px",
            "& >img": {
                height: 10
            }
        }
    },
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        "& .MuiPaper-rounded": {
            borderRadius: 22
        }
    },
    modal__root: {


    },
    ButtonResult: {
        padding: 20
    },
    modal__header: {
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        padding: "0 24px",
        minHeight: 65,
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 9,
        borderBottom: "1px solid rgb(235, 235, 235)",
        "& >p": {
            fontWeight: 800,
            fontSize: "1em",
        },
        "& > button": {
            padding: 6,
        },
    },
    modal__pay: {
        justifyContent: "center !important",
    },
    modal__date__delete: {
        paddingRight: 15,
        textDecoration: "underline",
        fontWeight: 600,
        fontSize: 16,
        cursor: "pointer"
    },
    icon: {
        position: "absolute",
        left: "11%",
        [theme.breakpoints.down("lg")]: {
            left: "2%",
        },
        [theme.breakpoints.down("sm")]: {
            left: "-3%",
        },
    },
    booking__container: {
        position: props => props.isDesktop ? "relative" : "fixed",
        bottom: 0,
        zIndex: 9999,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        borderTop: "1px solid rgb(221, 221, 221)",
        minHeight: 80,
    },
    booking__content: {
        padding: "15px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    booking__content__price: {
        fontSize: 16,
        fontWeight: 700,
        "&>span": {
            fontSize: 14,
            fontWeight: 400,
        },
    },
    booking__content__btn__save: {
        width: "40%",
        backgroundColor: "rgb(34, 34, 34)",
        color: "#fff",
        pointerEvents: "initial",
        "&:hover": {
            backgroundColor: "rgb(0, 0, 0)",
            color: 'rgb(255, 255, 255)'
        }
    },
    booking__content__btn__save__isBooking: {
        width: "70%",
        backgroundColor: "rgb(221, 221, 221)",
        color: "#999",
        pointerEvents: "none",
    },
    booking__dateTime: {
        textDecoration: "underline",
        fontSize: 18,
        cursor: "pointer",
    },

    booking__modal: {
        height: "100%",
        backgroundColor: "#fff",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        padding: "0px 24px",
        margin: "10px 0",
        borderRadius: 12,
        "& .css-4l7j15": {
            overflow: "initial",
        },
    },
    booking__modal__header: {
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        width: "100%",
        marginBottom: 15,
        zIndex: 99,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& >svg": {
            cursor: "pointer",
            fontSize: 20,
        },
        "& >span": {
            textDecoration: "underline",
            fontWeight: 600,
        },
    },
    booking__datepicker: {

        "& .css-1xhj18k": {
            display: props => props.isDesktop ? "flex" : "block",

            "& .css-1tape97": {
                border: "none",
            },
        },
    },
    date_modal: {
        minWidth: "414px",
    },
    pay_modal_guest: {
        display: props => props.isDesktop ? "block" : "none"
    },
    pay_drawer_guest: {
        display: props => props.isDesktop ? "none" : "block"
    },
    pay_mobile: {
        display: props => props.isDesktop ? "none" : "block",
        [theme.breakpoints.down("sm")]: {
            paddingTop: 10
        },

    },
    pay_desktop: {
        display: props => props.isDesktop ? "block" : "none"
    },
    iconModal: {
        position: "absolute",
        left: "5%",
    },
    drawer_content_bot: {
        borderTop: "1px solid #222222",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
}))
