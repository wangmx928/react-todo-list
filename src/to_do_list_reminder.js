import React from 'react';

class ToDoListReminder extends React.Component{

	componentDidMount() {
		var remindersObj = document.getElementById("reminders-list");
	    remindersObj.scrollTop = remindersObj.scrollHeight;

	    $( "#reminders-list" ).sortable({
		  placeholder: "ul > div",
		  items: "div",
		});
		$( "#reminders-list" ).disableSelection();
	}

	render(){
		return (<li>{this.props.children}</li>);
	};
}

export default ToDoListReminder;