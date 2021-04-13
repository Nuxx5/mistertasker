import { Component } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TaskFilter } from "../../cmps/TaskFilter/TaskFilter";
import { TaskList } from "../../cmps/TaskList";
import { taskService } from "../../services/taskService";
import { loadTasks, removeTask, performTask } from '../../store/actions/taskActions'
import { eventBusService } from '../../services/eventBusService'
import plusLogo from "../../assets/icons/plus.png"
import "./TaskApp.scss"

class _TaskApp extends Component {
  state = {
    tasks: null,
    filterBy: null,
    // selectedTaskId: null,
  };

  componentDidMount() {
    this.props.loadTasks(this.state.filterBy)
    eventBusService.on('Start Action', (data) => {
      this.props.performTask(data);
      this.props.loadTasks(this.state.filterBy)
    })
    // this.loadTasks();
  }

  // async onPerformTask(data) {
  //   await taskService.performTask(data)
  //   this.props.loadTasks(this.state.filterBy)
  // }

  onChangeFilter = (filterBy) => {
    console.log('filterBy',filterBy);
    this.setState({ filterBy }, this.props.loadTasks);
  };

  render() {
    const {tasks} = this.props;
    
      return (
        <div className="task-app">
          <h1>Task List</h1>
          <TaskFilter match={this.props.match} onChangeFilter={this.onChangeFilter} />

            <TaskList
              // onSelectTask={this.onSelectTask}
              tasks={tasks}
            />
            <Link to="/task/edit"><img className="add-task" src={ plusLogo }/></Link>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}

const mapDispatchToProps = {
  loadTasks,
  removeTask,
  performTask
}

export const TaskApp = connect(mapStateToProps, mapDispatchToProps)(_TaskApp)