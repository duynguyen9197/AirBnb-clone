import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Slide, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import useStyles from "./style";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OptionsDialog(props) {
    const { setFilter, filter, resetFilter, filterDisplayRooms } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    const utilities = [
        { id: 1, name: 'elevator', label: 'Thang máy' },
        { id: 2, name: 'hotTub', label: 'Bồn nước nóng' },
        { id: 3, name: 'pool', label: 'Hồ bơi' },
        { id: 4, name: 'indoorFireplace', label: 'Lò sửu' },
        { id: 5, name: 'dryer', label: 'Máy sáy' },
        { id: 6, name: 'gym', label: 'Phòng gym' },
        { id: 7, name: 'kitchen', label: 'Phòng bếp' },
        { id: 8, name: 'wifi', label: 'Wifi' },
        { id: 9, name: 'heating', label: 'Máy sửu' },
        { id: 10, name: 'cableTV', label: 'TV Cáp' },
    ];

    const addBed = () => {
        if (filter.guests > 15) return;
        setFilter({ ...filter, guests: filter.guests + 1 })
    }

    const minusBed = () => {
        if (filter.guests < 1) return;
        setFilter({ ...filter, guests: filter.guests - 1 })
    }

    const addbedRoom = () => {
        if (filter.bedRoom > 15) return;
        setFilter({ ...filter, bedRoom: filter.bedRoom + 1 })
    }

    const minusbedRoom = () => {
        if (filter.bedRoom < 1) return;
        setFilter({ ...filter, bedRoom: filter.bedRoom - 1 })
    }

    const addBath = () => {
        if (filter.bath > 15) return;
        setFilter({ ...filter, bath: filter.bath + 1 })
    }

    const minusBath = () => {
        if (filter.bath < 1) return;
        setFilter({ ...filter, bath: filter.bath - 1 })
    }


    const handleChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.checked });
    };


    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);


    const classes = useStyles({ isDesktop });

    return (
        <Fragment>
            <div className={classes.filter__item}>
                <button className={classes.filter__item__button} onClick={handleClickOpen('paper')}>
                    <span>Bộ lọc khác</span>
                </button>
            </div>

            <Dialog
                fullWidth={isDesktop && "true"}
                maxWidth={isDesktop && "md"}
                fullScreen={!isDesktop && "true"}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                TransitionComponent={Transition}
                keepMounted
            >
                <DialogTitle id="scroll-dialog-title">
                    <header className={classes.header}>
                        <div className={classes.header__closeBtn}>
                            <button className={classes.closeBtn__item} onClick={handleClose}>
                                <CloseIcon className={classes.closeBtn__item__icon} />
                            </button>
                        </div>
                        <h6 className={classes.header__title}>Bộ lọc khác</h6>
                    </header>
                </DialogTitle>
                <DialogContent >
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <div className={classes.content}>
                            <div className={classes.content__container}>
                                <main>
                                    <div className={classes.content__element}>
                                        <section>
                                            <h3 className={classes.content__element__header}>
                                                Phòng và phòng ngủ
                                            </h3>

                                            {/* Element */}
                                            <div className={classes.content__element__items}>


                                                <div className={classes.content__element__item}>
                                                    <div className={classes.itemWrapper}>
                                                        <div className={classes.item__text}>
                                                            <p>Khách</p>
                                                        </div>
                                                        <div className={classes.item__action}>
                                                            <button className={classes.item__action__btn}
                                                                onClick={() => minusBed()}
                                                            >
                                                                <span>-</span>
                                                            </button>
                                                            <span className={classes.item__action__number}>
                                                                {filter.guests}
                                                            </span>
                                                            <button className={classes.item__action__btn}
                                                                onClick={() => addBed()}
                                                            >
                                                                <span>+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={classes.content__element__item}>
                                                    <div className={classes.itemWrapper}>
                                                        <div className={classes.item__text}>
                                                            <p>Phòng ngủ</p>
                                                        </div>
                                                        <div className={classes.item__action}>
                                                            <button className={classes.item__action__btn}
                                                                onClick={() => minusbedRoom()}
                                                            >
                                                                <span>-</span>
                                                            </button>
                                                            <span className={classes.item__action__number}>
                                                                {filter.bedRoom}
                                                            </span>
                                                            <button className={classes.item__action__btn}
                                                                onClick={() => addbedRoom()}
                                                            >
                                                                <span>+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={classes.content__element__item}>
                                                    <div className={classes.itemWrapper}>
                                                        <div className={classes.item__text}>
                                                            <p>Phòng tắm</p>
                                                        </div>
                                                        <div className={classes.item__action}>
                                                            <button className={classes.item__action__btn}
                                                                onClick={() => minusBath()}
                                                            >
                                                                <span>-</span>
                                                            </button>
                                                            <span className={classes.item__action__number}>
                                                                {filter.bath}
                                                            </span>
                                                            <button className={classes.item__action__btn}
                                                                onClick={() => addBath()}
                                                            >
                                                                <span>+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <div className={classes.content__element}>
                                        <section>
                                            <h3 className={classes.content__element__header}>
                                                Tiện ích
                                            </h3>

                                            {/* Element */}
                                            <div className={classes.content__element__items}>

                                                {utilities.map((uti) => (
                                                    <div className={classes.content__element__checkbox}>
                                                        <FormControlLabel
                                                            control={<Checkbox
                                                                color="textSecondary"
                                                                className={classes.checkbox}
                                                                name={uti.name}
                                                                checked={filter[uti.name]}
                                                                onChange={handleChange}
                                                            // onChange={}

                                                            />}
                                                            label={<Typography variant="body1" color="textPrimary">
                                                                {uti.label}
                                                            </Typography>}
                                                            className={classes.formControl}
                                                            color="primary"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <div className={classes.footer__wrapper}>
                        <button className={classes.footer__deleteAll}
                            onClick={() => resetFilter()}
                        >
                            Xóa tất cả
                        </button>

                        <button className={classes.footer__display} onClick={handleClose}>
                            Hiển thị hơn {filterDisplayRooms} chỗ ở
                        </button>
                    </div>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}