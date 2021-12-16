import { InputAdornment, TextField } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const AirbnbThumbComponent = (props) => {
    return (
        <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </span>
    );
}

const AirbnbSlider = withStyles({
    root: {
        color: 'rgb(176, 176, 176)',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: 'rgb(221, 221, 221)',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: 'rgb(221, 221, 221)',
        opacity: 1,
        height: 2,
    },
})(Slider);

const useStyles = makeStyles(theme => ({
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
    rootPriceMenu: {
        "& .MuiPaper-root": {
            backgroundColor: 'rgb(255, 255, 255)',
            border: '0.5px solid rgba(118, 118, 118, 0.28)',
            borderRadius: '12px',
            boxShadow: 'rgb(0 0 0 / 15%) 0px 10px 37px',
            overflow: 'hidden',
        },

        '& .MuiListItem-button:hover': {
            backgroundColor: 'transparent'
        }

    },

    priceMenu: {
        maxHeight: 'calc(100vh - 300px)',
        overflow: 'hidden',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',

        '& .MuiListItem-button:hover': {
            backgroundColor: 'transparent'
        }

    },

    priceMenu__wrapper: {
        minWidth: '400px',
        padding: '20px'
    },

    priceMenu__content: {
        paddingTop: '8px',
        '& > h6': {
            margin: 0,
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            color: 'rgb(34,34,34)',
            paddingBottom: '40px'
        }
    },

    priceMenu__rangePrice: {
        margin: '0',
        width: '100%',
    },

    priceMenu__rangePrice__item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    priceMenu__inputField: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '28px'
    },

    priceMenu__inputField__divide: {
        padding: '0 10px'
    },

    priceMenu__footer: {
        padding: '12px 14px',
        borderTop: '1px solid rgb(235, 235, 235)',
        flex: '1 1 auto',
        width: '100%'
    },

    priceMenu__footer__wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    priceMenu__footer__deleteBtn: {
        cursor: 'pointer',
        opacity: 1,
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        color: '#000',
        margin: '0 -10px',
        textAlign: 'center',
        width: 'auto',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 600,
        borderRadius: '8px',
        padding: '10px',
        textDecoration: 'underline',
    },

    priceMenu__footer__saveBtn: {
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


const useStylesPriceInput = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        color: 'rgb(34,34,34)',
        maxWidth: '170px',
        borderRadius: '8px',
        "& .MuiFormLabel-root": {
            color: "rgb(34 34 34)",

        },
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `rgb(34 34 34) 0px 0px 0px 1px inset `,
            borderColor: 'rgb(34,34,34)',
        },
    },
    focused: {},
}));

function PriceInputField(props) {
    const classes = useStylesPriceInput();

    return <TextField
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
            ),
            classes, disableUnderline: true
        }} {...props}
    />;
}

export { useStyles, AirbnbSlider, AirbnbThumbComponent, PriceInputField };
