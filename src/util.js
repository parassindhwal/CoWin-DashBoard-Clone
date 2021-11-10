import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.cowin.gov.in/api/v1/reports/v2/'
});

//getting date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}`:month;
}

//getting day
const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}`:day;
}

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

export const vaccInfoURL = (stateId = '', districtId = '') =>  `getVacPublicReports?state_id=${stateId}&district_id=${districtId}&date=${currentDate}`;

export const publicInfoURL = (stateId = '', districtId = '') =>  `getPublicReports?state_id=${stateId}&district_id=${districtId}&date=${currentDate}`;

//Sort data in ascending order
export const sortDataAsc = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.total > b.total) {
            return -1;
        } else {
            return 1;
        }
    })

    return sortedData;
}