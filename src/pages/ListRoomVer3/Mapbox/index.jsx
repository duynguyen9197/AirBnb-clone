import React, { useEffect, useState } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import manageMapboxApi from '../../../api/manageMapboxApi';
import { MAPBOX_TOKEN } from '../../../constants/config';
import Pin from '../Pin';
import useStyles from "./style";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Mapbox = (props) => {
    const { listRooms, province, handleChangePage, setRoomCors, setLocationCoors } = props;

    const classes = useStyles();
    const [markerLocation, setMarkerLocation] = useState([]);

    const [viewport, setViewport] = useState({
        longitude: 0,
        latitude: 0,
        zoom: 12,
    });

    const getLocationParams = {
        access_token: MAPBOX_TOKEN,
        country: 'vn',
    };

    const getMarkerParams = {
        access_token: MAPBOX_TOKEN,
        country: 'vn',
        proximity: `${viewport.longitude},${viewport.latitude}`,
        limit: listRooms?.length
    };


    useEffect(() => {
        (async () => {
            try {
                const res = await manageMapboxApi.getLocation(province, getLocationParams)
                setViewport({ ...viewport, longitude: res.data.features?.[0]?.center?.[0], latitude: res.data.features?.[0]?.center?.[1] })
                setLocationCoors({ longitude: res.data.features?.[0]?.center?.[0], latitude: res.data.features?.[0]?.center?.[1] })
            } catch (error) {
                console.log(error)
            }
        })()
    }, [province])

    useEffect(() => {
        let newMarkerLocation = [];
        (async () => {
            try {
                for (let i = 0; i < listRooms.length; i++) {
                    const res = await manageMapboxApi.getMarker(listRooms[i].name, getMarkerParams)
                    newMarkerLocation[i] = { ...listRooms[i], longitude: res.data.features?.[0].center?.[0], latitude: res.data.features?.[0].center?.[1] }
                }
                setMarkerLocation(newMarkerLocation)
                setRoomCors(newMarkerLocation)
            } catch (error) {
                console.log(error.response)
            }
        })()
    }, [listRooms])

    const navControlStyle = {
        right: 10,
        top: 100
    };


    return (
        <ReactMapGL
            {...viewport}
            className={classes.ReactMapGL}
            width="100%"
            height="100%"
            mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            <NavigationControl style={navControlStyle} />
            {markerLocation.map((location, index) => (
                <div key={location._id}>
                    <Pin location={location} handleChangePage={handleChangePage} />
                </div>
            ))}

        </ReactMapGL>

    );
};

export default Mapbox;