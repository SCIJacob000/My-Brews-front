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

	logout= async(e)=>{
		await fetch('http://localhost:9000/users/logout', {
        method: 'GET',
        credentials: 'include',// on every request we have to send the cookie
        headers: {
          'Content-Type': 'application/json'
        }
      })
	}

	handleChange= (e)=>{
		this.setState({
			[e.target.name]: e.target.value,
			//userDbId:     do i need to save this in state for other things to work down the line?
		})
	}
	toggleLoginRegister = () => {
		// if it's login make it register
		if(this.state.whatAmIDoing === "login"){
			this.setState({
				whatAmIDoing: "register"
			})
		}
		else{
			this.setState({
				whatAmIDoing: "login"
			})
		}
	}
	handleSubmit = async (e)=>{
		e.preventDefault()
		try{
			 
			if(this.state.whatAmIDoing === "register"){
				const loginResponse = await fetch('http://localhost:9000/users/register', {
					method: 'POST',
					credentials: 'include',
					body: JSON.stringify(this.state),
					headers:{
						'Content-Type': 'application/json'
					}
				})

				const parsedResponse = await loginResponse.json();
				console.log("here is register Response");
				console.log(parsedResponse);
				if(parsedResponse.data === 'login successful'){
					this.props.history.push('/users/register')
				}
			}
			else{
					const loginResponse = await fetch('http://localhost:9000/users/login', {
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

		}
		catch(error){

		}
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				Username:<input type="text" name="username" onChange={this.handleChange}/><br/>
				Password:<input type="text" name="password" onChange={this.handleChange}/><br/>
				<button type="submit">{this.state.whatAmIDoing === "login" ? "Log-In" : "Register"}</button>
				<button type="submit" onClick={this.logout}>Log-Out</button>
				<p onClick={this.toggleLoginRegister}>Dont have an account? Click Here!</p>
			</form>
		)
	}
}

export default Login