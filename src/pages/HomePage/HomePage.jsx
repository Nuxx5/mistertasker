
import { connect } from 'react-redux'
import { Component } from 'react';
import { userService } from '../../services/userService'
// import { bitcoinService } from '../../services/bitcoinService'
import './HomePage.scss'
import coinsLogo from '../../assets/icons/coins.png'
import bitcoinLogo from '../../assets/icons/bitcoin.png'

export class HomePage extends Component {
    state = {
        user: null,
        // BTC: null,
    }

    componentDidMount() {
        this.loadUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        this.setState({ user })
        // const BTC = await bitcoinService.getRate(this.state.user.coins)
        // this.setState({ BTC })
    }

    render() {
        const { user} = this.state
        if (!user) return <div>Loading........</div>
        console.log(this.props)
        return (
            <section>
            <div className="home-page">
                <h2>Hello {user.name}!</h2>
                {/* <p><img src={coinsLogo}/> Coins: {user.coins}</p>
                <p><img src={bitcoinLogo}/> BTC: {BTC}</p> */}
                </div>
            </section>
        )
    }
}
