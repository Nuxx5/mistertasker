import { connect } from 'react-redux';
import { Component } from 'react'
import { userService } from '../../services/userService'
import './TransferFund.scss'
import { addMove } from '../../store/actions/userActions'

export class _TransferFund extends Component {
    state = {
        user: null,
        amount: ''
    }

    componentDidMount() {
        this.loadUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
    }

    // refreshPage() {
    //     window.location.reload(false);
    //   }

    onTransferCoins = async (ev) => {ev.preventDefault();
        // this.state.user.coins -= this.state.amount
        console.log(this.state.user.coins)
        this.props.addMove(this.props.contact, this.state.amount)
        console.log('before load');
        // this.props.getContactById(this.props.contact._id)
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        console.log('amount', this.state.amount);
        this.setState({ [field]: target.value })

    }
    render() {
        const { contact } = this.props
        const {name, amount} = this.state
        return (
            <form className="transfer-fund" onSubmit={this.onTransferCoins}>
                <p>Transfer coins to {contact.name}</p>
                <label htmlFor="term">Amount</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={this.handleChange} />
                <button>Transfer</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addMove,
}

export const TransferFund = connect(null, mapDispatchToProps)(_TransferFund)
