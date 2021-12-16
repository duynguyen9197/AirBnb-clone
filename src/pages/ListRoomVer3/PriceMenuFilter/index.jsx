import { Menu, MenuItem } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { formMoney } from '../../../utilities/helper';
import { AirbnbSlider, AirbnbThumbComponent, PriceInputField, useStyles } from "./style";

const PriceMenuFilter = (props) => {
    const { priceValue, handleChangePriceValue, resetPrice, handleChangInputFieldMin, handleChangInputFieldMax } = props;
    const classes = useStyles();
    const [anchorElPrice, setAnchorElPrice] = useState(null);
    const handleOpenPrice = (event) => {
        setAnchorElPrice(event.currentTarget);
    };

    const handleClosePrice = () => {
        setAnchorElPrice(null);
    };


    return (
        <Fragment>
            <div className={classes.filter__item}>
                <button className={classes.filter__item__button} onClick={(event) => handleOpenPrice(event)}>
                    <span>Giá</span>
                </button>
            </div>

            {/* Modal Price */}
            <Menu

                id="price-menu"
                anchorReference="anchorPosition"
                anchorPosition={{ top: 250, left: 10 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorEl={anchorElPrice}
                keepMounted
                open={Boolean(anchorElPrice)}
                onClose={handleClosePrice}
                className={classes.rootPriceMenu}
            >
                <MenuItem
                    disableRipple
                    className={classes.priceMenu}>
                    <div className={classes.priceMenu__wrapper}>
                        <div className={classes.priceMenu__content}>
                            <h6>Giá trung bình hàng đêm là {formMoney(500000)} </h6>
                        </div>

                        <div className={classes.priceMenu__rangePrice}>
                            <div className={classes.priceMenu__rangePrice__item}>

                                <AirbnbSlider
                                    ThumbComponent={AirbnbThumbComponent}
                                    defaultValue={[0, 1000000]}
                                    min={0}
                                    max={1000000}
                                    getAriaLabel={(index) =>
                                        index === 0 ? "Minimum price" : "Maximum price"
                                    }
                                    value={priceValue}
                                    onChange={handleChangePriceValue}
                                />

                            </div>

                            <div className={classes.priceMenu__inputField}>
                                <PriceInputField
                                    label="giá tối thiểu"
                                    defaultValue={priceValue[0]}
                                    value={priceValue[0]}
                                    variant="filled"
                                    id="price-inputfield1"
                                    onChange={handleChangInputFieldMin}
                                />
                                <span className={classes.priceMenu__inputField__divide}>-</span>
                                <PriceInputField
                                    label="giá tối đa"
                                    // className={classes.margin}
                                    defaultValue={priceValue[1]}
                                    value={priceValue[1]}
                                    variant="filled"
                                    id="price-inputfield2"
                                    onChange={handleChangInputFieldMax}
                                />
                            </div>
                        </div>


                    </div>
                    {/* Footer */}
                    <div className={classes.priceMenu__footer}>
                        <div className={classes.priceMenu__footer__wrapper}>
                            <button className={classes.priceMenu__footer__deleteBtn} onClick={() => resetPrice()}>
                                Xóa
                            </button>

                            <button className={classes.priceMenu__footer__saveBtn} onClick={() => handleClosePrice()}>
                                Lưu
                            </button>

                        </div>
                    </div>
                </MenuItem>
            </Menu>


        </Fragment>
    );
};

export default PriceMenuFilter;