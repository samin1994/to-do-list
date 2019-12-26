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
        
        let result = this.props.tasksList.map((task, id) => {
            if (task.finished === false) {
                return <li className="task" onClick={() => this.doneHandler(task.name)} key={id}>{task.name}</li>
            }
            else if(task.finished === true) {
                return <li className="task" onClick={() => this.doneHandler(task.name)} key={id}><strike>{task.name}</strike></li>
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