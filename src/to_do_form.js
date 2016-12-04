import React from 'react';
export class ToDoForm extends React.Component{
	constructor(){
		super();
		this.state = {reminder: ''};
		this.onChange = this.onChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	};

	handleSubmit(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.reminder);
		this.setState({reminder:''});
		this.refs.reminder.focus();
		return;
	};

	onChange(e){
		this.setState({
			reminder: e.target.value
		});
	};

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input placeholder="Type in reminders here" type='text' ref='reminder' onChange={this.onChange} value={this.state.reminder}/>
				<input type='submit' value='+'/>
			</form>
		);
	};
}

export default ToDoForm;