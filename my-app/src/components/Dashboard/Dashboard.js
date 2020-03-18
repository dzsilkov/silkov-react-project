import React from 'react';
import './Dashboard.css';
import DashboardBackgroundParts from '../DashboardBackgroundParts/DashboardBackgroundParts';
import img from './../../assets/img/parallax-img/strenght.jpg'




class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboardBackground">
        <DashboardBackgroundParts img={img} parts={4}/>
      </div>
    );
  }
}

export default Dashboard;
