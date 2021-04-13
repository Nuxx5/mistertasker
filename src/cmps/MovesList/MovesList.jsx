import { connect } from 'react-redux';
import { Component } from 'react'
import { userService } from '../../services/userService'
// import { MovesList } from '../MovesList';
import { addMove } from '../../store/actions/userActions'
import './MovesList.scss'

export class _MovesList extends Component {
  state = {
    user: null,
}

componentDidMount() {
  this.loadUser()
}

// componentDidUpdate(prevProps, prevState) {
// if (prevState.user !== this.state.user) this.props.history.push(`/contact/${this.props.contact._id}`)
// }

async loadUser() {
  const user = await userService.getUser()
  this.setState({ user })
}
render() {
  if (!this.state.user) return <div>Loading...</div>
  if (this.props.contact) {
  const {user} = this.state
  const {contact} = this.props
  console.log(this.props);
  const filteredMoves = user.moves.filter(move => (move.toId = contact._id))
  return (
    <div className="moves-list">
      <h3>Your Moves</h3>
      <ul>{filteredMoves.length > 0 ?
        (filteredMoves && filteredMoves.map(move => (
          <li key={move._id}>
          <p>At: {move.date}</p>
          <p>Amount: {move.amount} coins</p>
          </li>
        ))): <div>No moves yet</div>
      }
      </ul>
    </div>
  )
}
const {user} = this.props
const filteredMoves = user.moves.slice(0,3)
return (
  <div className="moves-list">
    <h3>Your Last 3 Moves</h3>
    <ul>{filteredMoves.length > 0 ?
      (filteredMoves && filteredMoves.map(move => (
        <li key={move._id}>
          <p>To: {move.to}</p>
        <p>At: {move.date}</p>
        <p>Amount: {move.amount} coins</p>
        </li>
      ))): <div>No moves yet</div>
    }
    </ul>
  </div>
)
}
}

const mapDispatchToProps = {
  addMove,
}

export const MovesList = connect(null, mapDispatchToProps)(_MovesList)
