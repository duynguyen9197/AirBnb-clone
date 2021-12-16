import React, { useState, useEffect, useMemo } from 'react';
import useStyles from "./style";
import Mapbox from '../Mapbox';
import { useHistory, useLocation } from 'react-router';
import { Pagination } from '@material-ui/lab';
import MapIcon from '@material-ui/icons/Map';
import queryString from "query-string";
import { Grid } from '@material-ui/core';
import OptionsDialog from '../OptionsDialog';
import MobileCard from "../MobileCard";
import PriceFilterDrawer from "../PriceFilterDrawer";

const MobileView = (props) => {

    const {
        listRoomPaginate,
        priceValue,
        setPriceValue,
        handleChangePriceValue,
        filter,
        setFilter,
        resetFilter,
        resetPrice,
        handleChangInputFieldMin,
        handleChangInputFieldMax,
        totalRooms,
        filterDisplayRooms
    } = props;

    const history = useHistory()

    // Pagination
    const [page, setPage] = useState(1);
    const [listRooms, setListRooms] = useState([]);
    const handlePagination = (event, page) => {
        setPage(page)
    }
    useEffect(() => {
        setListRooms(listRoomPaginate[page - 1])

    }, [listRoomPaginate, page])


    // Manipulate Map
    const [transform, setTransform] = useState(false);

    const handleToggleMap = () => {
        if (!transform) {
            setTransform(true);

        } else {
            setTransform(false);

        }
    }

    const handleSetFullMap = () => {
        setTransform(true)
        window.scrollTo(0, 0)
    }


    const [scroll, setScroll] = useState(false)


    useEffect(() => {
        const handleScrollToDisplay = () => {
            setScroll(window.scrollY > 250)
        };
        window.addEventListener("scroll", handleScrollToDisplay)
        return () => {
            window.removeEventListener("scroll", handleScrollToDisplay);
        }

    }, [scroll])

    // Query Params
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _location: params._location,
            _checkIn: params._checkIn,
            _checkOut: params._checkOut,
            _adult: Number.parseInt(params._adult),
            _children: Number.parseInt(params._children),
            _toddler: Number.parseInt(params._toddler),
            _roomLatitude: Number(params._roomLatitude),
            _roomLongitude: Number(params._roomLongitude),
            _locationLatitude: Number(params._locationLatitude),
            _locationLongitude: Number(params._locationLongitude)
        };
    }, [location.search]);

    // Coordinates 
    const [roomCoors, setRoomCors] = useState([]);
    const [locationCoors, setLocationCoors] = useState({})

    // handleChangePage
    const handleChangePage = (roomId) => {

        const pickedRoom = roomCoors.find((room => room._id === roomId));

        history.push({
            pathname: `/detail/${roomId}`,
            search: queryString.stringify({
                ...queryParams,
                _roomLatitude: pickedRoom.latitude, _roomLongitude: pickedRoom.longitude,
                _locationLatitude: locationCoors.latitude, _locationLongitude: locationCoors.longitude
            }),
        })
    }

    const locationProvince = listRooms?.[0]?.locationId.province;


    const classes = useStyles({ transform, scroll });
    return (
        <div className={classes.root} >

            {/* Mapbox */}
            <div className={classes.map}>
                <div className={classes.mapBox} onClick={() => handleSetFullMap()}>
                    <Mapbox
                        setLocationCoors={setLocationCoors}
                        setRoomCors={setRoomCors}
                        handleChangePage={handleChangePage}
                        province={locationProvince}
                        listRooms={listRooms}
                    />
                </div>
            </div>
            {/* this div is used to press the main content downward */}
            <div className={classes.content__top__transparent}

            ></div>

            {/* Content */}
            <div className={classes.content} >
                <div className={classes.wrapper}>
                    {/* Header */}
                    <div className={classes.header} onClick={() => handleToggleMap()}>
                        <div className={classes.header__content}>
                            <h6 className={classes.header__content__text} >
                                Hơn {totalRooms} chỗ ở
                            </h6>
                        </div>

                    </div>

                    {/* Cards */}
                    <section className={classes.section}  >

                        {/* <PriceFilterDrawer /> */}
                        <div className={classes.filter__group} >
                            <PriceFilterDrawer
                                priceValue={priceValue}
                                setPriceValue={setPriceValue}
                                handleChangePriceValue={handleChangePriceValue}
                                resetPrice={resetPrice}
                                handleChangInputFieldMin={handleChangInputFieldMin}
                                handleChangInputFieldMax={handleChangInputFieldMax}
                            />

                            <OptionsDialog
                                filter={filter}
                                setFilter={setFilter}
                                resetFilter={resetFilter}
                                filterDisplayRooms={filterDisplayRooms}
                            />
                        </div>

                        <Grid container spacing={3}>
                            {listRooms?.length > 0
                                ? <MobileCard
                                    handleChangePage={handleChangePage}
                                    listRooms={listRooms}
                                />
                                :

                                <h3>
                                    Không tìm thấy phòng theo yêu cầu
                                </h3>

                            }
                        </Grid>

                        <div className={classes.pagination__wrapper}>
                            <Pagination
                                className={classes.pagination}
                                boundaryCount={1}
                                defaultPage={1}
                                count={listRoomPaginate?.length}
                                page={page}
                                onChange={handlePagination}
                                color="standard" />
                        </div>
                    </section>
                </div>
            </div>
            <div className={classes.button__mobile__wrapper} >
                <button className={classes.button__mobile__item}
                    onClick={() => handleSetFullMap()}
                >
                    <span>
                        Hiện bản đồ
                    </span>
                    <MapIcon />
                </button>
            </div>
        </div>
    );
};

export default MobileView;