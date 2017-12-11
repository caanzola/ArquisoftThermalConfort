import React, { Component } from 'react';
import { Button, Glyphicon, Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { API_URL } from './../constants';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
 	render() {
		return (
			<div className="container">
			<div className="circular-progress html"></div>
			<div className="circular-progress css"></div>
			<div className="circular-progress javascript"></div>
			 </div>

      );
 	}
}
export default Dashboard;
