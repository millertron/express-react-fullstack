import * as mutations from './mutations'
import { put, take } from "redux-saga/effects"
import { SagaIterator } from 'redux-saga'
import uuid from 'uuid'

export function* taskCreateSaga(): SagaIterator {
    while(true) {
        const {groupId} = yield take(mutations.REQUEST_TASK_CREATION)
        const ownerId = `U1`
        const taskId = uuid()
        yield put(mutations.createTask(taskId, groupId, ownerId))
    }
}
