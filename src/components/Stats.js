import React, {useState, useEffect} from 'react';
import './Stats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { data } from '../statesData';
import Card from "./Card";

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadPublicReport } from '../actions/publicAction';
import { loadVaccinationReport } from '../actions/vaccinAction';
import { publicInfoURL, vaccInfoURL } from '../util';

import { faSyringe, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { defaultData, districtData, stateData } from '../actions/globalAction';

function Stats() {
    const dispatch = useDispatch();
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    
    const [stateName, setStateName] = useState(null);
    const [districtName, setDistrictName] = useState(null);
    useEffect(() => {
        if(stateName != null) {
            dispatch(stateData(true))
        } else {
            dispatch(stateData(false))
        }        
    }, [stateName])

    useEffect(() => {
        if(districtName != null) {
            dispatch(districtData(true))
        } else {
            dispatch(districtData(false))
        }   
    }, [ districtName])

    useEffect(() => {
            dispatch(defaultData(true))      
    }, [])


    const handleStateChange = async (e) => {
        setState(e.target.value);
        dispatch(loadPublicReport(publicInfoURL(e.target.value)));
        dispatch(loadVaccinationReport(vaccInfoURL(e.target.value)));
        data.states.forEach(item => {
            
            if(item.state[1] == e.target.value) {
                setStateName(item.state[0])
                setDistrictName(null);
                console.log(item.state[0])
            }
        })
        if(e.target.value === "") {
            setStateName(null)
        }
      }
      const handleDistrictChange = async (e) => {
        console.log(e.target.value);
        setDistrict(e.target.value);
        dispatch(loadPublicReport(publicInfoURL(state, e.target.value)));
        dispatch(loadVaccinationReport(vaccInfoURL(state, e.target.value)));
        data.states[state - 1].districts.forEach(item => {
            if(item[1] == e.target.value) {
                setDistrictName(item[0])
                console.log(item[0])
            }
        })
        if(e.target.value === "") {
            setDistrictName(null)
        }
      }

      const { registration, vaccination, sites } = useSelector((state) => state.public);
    
    return (
        <div className="stats">
            <div className="stats__header">
                <div>
                    <FontAwesomeIcon icon={faHome} />
                    <span> India {stateName ? districtName ? ` / ${stateName} / ${districtName}` : ` / ${stateName}` : ''}</span>
                </div>
                <div className="selector">
                    <div className="selectState">
                    <select name="" id="" value={state || ''} onChange={handleStateChange}>
                        <option value=''>Select State</option>
                        {data.states.map(set => {
                        return <option key={set.state[1]} value={set.state[1]} >{set.state[0]}</option>
                        })}

                    </select>
                    </div>
                    <div className="selectDistrict">
                        <select name="" id="" value={district || ''} onChange={ handleDistrictChange}>
                        <option value=''>Select District</option>
                        {state ? data.states[state - 1].districts.map(set => {
                            return <option key={set[1]} value={set[1]} id={set[0]}>{set[0]}</option>
                        }): ''}
                    </select>

                    </div>
                </div>
            </div>
            {/* Button to export to be implemented */}
            <div className="stats__card">
                <Card 
                    mainTitle={'Total Vaccination Doses'} 
                    title1={'Dose 1'} 
                    title2={'Dose 2'} 
                    number1={vaccination.tot_dose_1?.toLocaleString('en-IN')} 
                    number2={vaccination.tot_dose_2?.toLocaleString('en-IN')} 
                    number={vaccination.total?.toLocaleString('en-IN')} 
                    icon={faSyringe}/>
                <Card 
                    mainTitle={'Sites Conducting Vaccination'} 
                    title1={'Government'} 
                    title2={'Private'} 
                    number1={sites.govt?.toLocaleString('en-IN')} 
                    number2={sites.pvt?.toLocaleString('en-IN')} 
                    number={sites.total?.toLocaleString('en-IN')} 
                    icon={faBuilding}/>
                {state ? '' :<Card 
                                mainTitle={'Total Registrations'} 
                                title1={'Age 18-44'} 
                                title2={'Age 45+'} 
                                number1={registration.cit_18_45?.toLocaleString('en-IN')} 
                                number2={registration.cit_45_above?.toLocaleString('en-IN')} 
                                number={registration.total?.toLocaleString('en-IN')} 
                                icon={faUsers}/>}
            </div>
        </div>
    )
}

export default Stats;
