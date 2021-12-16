import { ClickAwayListener, Grow, MenuList, Paper, Popper } from '@material-ui/core';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { DesktopDateRangePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { vi } from "date-fns/locale";
import moment from "moment";
import queryString from "query-string";
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from "react-router";
import manageLocationApi from '../../../../api/manageLocationApi';
import GuestCount from "../../../../components/GuestCount";
import useStyles from "./style";

const SearchBarVer2 = ({ queryParams, setDisplaySearchBar, payPagePath }) => {


    const history = useHistory();

    // Date Picker
    const [bookingTime, setBookingTime] = useState([
        queryParams._checkIn ? new Date(queryParams._checkIn) : null,
        queryParams._checkOut ? new Date(queryParams._checkOut) : null,
    ]);

    useEffect(() => {
        if (queryParams._checkIn && queryParams._checkOut) {
            setBookingTime([queryParams._checkIn, queryParams._checkOut])
        }
    }, [queryParams])

    // location Search
    const [locationList, setLocationList] = useState([]);
    useEffect(() => {

        (async () => {
            const response = await manageLocationApi.getAll();
            setLocationList(response);
        })();
    }, []);
    const {
        value,
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        options: locationList,
        id: "useAutocomplete",
        getOptionLabel: (option) => option.province,
    });


    const inputValueRef = { ...getInputProps() }.value;

    const locationInputValue = locationList.find(
        (location) => location.province === inputValueRef
    );

    const checkInFormatted = moment(bookingTime[0]).format("YYYY-MM-DD");
    const checkOutFormatted = moment(bookingTime[1]).format("YYYY-MM-DD");


    const locationParams = useParams();
    const locationIdFromParams = locationParams.locationId;
    const locationId = locationInputValue?._id || locationIdFromParams;


    // Guest count
    const [numbers, setNumbers] = useState({
        _adult: 0,
        _children: 0,
        _toddler: 0,
    });

    // Menu function
    const [openMenu, setOpenMenu] = useState(false);
    const anchorRef = useRef(null);
    const handleToggleMenu = () => {
        setOpenMenu(state => !state)
    };
    const handleCloseMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenMenu(false);
    }

    // Search Action
    const pushQueryParams = {
        ...queryParams,
        _location: queryParams._location || locationInputValue?.province,
        _checkIn: checkInFormatted,
        _checkOut: checkOutFormatted,
        _adult: numbers._adult,
        _children: numbers._children,
        _toddler: numbers._toddler,

    }

    const handleSearch = () => {
        if (!value) return
        history.push({
            pathname: `/list/${locationId}`,
            search: queryString.stringify(pushQueryParams),
        });
        setDisplaySearchBar(false)
    }

    // Reset Search bar when user in pay page

    useEffect(() => {
        if (payPagePath) {
            setBookingTime([null, null]);
            setNumbers({
                _adult: 0,
                _children: 0,
                _toddler: 0,
            })
        }

    }, [payPagePath])



    const classes = useStyles();
    return (
        <div className={classes.root}>

            {/* Location Search */}
            <div className={classes.locationSearch}>
                <div className={classes.locationSearch__wrapper} {...getRootProps()}>
                    <label
                        htmlFor=""
                        className={classes.locationSearch__label}
                        {...getInputLabelProps()}

                    >
                        Địa điểm
                    </label>
                    <div>
                        <input
                            className={classes.locationSearch__input}
                            type="text"
                            placeholder="Bạn sắp đi đâu?"
                            {...getInputProps()}

                        />
                    </div>
                </div>

                <div className={classes.locationSearch__dropdown}>
                    {groupedOptions.length > 0 ? (
                        <ul
                            className={classes.locationSearch__lists}
                            {...getListboxProps()}
                        >
                            {groupedOptions.map((option, index) => (
                                <li
                                    {...getOptionProps({ option, index })}
                                    className={classes.locationSearch__list}
                                >
                                    <div className={classes.locationSearch__lists__icon}>
                                        <LocationOnOutlinedIcon
                                            className={classes.locationSearch__lists__icon__item}
                                        />
                                    </div>
                                    <span className={classes.locationSearch__lists__title}>
                                        {option.province}, {option.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>

            {/* Date Picker */}
            <div className={classes.datePicker}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
                    <DesktopDateRangePicker
                        disablePast
                        className={classes.dateRangePicker}
                        value={bookingTime}
                        onChange={(newValue) => {
                            setBookingTime(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <div className={classes.datePicker__el}>
                                    <p className={classes.datePicker__label}>Nhận phòng</p>
                                    <input
                                        ref={startProps.inputRef}
                                        {...startProps.inputProps}
                                        className={classes.datePicker__input}
                                        placeholder="Thêm ngày"
                                    />
                                </div>
                                <div className={classes.datePicker__el}>
                                    <p className={classes.datePicker__label}>Trả phòng</p>
                                    <input
                                        ref={endProps.inputRef}
                                        {...endProps.inputProps}
                                        className={classes.datePicker__input}
                                        placeholder="Thêm ngày"
                                    />
                                </div>
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            </div>


            {/* Customer */}
            <div className={classes.customer} ref={anchorRef}>
                <div className={classes.customer__el}>
                    <div
                        className={classes.customer__el__content}
                        onClick={handleToggleMenu}
                    >
                        <p className={classes.customer__title}>Khách</p>
                        <p className={classes.customer__text}>
                            {numbers._adult === 0 ? (
                                "Thêm khách"
                            ) : (
                                <>
                                    {numbers._adult + numbers._children} khách
                                    {numbers._toddler !== 0
                                        ? `, ${numbers._toddler} em bé`
                                        : null}
                                </>
                            )}
                        </p>
                    </div>
                    <button className={classes.formControl__button}
                        onClick={handleSearch}
                    >
                        <SearchIcon className={classes.formControl__button__icon} />
                    </button>
                </div>
            </div>


            <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal
                className={classes.popper}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className={classes.guestMenu}>
                            <ClickAwayListener onClickAway={handleCloseMenu}>
                                <MenuList autoFocusItem={openMenu} id="menu-list-grow" className={classes.guestMenuList}>
                                    <GuestCount numbersFilter={numbers} setNumbersFilter={setNumbers} />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>



        </div>
    );
};

export default SearchBarVer2;