import axiosMapbox from './axiosMapbox';

const manageMapboxApi = {

    getLocation(searchTerm, params) {
        const url = `/geocoding/v5/mapbox.places/${searchTerm}.json`;
        return axiosMapbox.get(url, { params })
    },

    getMarker(searchTerm, params) {
        const url = `/geocoding/v5/mapbox.places/${searchTerm}.json`;
        return axiosMapbox.get(url, { params })
    }
}

export default manageMapboxApi;
