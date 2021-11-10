const initialState = {
    vaccinationDoneByTime: [],
    vaccinationDoneByTimeAgeWise: [],
    registration: [],
    vaccination: [],
    vaccinationByAge: [],
    getBeneficiariesGroupBy: [],
    registration: [], 
    vaccination: [], sites: [],
    topBlock: [],
    isLoading: true
}

export const publicReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PUBLIC_REPORT":
            return {
                ...state,
                vaccinationDoneByTime : action.payload.data.vaccinationDoneByTime,
                vaccinationDoneByTimeAgeWise: action.payload.data.vaccinationDoneByTimeAgeWise,
                vaccination: action.payload.data.topBlock.vaccination,
                vaccinationByAge: action.payload.data.vaccinationByAge,
                getBeneficiariesGroupBy: action.payload.data.getBeneficiariesGroupBy,
                registration: action.payload.data.topBlock.registration,
                vaccination: action.payload.data.topBlock.vaccination,
                sites: action.payload.data.topBlock.sites,

                isLoading: false
            }
        case "LOADING_PUBLIC_REPORT":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return {...state}
    }
}