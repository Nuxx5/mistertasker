import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { saveTask } from "../../store/actions/taskActions";
import { taskService } from "../../services/taskService";

import "./TaskEdit.scss";

class _TaskEdit extends Component {
  // inputRef = React.createRef()

  state = {
    task: null,
    errMsg: "",
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const task = id
        ? await taskService.getTaskById(id)
        : taskService.getEmptyTask();
      this.setState({ task });
    } catch (err) {
      this.setState({ errMsg: "Task Not Found" });
    }
    console.log(this.inputRef);
    // this.inputRef.current.focus()
    // this.inputRef.current.select()
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState((prevState) => ({
      task: { ...prevState.task, [field]: value },
    }));
  };
  onSaveTask = async (ev) => {
    ev.preventDefault();
    console.log(this.state.task);
    await taskService.saveTask({ ...this.state.task });
    this.props.history.push("/task");
  };
  render() {
    if (!this.state.task) return <div>{this.state.errMsg || "Loading"}</div>;
    const { title, description, importance, _id } = this.state.task;
    return (
      <form className="task-edit" onSubmit={this.onSaveTask}>
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          id="title"
          value={title}
          onChange={this.handleChange}
          name="title"
        />
        {/* ref={this.inputRef} */}
        <label htmlFor="description">Description</label>
        <input
          required
          type="text"
          id="description"
          value={description}
          onChange={this.handleChange}
          name="description"
        />

        {/* <label htmlFor="importance">Importance</label>
                <input required type="number" id="importance" value={importance} onChange={this.handleChange} name="importance" /> */}

        <label htmlFor="importance">Importance:</label>
        <select id="importance" name="importance" value={importance} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {/* <label htmlFor="type">Type</label>
                <input required type="text" id="type" value={type} onChange={this.handleChange} name="type" />

                <label htmlFor="batteryStatus">Battery Status</label>
                <input required type="number" id="batteryStatus" value={batteryStatus} onChange={this.handleChange} name="batteryStatus" /> */}

        <p>{this.state.errMsg}</p>
        <button>Save Task</button>
        <Link to={"/task/" + _id}>Back</Link>
      </form>
    );
  }
}

const mapDispatchToProps = {
  saveTask,
};

export const TaskEdit = connect(null, mapDispatchToProps)(_TaskEdit);
