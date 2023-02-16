const initialState = {
    NobelPrizes: null,
    selectedYear: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_ALL_NOBEL_PRIZES':
            return {
                ...state,
                NobelPrizes: payload
            }
        case 'SET_SELECTED_YEAR':
            let sortedProducts = payload.sort(
                (y1, y2) => (y1.year < y2.year) ? 1 : (y1.year > y2.year) ? -1 : 0);
            return {
                ...state,
                selectedYear: sortedProducts
            }
        default: return state
    }
}