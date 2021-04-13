import { connect } from 'react-redux';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTaskById, removeTask } from '../../store/actions/taskActions';
import './TaskDetails.scss'

class _TaskDetails extends Component {
    state = {
        
    };
    componentDidMount() {
        // this.loadTask()
        this.props.getTaskById(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getTaskById(this.props.match.params.id)
            // this.loadTask()
        }
    }

    // async loadTask() {
    //     const task = await taskService.getTaskById(this.props.match.params.id)
    //     this.setState({ task })
    // }

    onLoadTask = () => {
        console.log('load task');
        this.props.getTaskById(this.props.match.params.id)
    }

    onRemoveTask = async () => {
        await this.props.removeTask(this.props.task._id)
        this.onBack()
        // await taskService.deleteTask(taskId);
        // this.setState({ selectedTaskId: null });
        // this.loadTasks();
        // this.props.history.push('/task')
    }  

    onBack = () => {
        this.props.history.goBack()
        // this.props.history.push('/')
    }
    // onTryTask = async () => {
    //     if (this.state.task.batteryStatus <= 0) return alert('Task is dead')
    //     await taskService.tryTask(this.state.task._id)
    //     this.loadTask()
    // }
    render() {
        const { task } = this.props
        if (!task) return <div>Loading Task.....</div>
        return (
            <section>
                <p>Title: {task.title}</p>
                <p>Description: {task.description}</p>
                <p>Importance: {task.importance}</p>
                <div className="actions">
                <button onClick={this.onRemoveTask}>Delete</button>
                <Link to={'/task/edit/' + task._id}>Edit</Link>
                <button onClick={this.onBack}>Back</button>
              
                </div>
              
            </section>
        )
    }
}

const mapStateToProps = state => ({
    task: state.taskReducer.currTask,
    user: state.userReducer.user,
})

const mapDispatchToProps = {
    getTaskById,
    removeTask,
}

export const TaskDetails = connect(mapStateToProps, mapDispatchToProps)(_TaskDetails)