import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import AddNewForm from '../components/AddNewForm';
import TaskList from '../components/TaskList';
import * as actions from '../actions';

const RootContainer = ({ actions, tasks, title }) => (
  <div>
    {console.log('tasks:', tasks)}
    <Header title={ title } />
    <AddNewForm handleSubmitAction={ actions.createTask } />
    <TaskList tasks={ tasks } handleUpdateTask={ actions.updateTask } handleDeleteTask={ actions.deleteTask } />
  </div>
)

RootContainer.PropTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
