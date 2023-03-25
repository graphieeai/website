import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, AreaChart } from '../../components';
import './dashboard.styles.css';

const Dashboard = () => {
  const navigate = useNavigate()

  const Back2Home = () => {
    navigate('/')
  }


  return (
    <div className='dashboard-page page'>
      <div className="dash-header"> 
      <button className='nav-home' onClick={() => Back2Home()}>← Home</button>
      </div>
       {/* <BarChart/> */}

      
    </div>
  )
}

export default Dashboard;