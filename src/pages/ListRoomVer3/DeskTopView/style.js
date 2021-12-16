import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        paddingTop: '80px',
        position: 'relative',
        display: 'flex',
    },

    content: {
        padding: '0 24px',
        marginTop: '50px',
        width: props => props.transform ? '0%' : '100%',
        display: props => props.transform ? 'none' : 'block',
        [theme.breakpoints.up("xl")]: {
            width: props => props.transform ? '0' : '60%',
            display: props => props.transform ? 'none' : 'block',
        }
    },

    content__header: {
        width: '100%',
        margin: '0 auto',
        '& > p': {
            fontSize: '14px',
            lineHeight: '18px',
            color: 'rgb(24,24,24)',
            paddingBottom: '8px',
            margin: 0
        },
        '& > h3': {
            fontSize: '32px',
            lineHeight: '36px',
            fontWeight: 700,
            color: 'rgb(24,24,24)',
            margin: 0
        }
    },

    filter: {
        width: '100%',
        marginTop: '16px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    filter__wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        width: '100%',
    },

    cards: {
        width: '100%',
        [theme.breakpoints.up("xl")]: {
            width: '90%',
        },
        display: 'flex',
        flexFlow: 'column wrap',
        minHeight: '85vh'
    },

    map: {
        width: props => props.transform ? '100%' : '0%',
        display: props => props.transform ? 'block' : 'none',
        [theme.breakpoints.up("xl")]: {
            width: props => props.transform ? '0&' : '40%',
            display: props => props.transform ? 'none' : 'block',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
        },
    },

    mapBox: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
    },

    pagination__wrapper: {
        width: '100%',
        margin: '32px auto',
        padding: '8px 8px 12px 8px',
    },

    pagination: {
        "& .MuiPagination-ul": {
            justifyContent: 'center'
        }
    },

    pagination__topLine: {
        marginTop: '12px',
        marginBottom: '24px',
        '& > div': {
            borderBottom: '1px solid #EBEBEB',
        }
    },

    button__tablet__wrapper: {
        position: 'fixed',
        bottom: '48px',
        right: '50%',
        zIndex: 9,
        transform: 'translateX(50%)',

        [theme.breakpoints.up("xl")]: {
            display: 'none',
        }
    },

    button__tablet__item: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '24px',
        border: 'none',
        outline: 'none',
        margin: 0,
        padding: '14px 20px',
        color: 'rgba(255, 255, 255, 0.9)',
        cursor: 'pointer',
        boxShadow: 'none',
        background: '#222222',
        transition: 'all .25 ease',
        '& > span': {
            marginRight: '8px'
        }
    }



}))
