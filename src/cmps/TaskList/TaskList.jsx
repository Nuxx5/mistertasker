import { TaskPreview } from '../TaskPreview';
import './TaskList.scss'
export function TaskList({ tasks }) {

  return (
    <div className="task-list">
      <table className="task-table">
        <thead>
            <tr>
                <td className="title" data-trans="book-id">Name</td>
                <td className="sort" data-trans="book-title">Importance</td>
                <td data-trans="book-rating">Completed At</td>
                <td className="sort" data-trans="book-price">Tries Count</td>
                <td data-trans="actions" >Actions</td>
            </tr>
        </thead>
        <tbody>
        {
        tasks && tasks.map(task => <TaskPreview key={task._id} task={task} />)
      }
        </tbody>
    </table>
     
    </div>
  )
}
