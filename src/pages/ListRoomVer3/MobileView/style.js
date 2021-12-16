import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        position: 'relative',
    },

    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
    },

    mapBox: {
        width: '100%',
        height: props => props.transform ? '90vh' : '40vh',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all .3s ease-in',

    },

    content__top__transparent: {
        height: props => props.transform ? '90vh' : '40vh',
        appearance: 'none',
        backgroundColor: 'transparent',
        border: 0,
        display: 'block',
        margin: 0,
        outline: 'none',
        width: '100%',
        zIndex: 0,
        transition: 'all .3s ease-in',

    },

    content: {
        position: 'relative',
        zIndex: 0,
        display: 'flex',
        background: 'rgb(255, 255, 255)',
        width: '100%',
        minHeight: 'calc(60vh + 65px)',
        transform: props => props.transform ? 'translateY(-10vh)' : 'translateY(0)',
        transition: 'all .3s ease-in',
    },

    wrapper: {
        minHeight: '30xp',
        width: '100%',
        position: 'unset',
        maxWidth: '640xp',
        marginLeft: 0,
        marginRight: 0,
        // borderTopLeftRadius: '24px',
        // borderTopRightRadius: '24px',
    },

    header: {
        height: '72px',
        // borderTopLeftRadius: '24px',
        // borderTopRightRadius: '24px',
        position: 'relative',

        '&::before': {
            content: '""',
            display: 'block',
            position: "absolute",
            top: '8px',
            right: '50%',
            transform: 'translateX(50%)',
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            backgroundColor: 'rgba(32, 32, 32, 0.2)'
        }

    },

    header__content: {
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #EBEBEB',
        marginLeft: '24px',
        marginRight: '24px',
        minHeight: '64px',
        textAlign: 'center',

    },

    header__content__text: {
        fontSize: '16px',
        margin: 0
    },

    section: {
        width: '85vw',
        margin: '8px auto',
        paddingBottom: 80

    },


    pagination__wrapper: {
        width: '100%',
        margin: '12px auto',
    },

    pagination: {
        "& .MuiPagination-ul": {
            justifyContent: 'center'
        }
    },

    filter__group: {
        display: 'flex',

    },

    button__mobile__wrapper: {
        position: 'fixed',
        bottom: props => props.scroll ? '8%' : '12%',
        right: '50%',
        zIndex: 9,
        transform: 'translateX(50%)',
    },

    button__mobile__item: {
        display: props => !props.transform && props.scroll ? 'inline-flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '24px',
        border: 'none',
        outline: 'none',
        margin: 0,
        padding: '10px 18px',
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
