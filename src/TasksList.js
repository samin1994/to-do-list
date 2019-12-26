import React from 'react'
import './tasks.css';

class TasksList extends React.Component {

    state = {
        filter: 'all',
        tasksList: []
    }

    constructor(props) {
        super(props);

    }

    doneHandler = (name) => {
        this.props.done(name)
    }

    showItem = () => {
        
        let result = this.props.tasksList.map((task) => {
            if (task.done === false) {
                return <li className="task" onClick={() => this.doneHandler(task.id)} key={task.id}>{task.text}</li>
            }
            else if(task.done === true) {
                return <li className="task" onClick={() => this.doneHandler(task.id)} key={task.id}><strike>{task.text}</strike></li>
            }
        })

        return result;
    }


    render() {
        return (
            <div>
                <ul>
                    {this.showItem()}
                </ul>
            </div>
        )
    }

} export default TasksList