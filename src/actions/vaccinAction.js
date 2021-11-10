// import axios from "axios";
import { instance } from "../util";

export const loadVaccinationReport = (fetchURL) => async (dispatch) => {
    dispatch({
        type: "LOADING_VACCINE_REPORT",
    });
    //FETCH AXIOS
    const vaccinationData = await instance.get(fetchURL);
    console.log(vaccinationData);

    dispatch({
        type: "FETCH_VACCIN_REPORT",
        payload: {
            data: vaccinationData.data,
        }
    })
}