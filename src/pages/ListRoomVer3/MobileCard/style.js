import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    card: {
        position: 'relative',
        marginTop: '8px',
        cursor: 'pointer',
    },
    card__media: {
        position: 'relative',

    },

    card__media__img: {
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        borderRadius: '12px',
    },

    card__content: {
        marginTop: 10,

    },

    card__content_evaluate: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '18px',
        marginBottom: '6px',
        '& > span': {
            marginRight: '4px'
        }
    },

    card__content__name: {
        '& > h3': {
            margin: '0',
            fontSize: '18px',
            lineHeight: '24px',
            color: '#222222',
            fontWeight: 400
        },

    },

    card__content__price: {
        marginTop: '4px',
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 600,
        color: '#222222',
        '& > p': {
            margin: 0,
        },
        '& >span': {
            color: '#717171'
        }

    }

}))
