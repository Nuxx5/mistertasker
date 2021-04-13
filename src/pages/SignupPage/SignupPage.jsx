import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { userService } from '../../services/userService'
import { signup } from '../../store/actions/userActions';

import './SignupPage.scss'

class _SignupPage extends Component {

    // inputRef = React.createRef()

    state = {
        user: null,
        
    }
    async componentDidMount() {
        // const { id } = this.props.match.params
        // try {
        //     const user = id ? await userService.getContactById(id) : userService.getEmptyContact()
        //     this.setState({ user })
        // } catch (err) {
        //     this.setState({ errMsg: 'Contact Not Found' })
        // }
        // console.log(this.inputRef);
        // this.inputRef.current.focus()
        // this.inputRef.current.select()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value })
        // this.props.signup(...this.state.user)
    }
    onAddUser = async (ev) => {
        ev.preventDefault()
        console.log('props',this);
        this.props.signup(this.state.name)
        // await userService.signup({ ...this.state.user })
        this.props.history.push('/')
    }
    render() {
        // if (!this.state.user) return <div>{this.state.errMsg || 'Loading'}</div>
        const {name} = this.state.user || ''
        return (
            <form className='user-edit' onSubmit={this.onAddUser}>
                <label htmlFor="name">Name</label>
                <input required type="text" id="name" defaultValue={name} onChange={this.handleChange} name="name" />
               
                {/* <label htmlFor="type">Type</label>
                <input required type="text" id="type" value={type} onChange={this.handleChange} name="type" />

                <label htmlFor="batteryStatus">Battery Status</label>
                <input required type="number" id="batteryStatus" value={batteryStatus} onChange={this.handleChange} name="batteryStatus" /> */}
                <button>Sign Up</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    signup,
}

export const SignupPage = connect(null, mapDispatchToProps)(_SignupPage)