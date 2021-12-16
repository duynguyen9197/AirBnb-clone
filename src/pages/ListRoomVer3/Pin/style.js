import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        zIndex: 1,
        "& .mapboxgl-marker": {
            '&:hover': {
                zIndex: 2
            },
        }
    },

    pinComponent: {
        zIndex: 1,

    },

    pin: {
        zIndex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '28px',
        boxShadow: 'rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px',
        color: 'rgb(34,34,34)',
        height: '28px',
        padding: '0 8px',
        position: 'relative',
        transition: 'all .3s cubic-bezier(0, 0, 0.1, 1) 0s',
        transform: 'scale(1)',
        transformOrigin: '50% 50%',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.1)',
        },

    },

    pin__content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        whiteSpace: 'nowrap',
        '& > span': {
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px'
        }
    },


    popupComponent: {
        zIndex: 9999999999,
        "& .mapboxgl-popup-content": {
            padding: 0,
            borderRadius: '12px',
        },
    },

    popup: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: 'rgb(0 0 0 / 28%) 0px 8px 28px',
        color: 'rgb(34,34,34)',
        width: '100%',
        cursor: 'pointer',
    },

    popup__img: {
        display: 'block',
        width: '100%',
        height: '180px',
        borderRadius: '12px',
    },

    popup__content: {
        padding: '16px',
    },

    popup__content__top: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: '14px',
        lineHeight: '18px',
        marginBottom: '7px',
        width: '100%'
    },

    popup__content__top__icon: {
        color: theme.palette.secondary.main,
    },

    popup__content__title: {
        "& p": {
            margin: '0 auto',
            color: 'rgb(34,34,34)',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
            maxWeight: '20px',
            textOverflow: 'ellipsis'
        },
    },

    popup__content__price: {
        fontWeight: 600
    }



}))
