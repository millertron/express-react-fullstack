import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectedDashboard } from "./Dashboard"
import { Route, Router } from "react-router"
import { history} from "../store/history"
import { ConnectedNavigation } from "./Navigation"

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/dashboard" render={()=>(<ConnectedDashboard/>)} />
            </div>
        </Provider>
    </Router>
)
