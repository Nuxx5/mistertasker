import { Component } from 'react'

import './TaskFilter.scss'

export class TaskFilter extends Component {
    state = {
        name: ''
    }
    handleChange = ({ target }) => {
        const field = target.name
        // const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: target.value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    render() {
        const { name, phone } = this.state
        return (
            <form className="task-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Search</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />

                {/* <label htmlFor="type">Type</label>
                <select id="type" value={type} name="type" onChange={this.handleChange}>
                    <option value="">Pick a type</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Pleasure">Pleasure</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Office">Office</option>
                </select> */}
            </form>
        )
    }
}
