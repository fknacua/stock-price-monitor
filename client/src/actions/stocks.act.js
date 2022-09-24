import * as apiServices from '../services/app.service';

export const getStocks = (ticker, priceSource) => async (dispatch) => {
    try {
        const { data } = await apiServices.getRecentStocks(ticker, priceSource);

        dispatch({type: "FETCH_BY_CRITERIA", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
