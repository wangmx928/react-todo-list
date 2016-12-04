import React from 'react';
import ToDoBanner from './to_do_banner'
import ToDoList from './to_do_list'
import ToDoForm from './to_do_form'

const REMINDER_HEIGHT = 45;

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {reminders: []};
    this.updateReminders = this.updateReminders.bind(this);
    this.deleteReminder = this.deleteReminder.bind(this);
  }

  updateReminders(newReminders){
    var allReminders = this.state.reminders.concat([newReminders]);
    this.setState({reminders: allReminders})
  }


  deleteReminder(e) {
      var taskIndex = parseInt(e.target.value, 10);
      this.state.reminders.splice(taskIndex, 1);
      this.setState({reminders: this.state.reminders})
  }

  render() {
    return (
      <div id="reminders">
        <ToDoBanner/>
        <ToDoList reminders={this.state.reminders} deleteReminder={this.deleteReminder}/>
        <ToDoForm onFormSubmit={this.updateReminders}/>
      </div>
    );
  }
}

export default ToDoApp;