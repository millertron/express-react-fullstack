import React from 'react'
import { DefaultState, Task } from "../../types/types"
import { connect } from "react-redux"

type Props = {
    name: string,
    id: string,
    tasks?: Array<Task>
}

export const TaskList = ({name, tasks}: Props) => {
    const taskList = tasks ? tasks : []
    return (
        <div>
            <h3>
                {name}
            </h3>
            <div>
                {taskList.map(task => (<div>{task.name}</div>))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: DefaultState, ownProps: Props): Props => {
    let groupId: string = ownProps.id
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TaskList)
