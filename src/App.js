import React,{useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav'
import Stats from './components/Stats';
//redux
import { useDispatch } from 'react-redux';
import { loadPublicReport } from './actions/publicAction';
import { loadVaccinationReport } from './actions/vaccinAction';
import { publicInfoURL, vaccInfoURL } from './util';
import VaccineTrend from './components/VaccineTrend';
import VaccinationStats from './components/VaccinationStats';
import VaccinationCoverage from './components/VaccinationCoverage';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      dispatch(loadPublicReport(publicInfoURL()));
      dispatch(loadVaccinationReport(vaccInfoURL()));
    }

    fetchData();
  }, [])
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* Live charts section to be developed */}
      <Stats />
      <VaccineTrend />
      <VaccinationStats />
      <VaccinationCoverage />
    </div>
  );
}

export default App;
