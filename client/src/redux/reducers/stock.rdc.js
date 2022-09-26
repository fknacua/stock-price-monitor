const stocks = (stocks = [], action) => {
    switch (action.type) {
        case "FETCH_BY_CRITERIA":
            return action.payload;
        case "REFRESH":
            return stocks;
        default:
            return stocks;
    }
}

export default stocks;