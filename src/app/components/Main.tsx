import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectedDashboard } from "./Dashboard"
import { Route, Router } from "react-router"
import { history} from "../store/history"

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <Route exact path="/dashboard" render={()=>(<ConnectedDashboard/>)} />
        </Provider>
    </Router>
)
