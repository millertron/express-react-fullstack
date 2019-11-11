import { applyMiddleware, combineReducers, createStore } from 'redux'
import { defaultState } from "../../server/defaultState"
import { createLogger } from "redux-logger"
import * as mutations from './mutations'
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleware = createSagaMiddleWare();
import * as sagas from './sagas.mock'

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            if (action.type === mutations.CREATE_TASK) {
                return [...tasks, {
                    id: action.taskId,
                    name:"New Task",
                    group: action.groupId,
                    owner: action.ownerId,
                    isComplete: false
                }]
            }
            return tasks
        },
        comments(comments = defaultState.comments) {
            return comments;
        },
        groups(groups = defaultState.groups) {
            return groups;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    applyMiddleware(createLogger({ collapsed: true }), sagaMiddleware)
)

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
}
