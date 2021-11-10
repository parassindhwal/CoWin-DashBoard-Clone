import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { sortDataAsc } from '../util';
import BarGraph from './BarGraph';

import './VaccinationCoverage.css';

const setBarGraphData = (data)  => {
    const dose_1 = [], dose_2 = [], label = [];
    data.forEach(set => {
        label.push(set.title);
        dose_1.push(set.partial_vaccinated);
        dose_2.push(set.totally_vaccinated)
    })
    const state = {
        labels: label,
        // datasets: [{
        //   label: 'My First Dataset',
        //   data: [dose_1, dose_2],
        //   backgroundColor: [
        //     'rgb(227, 0, 235)',
        //     'rgb(20, 232, 251)'
        //   ],
        //   hoverOffset: 4
        // }]
        datasets: [{    
            label: 'Dose 1',
            data: dose_1,
            backgroundColor: 'rgb(227, 0, 235)',
            borderWidth: 0,
            // hoverOffset: 4 
        },
        {
            label: 'Dose 2',
            data: dose_2,
            backgroundColor: 'rgb(20, 232, 251)',
            borderWidth: 0,
        }]
    }
    return state;
}
function VaccinationCoverage() {
    const [ barData, setBarData] = useState();
    const { getBeneficiariesGroupBy } = useSelector((state) => state.public);
    const { district } = useSelector((state) => state.globalData)

    useEffect(() => {
        setBarData(setBarGraphData(sortDataAsc(getBeneficiariesGroupBy)));
    }, [getBeneficiariesGroupBy])
    if(district) {
        return (
            <div className="vaccinationCoverage">
                <h3>Vaccination Coverage</h3>
                <div className="vaccinationCoverage__graph">
                    <BarGraph data={barData}/>
                </div>
            </div>
        )

    } 
    return <></>;
}

export default VaccinationCoverage
