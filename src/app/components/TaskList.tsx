import React from 'react'
import { DefaultState, Task } from "../../types/types"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import * as mutations from "../store/mutations"

type Props = {
    name: string,
    id: string,
    tasks?: Array<Task>
    createNewTask?: Function
}

export const TaskList = ({name, tasks = [], id, createNewTask}: Props) => {
    const button = createNewTask ? <button onClick={() => createNewTask(id)}>Add New</button> : ""
    return (
        <div>
            <h3>
                {name}
            </h3>
            <div>
                {tasks.map(task => (<div key={task.id}>{task.name}</div>))}
            </div>
            {button}
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

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
    return {
        createNewTask(id: string) {
            dispatch(mutations.requestTaskCreation(id))
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList)
