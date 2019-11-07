import React from 'react'
import { connect } from "react-redux"
import { DefaultState, Group } from "../../types/types"

type Props = {
    groups: Array<Group>
}

export const Dashboard = ( { groups }: Props ) => (
    <div>
        <h2>Le Dashboard!</h2>
        {groups.map(group => (
            <div>{group.name}</div>
        ))}
    </div>
)

function mapStateToProps(state: DefaultState) : Props {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)
