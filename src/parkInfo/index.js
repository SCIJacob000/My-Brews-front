import React, {Component} from 'react'
import Camps from '../Camps'

class parkInfo extends Component{ 
	constructor(){
		super()

		this.state={
			response: [],
			name: '',
			trip: ''
		}
	}

	getCampInfo = async (e)=>{

		e.preventDefault()

		const index = e.currentTarget.id;

		const parkCode = this.props.response[index].parkCode;

		const response = await fetch(process.env.REACT_APP_SERVER_URL + '/parks/camps?parkCode=' + parkCode, {
			method: 'GET',
			credentials: 'include'
		})
		const parsedResponse = await response.json()
		
		console.log(parsedResponse);

		this.setState({
			response: parsedResponse.data
		})
	}
	addParkToTrip = async (e)=>{
		e.preventDefault()
		const index = e.currentTarget.id
		const parkCode = this.props.response[index].parkCode
		const body = {}
		body.trip = e.currentTarget.value
		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/trips/parks?parkCode=${parkCode}`,{
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(body)//this should be the name of the park you want to add to the trip
		})
	}
	render(){
	const parkList = this.props.response.map((park, i)=>{
	return(
		<li className="porter" key={park.id}>
			Name:
			<span>{park.fullName}</span>
			<br/>
			Designation:
			<span>{park.designation}</span>
			<br/>
			Description:
			<span>{park.description}</span>
			<br/>
			Weather-Info:
			<span>{park.weatherInfo}</span>
			<br/>

			<form id={i} onSubmit={this.getCampInfo}>
				<button type="submit">See Campground Info</button>
			</form>

			<form id={i} onSubmit={this.addParkToTrip}>
				<input type="text" name="name" placeholder="Trip Name" onChange={this.onChange}></input>
				<button type="submit">Add this park to your Trip</button>
			</form>	
			<br/>
			<br/>
			<br/>
		</li>
		)
	})
	return(
		<div>
				To See a certain park's Campground-Info Click the "See Campground Info" button on the park you want to see then scroll to the bottom of the page!
			<ul>
				{parkList}

			</ul>
				<h3> Campground-Info:</h3><br/>
				<Camps response={this.state.response}/>
		</div>
		)
	}
}

export default parkInfo;