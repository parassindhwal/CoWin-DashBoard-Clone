const initialState = {
    vaccinationData: 'State/UT',
    district: true
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_DEFAULT": 
            return {
                ...state,
                vaccinationData: action.payload.flag
            }
        case "SET_STATE":
            if(action.payload.flag) {
                return {
                    ...state,
                    vaccinationData: 'Districts'
                }
            } else {
                return {
                    ...state,
                    vaccinationData: 'State/UT',
                    district: true
                }
            }
        case "SET_DISTRICT":
            if(action.payload.flag) {
                return {
                    ...state,
                    vaccinationData: 'Centers',
                    district: false
                }
            } else {
                return {
                    ...state,
                    vaccinationData: 'Districts',
                    district: true
                }
            }
        default:
            return {...state}
    }
}