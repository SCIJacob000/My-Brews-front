import React, {Component} from 'react'


class Camps extends Component{
	render(){
		
		const campList = this.props.response.map((camp, i)=>{
		return(
			<li key={camp.id}>
				<span>{camp.name}</span><br/>
				<span>{camp.description}</span>
			</li>
			)
		})
		return(
			<ul>
				{campList}
			</ul>
			)
	}
}

export default Camps;