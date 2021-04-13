// import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
// import { eventBusService } from '../../services/eventBusService'
import homeLogo from "../../assets/icons/home.png"
import aboutLogo from "../../assets/icons/about1.png"
import statsLogo from "../../assets/icons/increase.png"
import contactLogo from "../../assets/icons/users.png"
import bitcoinLogo from "../../assets/icons/bitcoin.png"
import './AppHeader.scss'

const _AppHeader = (props) => {
    // eventBusService.emit('navbar-render', 'hi')
    return (
        <section className="header-container">
            <div className="app-header">
            <NavLink exact to="/" activeClassName="active-nav">
            <div className="logo">
            <img src={bitcoinLogo}/>
            <h3 className="logo-txt">MisterTasker</h3>
            </div>
            </NavLink>
            <ul>
                <li><NavLink exact to="/" activeClassName="active-nav"><img src={homeLogo}/></NavLink></li>
                <li><NavLink to="/task" activeClassName="active-nav"><img src={contactLogo}/></NavLink></li>
                <li><NavLink to="/stats" activeClassName="active-nav"><img src={statsLogo}/></NavLink></li>
                <li><NavLink to="/about" activeClassName="active-nav"><img src={aboutLogo}/></NavLink></li>
            </ul>
            </div>
        </section>
    )
}

export const AppHeader = withRouter(_AppHeader)

