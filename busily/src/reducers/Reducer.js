import { FETCH_ALL_DATA } from "../constants/Constants";

const initialState = {
    users: [],
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
        default:
            return state;
    }
};
