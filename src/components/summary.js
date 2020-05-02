import React from 'react'
import '../App.css'
export default function Summary(props) {
	return (
		<div className="row">
			<div className="NewConfirmed">
				<h3>New Confirmed</h3>
				<h1>{props.summary.NewConfirmed}</h1>
				<h4>{new Date(props.currentDate).toDateString()}</h4>
			</div>
			<div className="TotalConfirmed">
				<h3>Total Confirmed</h3>
				<h1> {props.summary.TotalConfirmed}</h1>
				<h4>{new Date(props.currentDate).toDateString()}</h4>
			</div>
			<div className="NewDeaths">
				<h3>New Deaths</h3>
				<h1> {props.summary.NewDeaths}</h1>
				<h4>{new Date(props.currentDate).toDateString()}</h4>
			</div>
			<div className="TotalDeaths">
				<h3>Total Deaths</h3>
				<h1> {props.summary.TotalDeaths}</h1>
				<h4>{new Date(props.currentDate).toDateString()}</h4>
			</div>
			<div className="NewRecovered">
				<h3>New Recovered</h3>
				<h1> {props.summary.NewRecovered}</h1>
				<h4>{new Date(props.currentDate).toDateString()}</h4>
			</div>
			<div className="TotalRecovered">
				<h3>Total Recovered</h3>
				<h1> {props.summary.TotalRecovered}</h1>
				<h4>{new Date(props.currentDate).toDateString()}</h4>
			</div>
		</div>
	)
}
