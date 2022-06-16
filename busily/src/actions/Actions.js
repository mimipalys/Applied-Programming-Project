import axios from "axios";
import { FETCH_ALL_DATA, FETCH_ONE_DATA } from "../constants/Constants";

const dataFetch = (data) => ({
    type: FETCH_ALL_DATA,
    data,
});

const dataFetchOne = (data) => ({
    type: FETCH_ONE_DATA,
    data,
})

export const fetchDataAll = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        dispatch(dataFetch(response.data));
    });

};
export const fetchMainUser = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((response) => {
        const list = [response.data]
        dispatch(dataFetchOne(list));
    });
};
