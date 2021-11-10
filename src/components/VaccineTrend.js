import React, {useState, useEffect} from 'react';
import LineGraph from './LineGraph';
import './VaccineTrend.css';

//redux
import { useSelector } from 'react-redux';
import { vaccinationByTime, vaccineByAgeAll, vaccineByAgeLast30, vaccineByAgeToday, vaccineLast30, weekly } from '../buildChartData';

function VaccineTrend() {

    const { vaccinationDoneByTime, vaccinationDoneByTimeAgeWise } = useSelector((state) => state.public);
    // const pubLoading = useSelector((state) => state.public.isLoading);

    const { last30DaysVaccination, weeklyReport, last30DaysAgeWiseVaccination, weeklyVacAgeWiseReport } = useSelector((state) => state.vaccine);
    // const vacLoading = useSelector((state) => state.vaccine.isLoading);

    const [today, setToday] = useState(true);
    const [last30, setLast30] = useState(false);
    const [all, setAll] = useState(false);

    const [dose, setDose] = useState(true);
    const [age, setAge] = useState(false);

    const [dataState, setDataState] = useState();
    useEffect(() => {

            if(dose && today) {
                setDataState(vaccinationByTime(vaccinationDoneByTime));
            }
            if(dose && last30) {
                setDataState(vaccineLast30(last30DaysVaccination));
            }
            if(dose && all) {
                setDataState(weekly(weeklyReport));
            }
            if(age && today) {
                setDataState(vaccineByAgeToday(vaccinationDoneByTimeAgeWise));
            }
            if(age && last30) {
                setDataState(vaccineByAgeLast30(last30DaysAgeWiseVaccination));
            }
            if(age && all) {
                setDataState(vaccineByAgeAll(weeklyVacAgeWiseReport));
            }
        

    }, [dose, age, today, last30, all,  vaccinationDoneByTime]);



//OnClick handler
    const setDoseTrue = () => {
        if(!dose) {
            setDose(true);
            setAge(false);
        }
    }

    const setAgeTrue = () => {
        if(!age) {
            setDose(false);
            setAge(true);
        }
    }

    const setTodayTrue = () => {
        if(!today) {
            setToday(true);
            setLast30(false);
            setAll(false);
        }
    }
    const setLast30True = () => {
        if(!last30) {
            setToday(false);
            setLast30(true);
            setAll(false);
        }
    }
    const setAllTrue = () => {
        if(!all) {
            setToday(false);
            setLast30(false);
            setAll(true);
        }
    }

    return (
        <div className="vaccinationTrend">
            <h3 className="vaccinationTrend__mainHeading">Vaccination Trends</h3>
            <div className="vaccinationTrend__btn__container">
                <div className="left__btn__container">
                    <button className={`vaccinationTrend__btn ${dose ? 'active' : ''}`} onClick={setDoseTrue}>By Dose</button>
                    <button className={`vaccinationTrend__btn ${age ? 'active' : ''}`} onClick={setAgeTrue}>By Age</button>
                </div>
                <div className="right__btn__container">
                    <button className={`vaccinationTrend__btn ${today ? 'active' : ''}`} onClick={setTodayTrue}>Today</button>
                    <button className={`vaccinationTrend__btn ${last30 ? 'active' : ''}`} onClick={setLast30True}>Last 30Days</button>
                    <button className={`vaccinationTrend__btn ${all ? 'active' : ''}`} onClick={setAllTrue}>All</button>
                </div>
            </div>
            <div className="vaccinationTrend__graph">
                <LineGraph  data={dataState} />
            </div>
          
        </div>
    )
}

export default VaccineTrend;
