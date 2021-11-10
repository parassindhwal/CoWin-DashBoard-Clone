export const stateData = (flag) => 
    ({
        type: "SET_STATE",
        payload: {
            flag: flag
        }
    })


export const districtData = (flag) => 
    ({
        type: "SET_DISTRICT",
        payload: {
            flag: flag
        }
    })

export const defaultData = () => 
    ({
        type: "SET_DEFAULT",
        payload: {
            flag: 'State/UT'
        }
    })

