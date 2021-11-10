// import axios from "axios";
import { instance } from "../util";

export const loadPublicReport = (fetchURL) => async (dispatch) => {
    dispatch({
        type: "LOADING_PUBLIC_REPORT",
    });
    //FETCH AXIOS
    const publicData = await instance.get(fetchURL);
    console.log(publicData);

    dispatch({
        type: "FETCH_PUBLIC_REPORT",
        payload: {
            data: publicData.data,
        }
    })
}