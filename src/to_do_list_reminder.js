import React from 'react';

class ToDoListReminder extends React.Component{

	componentDidMount() {
		var remindersObj = document.getElementById("reminders-list");
	    remindersObj.scrollTop = remindersObj.scrollHeight;
	}

	render(){
		return (<li>{this.props.children}</li>);
	};
}

export default ToDoListReminder;