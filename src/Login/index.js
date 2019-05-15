import React, {Component} from 'react'


class Login extends Component {
	constructor(){
		super()

		this.state={
			username: '',
			password: '',
			userDbId: '',
			whatAmIDoing: 'login'
		}
	}
	handleChange= (e)=>{
		this.setState({[e.target.name]: e.target.value});
	}
	toggleLoginRegister = () => {
			
	}
	handleSubmit = async (e)=>{
		e.preventDefault()
		try{
			let url;
			// if()

			const loginResponse = await fetch('http://localhost:9000/users/register', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers:{
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await loginResponse.json();

			if(parsedResponse.data === 'login successful'){
				this.props.history.push('/users/login')
			}

		}
		catch(error){

		}
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				Username:
				<input type="text" name="username" onChange={this.handleChange}/>
				Password:
				<input type="text" name="password" onChange={this.handleChange}/>
				<button type="submit">"Login"</button>
			</form>
		)
	}
}

export default Login