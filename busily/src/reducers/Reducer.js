import {FETCH_ALL_DATA, FETCH_ONE_DATA} from "../constants/Constants";

const initialState = {
    users: [],
    user: [],
    sensors: [
        {
            name: "Tesaa",
        }
    ]
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
        default:
            return state;
    }
};
