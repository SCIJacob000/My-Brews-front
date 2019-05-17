import React, {Component} from 'react'
import ParkInfo from '../parkInfo'



class ParkSearch extends Component {
	constructor(){
		super()
		this.state={
			madeSearch: false,
			stateCode: "",
			response: []
		}
	}

	onChange = (e, data)=>{
		this.setState({
			stateCode: e.target.value
		})
	}

	handleSubmit = async (e)=>{
		e.preventDefault()
		const response = await fetch(process.env.REACT_APP_SERVER_URL + '/parks?stateCode=' + this.state.stateCode, {
			method: 'GET',
			credentials: 'include'
		})
		// console.log(response);

		const parsedResponse = await response.json() 

		const usefulResponse = JSON.parse(parsedResponse.data.text)
		this.setState({
			response: usefulResponse.data
		})
		// console.log(usefulResponse)
		// console.log(usefulResponse.data)
	}

	render(){
		return(
			<div >
				<form onSubmit={this.handleSubmit}> 
					<select onChange={this.onChange}>
						<option value="AL">Alabama</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
						<button>SEARCH</button>
				</form>
				<ParkInfo response={this.state.response}  />
			</div>

			)
	}
}

export default ParkSearch;


