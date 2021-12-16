import { CREATE_LOCATION, GET_LOCATION, GET_LOCATIONS } from '../types/LocationType'

const initialState = {
    locations: [],
    createLocation: [],

    arrUpdate: [],
    location: {},
}

const LocationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_LOCATIONS: {

            return { ...state, locations: payload }
        }
        case CREATE_LOCATION: {

            return { ...state, createLocation: payload }
        }

        case GET_LOCATION: {

            return { ...state, location: payload }
        }
        default:
            return { ...state }
    }

}

export default LocationReducer