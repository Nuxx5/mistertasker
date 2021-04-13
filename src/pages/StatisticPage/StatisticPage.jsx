
import { Component } from 'react';
import { userService } from '../../services/userService'
// import { bitcoinService } from '../../services/bitcoinService'
import { Charts } from "../../cmps/Charts/Charts";
import './StatisticPage.scss'

export class StatisticPage extends Component {
    state = {
        user: null,
        // BTC: null,
        marketPrice: null,
        tradeVolume: null
    }

    componentDidMount() {
        this.loadMarketPriceData()
        this.loadTradeVolumeData()
    }

    // async loadUser() {
    //     const user = await userService.getUserById(this.state.selectedUserId)
    //     this.setState({ user })
    //     const BTC = await bitcoinService.getRate(this.state.user.coins)
    //     this.setState({ BTC })
    // }

    // async loadBTC() {
    //     const BTC = await bitcoinService.getRate(this.state.user.coins)
    //     this.setState({ BTC })
    // }

    // onTryUser = async () => {
    //     if (this.state.user.batteryStatus <= 0) return alert('User is dead')
    //     await userService.tryUser(this.state.user._id)
    //     this.loadUser()
    // }

    // async loadMarketPriceData() {
    //     const marketPriceData = await bitcoinService.getMarketPrice()
    //     const marketPrice = marketPriceData.values.map((price) => price.y)
    //     this.setState({marketPrice})
    //     console.log(marketPrice, 'marketprice');
    // }

    // async loadTradeVolumeData() {
    //     const tradeVolumeData = await bitcoinService.getTradeVolume()
    //     const tradeVolume = tradeVolumeData.values.map((volume) => volume.y)
    //     this.setState({tradeVolume})
    // }

    render() {
        const {marketPrice, tradeVolume } = this.state
        if (!marketPrice || !tradeVolume) return <div>Loading Charts.......</div>
        return (
            <section className="statistic-page">
                <h2>Statistics</h2>
                <div className="charts-view">
                <Charts marketPrice={marketPrice} tradeVolume={tradeVolume}/>
                </div>
            </section>
            
        )
    }
}
