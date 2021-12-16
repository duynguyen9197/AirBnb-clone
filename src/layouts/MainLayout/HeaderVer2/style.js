import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    appBar: {
        height: props => props.displaySearchBar && props.homepageRoute ? '160px' : '80px',

    },

    appBarFixed: {
        position: "fixed",
        top: 0,
        backgroundColor: props => (props.scroll) ? 'rgb(255, 255, 255)' : 'transparent',
        boxShadow: props => (props.scroll) ? '0px 2px 4px rgb(0 0 0 / 18%)' : 'none',
    },

    appBarFixedList: {
        position: "fixed",
        top: 0,
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 2px 4px rgb(0 0 0 / 18%)',

    },

    appBarStaticDetail: {
        position: 'static',
        backgroundColor: 'rgb(255, 255, 255)',
        borderBottom: props => props.displaySearchBar ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: props => props.displaySearchBar ? 'none' : '0px 2px 4px rgb(0 0 0 / 18%)',
    },

    appBarStaticPay: {
        position: 'static',
        backgroundColor: 'rgb(255, 255, 255)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 2px 4px rgb(0 0 0 / 18%)',
    },

    wrapper: {
        paddingLeft: 40,
        paddingRight: 40,
        [theme.breakpoints.up("xl")]: {
            paddingLeft: 80,
            paddingRight: 80,
        },
        display: 'flex',
        alignItems: 'center',

    },

    imageIcon: {
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.up("xl")]: {
            flex: '0 0 275px'
        },
        flex: '0  0 auto',
    },

    imageIcon__img: {
        display: 'block',
        // width: 102,
        width: '100%',
        height: 32,
        objectFit: 'cover',

    },

    navigation: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    navigation__list: {
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',

        '& > li > a': {
            opacity: .8,
        },

        '& > li:first-child > a': {
            opacity: 1,
        },

        '& > li:first-child > a::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 16,
            height: 2,
            backgroundColor: props => (props.scroll && props.displaySearchBar) ? '#000' : '#fff',
            transition: 'all .4s ease-in',
        },
    },

    list__navigation__list: {
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',

        '& > li > a': {
            opacity: .8,
        },

        '& > li:first-child > a': {
            opacity: 1,
        },

        '& > li:first-child > a::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 16,
            height: 2,
            backgroundColor: '#000',
            transition: 'all .4s ease-in',
        },
    },

    detail__navigation__list: {
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',

        '& > li > a': {
            opacity: .8,
        },

        '& > li:first-child > a': {
            opacity: 1,
        },

        '& > li:first-child > a::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 16,
            height: 2,
            backgroundColor: '#000',
            transition: 'all .4s ease-in',
        },
    },

    navigation__list__item: {
        padding: 10,
        [theme.breakpoints.up("lg")]: {
            padding: '10px 16px',

        },
        '& > a': {
            color: props => (props.scroll && props.homePagePath) ? '#000' : '#fff',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            position: 'relative',
        },
        '& > a:hover': {
            opacity: 1,
            transition: 'hover .4s ease-in'
        },
        '& > a:hover::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 8,
            height: 2,
            backgroundColor: props => (props.scroll && props.displaySearchBar) ? '#000' : '#fff',
            transition: 'all .4s ease-in',
        },
    },

    list__navigation__list__item: {
        padding: '10px 16px',
        '& > a': {
            color: props => props.displaySearchBar ? '#000' : '#fff',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            position: 'relative',
        },
        '& > a:hover': {
            opacity: 1,
            transition: 'hover .4s ease-in'
        },
        '& > a:hover::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 8,
            height: 2,
            backgroundColor: '#000',
            transition: 'all .4s ease-in',
        },
    },

    detail__navigation__list__item: {
        padding: '10px 16px',
        '& > a': {
            color: '#000',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            position: 'relative',
        },
        '& > a:hover': {
            opacity: 1,
            transition: 'hover .4s ease-in'
        },
        '& > a:hover::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 8,
            height: 2,
            backgroundColor: '#000',
            transition: 'all .4s ease-in',
        },
    },

    navigation__search: {
        display: 'flex',
        boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
        color: '#222222',
        outline: 'none',
        backgroundColor: 'transparent',
        borderRadius: '40px',
        opacity: props => !props.displaySearchBar && props.homePagePath ? '1' : '0',
        transform: props => !props.displaySearchBar && props.homePagePath ? 'scale(1)' : 'scale(0)',
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
            boxShadow: '0px 2px 4px rgb(0 0 0 / 18%)'
        },
        maxWidth: 350,
        overflow: 'hidden',
        [theme.breakpoints.up("lg")]: {
            maxWidth: 'none'
        }
    },

    detail__navigation__search: {
        display: 'flex',
        boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
        color: '#222222',
        outline: 'none',
        backgroundColor: 'transparent',
        borderRadius: '40px',
        opacity: props => !props.displaySearchBar ? '1' : '0',
        transform: props => !props.displaySearchBar ? 'scale(1)' : 'scale(0)',
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
            boxShadow: '0px 2px 4px rgb(0 0 0 / 18%)'
        }
    },

    list__navigation__search: {
        opacity: props => props.displaySearchBar ? '0' : '1',
        transform: props => props.displaySearchBar ? 'scale(0)' : 'scale(1)'
    },

    list__navbar__search__wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid #dddddd',
        borderRadius: '40px',
        textAlign: 'left',
        boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
        color: '#222222',
        maxWidth: '100%',
        verticalAlign: 'middle',

    },

    list__navbar__button: {
        paddingLeft: '8px',
        borderTopLeftRadius: 'inherit',
        borderBottomLeftRadius: 'inherit',
        borderRadius: '4px',
        border: '1px solid transparent',
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer',
        margin: '-1px',
        display: 'flex',
        alignItems: 'center',
        flex: '0 1 auto',
        height: '48px',
        overflow: 'visible',
        textOverflow: 'ellipsis',

        '&>span': {
            fontSize: '14px',
            lineHeight: '18px',
            flex: '1 1 auto',
            fontWeight: 500,
            padding: '0 16px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        maxWidth: 100,
        [theme.breakpoints.up("lg")]: {
            maxWidth: 'none'
        }
    },

    list__navbar__dash: {
        backgroundColor: 'rgb(221, 221, 221)',
        flex: '0 0 1px',
        height: '24px',
        width: '1px'
    },

    navigation__search__btn: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '40px',
        width: '300px',
        outline: 'none',
        border: '1px solid #DDDDDD',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        flex: '0 1 auto',
    },

    navigation__search__btn__title: {
        fontSize: '14px',
        lineHeight: '18px',
        flex: '1 1 auto',
        fontWeight: 600,
        padding: '0 16px',
        overflow: 'hidden',
        textAlign: 'left'
    },

    navigation__search__btn__wrap: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        margin: '7px 7px 7px 0',
    },

    navigation__search__btn__icon: {
        fontSize: '17px',
        color: '#fff',
        fontWeight: 500
    },

    profile: {
        display: 'flex',
        alignItems: 'center',
    },

    profile__btn: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        padding: 12,
        color: props => (props.scroll && props.homePagePath) ? '#000' : '#fff',
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 22,
        transition: 'all .3s linear',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: props => (props.scroll && props.homePagePath) ? '#F7F7F7' : 'rgba(255, 255, 255, 0.15)',
            borderRadius: 22,
            transition: 'all .3s linear'
        }
    },

    list__profile__btn: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        padding: 12,
        color: '#000',
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 22,
        transition: 'all .3s linear',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F7F7F7',
            borderRadius: 22,
            transition: 'all .3s linear'
        }
    },

    pay__profile__btn: {
        display: 'none'
    },

    profile__language: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        padding: 12,
        color: props => (props.scroll && props.homePagePath) ? '#000' : '#fff',
        fontSize: 12,
        lineHeight: '12px',
        fontWeight: 600,
        borderRadius: '50%',
        transition: 'all .3s linear',
        cursor: 'pointer',
        margin: '0 4px',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: props => (props.scroll && props.homePagePath) ? '#F7F7F7' : 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            transition: 'all .3s linear'
        }
    },

    list__profile__language: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        padding: 12,
        color: '#000',
        fontSize: 12,
        lineHeight: '12px',
        fontWeight: 600,
        borderRadius: '50%',
        transition: 'all .3s linear',
        cursor: 'pointer',
        margin: '0 4px',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#F7F7F7',
            borderRadius: '50%',
            transition: 'all .3s linear'
        }
    },

    pay__profile__language: {
        display: 'none'
    },

    profile__menuToggle: {
        padding: '5px 5px 5px 12px',
        border: '1px solid #DDDDDD',
        backgroundColor: '#ffffff',
        borderRadius: 21,
        height: 42,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 2px 4px rgb(0 0 0 / 18%)',
            transition: 'box-shadow 0.25s ease',
        },
        position: 'positive',

    },

    pay__profile__menuToggle: {
        display: 'none'
    },

    profile__menuToggle__account: {
        flex: '0 0 30px',
        width: 30,
        marginLeft: 8,
        color: '#717171',
        fontSize: 28
    },

    profile__avatar: {
        flex: '0 0 30px',
        width: 30,
        height: 30,
        marginLeft: 8,
    },

    popper: {
        top: '10px !important',
        left: '-80px !important',
        borderRadius: 22,
        overflow: 'hidden',
        zIndex: 99999,


    },

    menu: {


    },

    menuList: {
        minWidth: 240,
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(34, 34 ,34 )',
        padding: 12,
    },

    menuItem: {
        height: 42,
        fontSize: '16px',
    },

    menuItemBold: {
        height: 42,
        fontSize: '16px',
        fontWeight: 500,
    },

    menuItem__signUp: {
        height: 42,
        fontWeight: 500
    },

    menuItem__dash: {
        height: 1,
        backgroundColor: 'rgb(34, 34 ,34 )',
        padding: 0,
        border: 'none',
        outline: 'none',
        margin: '4px 0'
    },

    searchBar: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
        transition: 'all .3s linear',
        opacity: 1,
        transform: 'scale(1)',
        backgroundColor: props => (props.scroll && props.displaySearchBar) ? '#fff' : 'transparent',
        paddingBottom: 20
    },

    list__searchBar: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        transition: 'all .3s linear',
        opacity: 1,
        transform: 'scale(1)',
        backgroundColor: props => (props.displaySearchBar) ? '#fff' : 'transparent',
        paddingBottom: 20,
        borderBottom: props => props.displaySearchBar ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
        boxShadow: props => props.displaySearchBar ? '0px 2px 4px rgb(0 0 0 / 18%)' : 'none',
    },

    pay__searchBar: {
        display: 'none',
    },

    hideSearchBar: {
        transformOrigin: '50% 0',
        transition: 'all .3s linear',
        opacity: 0,
        transform: 'scale(0)'
    }

}))

export default useStyles;