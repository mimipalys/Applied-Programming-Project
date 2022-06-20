import {FETCH_ALL_DATA, FETCH_ONE_DATA, SCAN_DATA} from "../constants/Constants";

const initialState = {
    users: [],
    user: [],
    scanData: [],
};

export const app = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_DATA:
            return {
                ...state,
                users: action.data,
            };
        case FETCH_ONE_DATA:
            return {
                ...state,
                user: action.data,
            };
        case SCAN_DATA:
            return {
                ...state,
                scanData: action.data,
            };
        default:
            return state;
    }
};
