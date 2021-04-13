import { Link } from 'react-router-dom'
import { eventBusService } from '../../services/eventBusService'
import './TaskPreview.scss'

export function TaskPreview({ task }) {
  function onStart(){
    eventBusService.emit('Start Action', task)
    console.log('onStart');
  }
  function onRestart(){
    eventBusService.emit('Start Action', task)
    console.log('onRestart');
  }
  return (
    <tr>
    
      <td><Link to={'/task/' + task._id}>
        {task.title}
        </Link>
        </td>
      <td>{task.importance}</td>
      <td>{task.doneAt || 'ongoing'}</td>
      <td>{task.triesCount}</td>
      <td>
        {!task.doneAt && <button className="button" onClick={onStart} >Start</button>}
        {task.doneAt && <button className="button" onClick={onRestart} >Restart</button>}
      </td>
      {/* <div className="task-preview">
        {/* <small>{task.phone}</small> */}
      {/* </div> */} 
    </tr>
    // <div className="task-preview" onClick={() => onSelectTask(task._id)}>
    //   <img src={`https://robohash.org/${task._id}`} alt="" /><span>{task.name}</span>
    //   {/* <p>{task.model}</p> */}
    //   {/* <small>{task.type}</small> */}
    // </div>
  )
}
