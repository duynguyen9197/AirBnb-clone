import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        width: '100%',
        maxHeight: '100vh - 80px',
        borderRadius: '12px',
        zIndex: 9
    },

    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px',
        padding: '0 24px',
        borderBottom: '1px solid rgb(235,235,235)',
        color: 'rgb(34,34,34)',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 800,

    },

    header__closeBtn: {
        flex: '0 0 16px',
        textAlign: 'left',
    },

    closeBtn__item: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        color: 'rgb(34, 34, 34)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'rgb(235,235,235)'
        }
    },

    header__title: {
        flex: '1 1 auto',
        textAlign: 'center',
        margin: '0 16px',
        fontSize: '16px'
    },

    content: {

    },

    content__header: {
        minHeight: '64px'
    },


    content__container: {
        flex: '1 1 auto',
        overflowY: 'auto',
        outline: 'none',

    },

    content__element: {
        padding: '28px 24px',
        margin: '0 24px',
        borderBottom: '1px solid rgb(235, 235, 235)',
    },

    content__element__header: {
        fontSize: '20px',
        lineHeight: '26px',
        color: 'rgb(34, 34, 34)',
        fontWeight: 600,
        marginTop: 0,
        marginBottom: '24px',
    },

    content__element__items: {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
    },

    content__element__item: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
    },

    itemWrapper: {
        color: 'rgb(34,34,34)',
        padding: '12px 4px 12px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    item__text: {
        flex: '1 1 auto',
        '& > p': {
            fontSize: '16px',
            fontWeight: 400
        }
    },

    item__action: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '104px',
        height: '32px',
        color: 'rgb(34, 34, 34)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px'
    },

    item__action__btn: {
        width: '32px',
        height: '32px',
        cursor: 'pointer',
        border: '1px solid rgb(113, 113, 113)',
        color: 'rgb(113, 113, 113)',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '50%'
    },


    content__element__checkbox: {
        padding: '12px 0',
        flexBasis: props => props.isDesktop ? '50%' : '100%'
    },

    formControl: {
        color: 'rgb(34, 34, 34)',

    },

    filter__item: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        padding: '4px 8px 4px 0',
    },

    filter__item__button: {
        cursor: 'pointer',
        textAlign: 'center',
        border: '1px solid rgb(176, 176, 176)',
        backgroundColor: 'rgb(255, 255, 255)',
        outline: 'none',
        margin: 0,
        borderRadius: '30px',
        color: 'rgb(34, 34, 34)',
        position: 'relative',
        padding: '8px 16px',
        fontSize: '12px',
        lineHeight: '16px',
        '&:hover': {
            borderColor: 'rgb(34, 34, 34)',
        },
    },

    footer: {
        padding: '16px 24px',
        width: '100%'
    },

    footer__wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: '1 1 auto',
        padding: '16px 24px',
        width: '100%'
    },

    footer__deleteAll: {
        cursor: 'pointer',
        opacity: 1,
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: 'rgb(34, 34, 34)',
        width: 'auto',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 600,
        borderRadius: '8px',
        padding: '10px',
        textDecoration: 'underline',
    },

    footer__display: {
        textAlign: 'center',
        width: 'auto',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 600,
        borderRadius: '8px',
        outline: 'none',
        padding: '8px 16px',
        border: 'none',
        backgroundColor: 'rgb(34, 34, 34)',
        color: 'rgb(255, 255, 255)',
        cursor: 'pointer',
    }



}))
