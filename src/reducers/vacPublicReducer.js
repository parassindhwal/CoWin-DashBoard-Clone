const initialState = {
    last30DaysVaccination: [],
    weeklyReport: [],
    weeklyVacAgeWiseReport: [],
    last30DaysAgeWiseVaccination: [],
    isLoading: true
}

export const vaccineReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_VACCIN_REPORT":
            return {
                ...state,
                last30DaysVaccination: action.payload.data.last30DaysVaccination,
                weeklyReport: action.payload.data.weeklyReport,
                weeklyVacAgeWiseReport: action.payload.data.weeklyVacAgeWiseReport,
                last30DaysAgeWiseVaccination: action.payload.data.last30DaysAgeWiseVaccination,
                isLoading: false
            }
        case "LOADING_VACCIN_REPORT":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return {...state}
    }
}