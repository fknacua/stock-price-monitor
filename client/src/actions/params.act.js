import * as apiServices from '../services/app.service';

export const getPriceSources = () => async (dispatch) => {
    try {
        const { data } = await apiServices.getPriceSources();

        dispatch({type: "FETCH_PARAMS_PRICE_SOURCE", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getTickers = () => async (dispatch) => {
    try {
        const { data } = await apiServices.getTickers();

        dispatch({type: "FETCH_PARAMS_TICKERS", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}