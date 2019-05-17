import React, {Component} from 'react'
import Camps from '../Camps'

class parkInfo extends Component{ 
	constructor(){
		super()

		this.state={
			response: []
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
		// console.log(response);
		const parsedResponse = await response.json()
		
		console.log(parsedResponse);

		this.setState({
			response: parsedResponse.data
		})
	}
	render(){
	const parkList = this.props.response.map((park, i)=>{
	return(
		<li key={park.id}>
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
			<form id={i} >
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
				<Camps response={this.state.response}/>
		</div>
		)
	}
}

export default parkInfo;