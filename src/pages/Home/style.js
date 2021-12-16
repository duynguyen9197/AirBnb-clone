import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    root: {
        // height: '95vh',
    },

    banner: {
        backgroundImage: props => `url(${props.bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: '95vh',
        width: '100%',
    },

    places: {
        margin: '32px auto',
        width: '100%',
    },

    places__title: {
        fontWeight: 700,
        lineHeight: '52px',
        letterSpacing: '0',
        paddingBottom: '1rem',
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
        marginRight: '1rem'
    },

    city__info: {
        '& > p': {
            margin: 0
        }
    }

}))
