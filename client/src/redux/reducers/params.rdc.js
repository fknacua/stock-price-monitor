const appParams = (state = {
    ticker: [],
    priceSource: []
}, action) => {
    switch (action.type) {
        case "FETCH_PARAMS_TICKERS":
            return {
                ...state,
                ticker: action.payload
            }
        case "FETCH_PARAMS_PRICE_SOURCE":
            return {
                ...state,
                priceSource: action.payload
            }
        default:
            return state;
    }
}

export default appParams;