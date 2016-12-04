import React from 'react';

export class ToDoForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			reminder: {
				text:'',
				id: 0
			}
		};
		this.onChange = this.onChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	};

	handleSubmit(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.reminder);
		this.setState({reminder:{text:'', id: ++this.state.reminder.id}});
		this.refs.reminder.focus();
		return;
	};

	onChange(e){
		this.setState({
			reminder: {text: e.target.value, id: this.state.reminder.id}
		});
	};

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input placeholder="Type in reminders here" type='text' ref='reminder' onChange={this.onChange} value={this.state.reminder.text}/>
				<input type='submit' value='+'/>
			</form>
		);
	};
}

export default ToDoForm;