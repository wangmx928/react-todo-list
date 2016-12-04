import React from 'react';
import ToDoListReminder from './to_do_list_reminder';

const LIST = $( "#reminders-list" );

class ToDoList extends React.Component{
	constructor(){
		super();
		this.createReminder = this.createReminder.bind(this);
	}

	componentDidUpdate(){
		console.log(this.props.reminders)
	}

    createReminder(reminderText, index){
		return (
			<div key={index} data-id={index}>
				<ToDoListReminder>{reminderText}</ToDoListReminder>
				<button onClick={this.props.deleteReminder} value={index}> X </button>
			</div>
		);
	}

	render(){
		return(<ul id="reminders-list">{this.props.reminders.map(this.createReminder, this)}</ul>);
	}
}

export default ToDoList;