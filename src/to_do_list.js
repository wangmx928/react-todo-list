import React from 'react';
import ToDoListReminder from './to_do_list_reminder';

class ToDoList extends React.Component{
	constructor(props){
		super(props);
		this.createReminder = this.createReminder.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if(this.props.reminders.length != 0 && nextProps.reminders != this.props.reminders){
			var ids = $('#reminders-list').sortable('toArray', {attribute: 'value'});
			ids.map((id, index) => {
				nextProps.reminders[id].id = index;
			});

			nextProps.reminders.sort(function (a, b) {
			  if (a.id > b.id) {
			    return 1;
			  }
			  if (a.id < b.id) {
			    return -1;
			  }
			  return 0;
			});

			$('#reminders-list').sortable('cancel');

			this.setState(nextProps);
		}
	}

	componentDidUpdate(){
		$( "#reminders-list" ).sortable({
		  placeholder: "ul > div",
		  items: "div",
		});
		$( "#reminders-list" ).disableSelection();
	}

    createReminder(reminder, index){
		return (
			<div key={index} value={index}>
				<ToDoListReminder>{reminder.text}</ToDoListReminder>
				<button onClick={this.props.deleteReminder} value={index}> X </button>
			</div>
		);
	}

	render(){
		return(<ul id="reminders-list">{this.props.reminders.map(this.createReminder, this)}</ul>);
	}
}

export default ToDoList;