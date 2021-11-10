import React, { useEffect, useState } from 'react'
import DoughnutGraph from './DoughnutGraph';
import {useSelector} from'react-redux';
import PieChart from './PieChart';
import { sortDataAsc } from '../util';

import './VaccinationStats.css';

const setDoudhnutGenderData = (data) => {
    const state = {
        labels: ['Male', 'Female', 'Other'],
        datasets: [{
          data: [data.male, data.female, data.others],
          backgroundColor: [
            'rgb(90, 141, 238)',
            'rgb(245, 67, 148)',
            'rgb(255, 152, 0)',
          ],
          hoverOffset: 4
        }]
      }
      return state;
} 

const setDoudhnutVaccineData = (data) => {
    const state = {
        labels: ['Covishield', 'Covaxin', 'Sputnik'],
        datasets: [{
          data: [data.covishield, data.covaxin, data.sputnik],
          backgroundColor: [
            'rgb(90, 141, 238)',
            'rgb(245, 67, 148)',
            'rgb(255, 152, 0)',
          ],
          hoverOffset: 4
        }]
      }
      return state;
} 

const setPieData = (ageData) => {
    console.log(ageData);
    const state = {
        labels: ['18-44', '45-60', 'Above 60'],
        datasets: [{
          label: 'My First Dataset',
          data: [ageData.vac_18_45, ageData.vac_45_60, ageData.above_60],
          backgroundColor: [
            'rgb(170, 222, 167)',
            'rgb(100, 194, 166)',
            'rgb(45, 135, 187)',
          ],
          hoverOffset: 4
        }]
      }
      return state;
}

function VaccinationStats() {
    const [genderData, setGenderData] = useState();
    const [vaccineData, setVaccineData] = useState();
    const [ageData, setAgeData] = useState();
    const { vaccination, vaccinationByAge, getBeneficiariesGroupBy } = useSelector((state) => state.public);
    const { vaccinationData } = useSelector((state) => state.globalData);

    useEffect(() => {
        setGenderData(setDoudhnutGenderData(vaccination));
        setVaccineData(setDoudhnutVaccineData(vaccination));
        setAgeData(setPieData(vaccinationByAge));
    }, [vaccinationByAge, vaccination]);
    return (
        <div className="vaccinationStats">
            <div className="vaccinationStats__category">
                <h3>Vaccination - Category</h3>
                <div>
                    <DoughnutGraph graphData={genderData} />
                </div>
                <div>
                    <DoughnutGraph graphData={vaccineData} />
                </div>
            </div>
            <div className="vaccinationStats__age">
                <h3>Vaccination by Age</h3>
                <div>
                    <PieChart pieData={ageData}/>
                </div>
            </div>
            <div className="vaccinationStats__number">
                <h3>Vaccination By {vaccinationData || 'State/UT'}</h3>
                <div>
                    <table className="vaccinationStats__number__table">
                        <thead>
                            <th className="table__h1">{vaccinationData || 'State/UT'}</th>
                            <th className="table__h2">Today</th>
                            <th className="table__h3">Total</th>
                        </thead>
                        <tbody>
                            {sortDataAsc(getBeneficiariesGroupBy).map(unit => (
                                <tr>
                                    <td className="table__r1">{unit.title}</td>
                                    <td className="table__r2">{unit.today?.toLocaleString('en-IN')}</td>
                                    <td className="table__r3">{unit.total?.toLocaleString('en-IN')}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VaccinationStats;
