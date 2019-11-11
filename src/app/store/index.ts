import { applyMiddleware, combineReducers, createStore } from 'redux'
import { defaultState } from "../../server/defaultState"
import { createLogger } from "redux-logger"
import * as mutations from './mutations'
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleware = createSagaMiddleWare();
import * as sagas from './sagas.mock'
import { Task, Comment, Group, User } from "../../types/types"

export const store = createStore(
    combineReducers({
        tasks(tasks:Task[] = defaultState.tasks, action) :Task[]{
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
        comments(comments:Comment[] = defaultState.comments) :Comment[] {
            return comments;
        },
        groups(groups:Group[] = defaultState.groups) :Group[] {
            return groups;
        },
        users(users:User[] = defaultState.users) :User[]{
            return users;
        }
    }),
    applyMiddleware(createLogger({ collapsed: true }), sagaMiddleware)
)

for (let saga in sagas) {
    // @ts-ignore
    sagaMiddleware.run(sagas[saga])
}
