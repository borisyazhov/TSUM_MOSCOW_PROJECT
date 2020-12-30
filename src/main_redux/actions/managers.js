import {GET_MANAGERS, SET_CURRENT_WORKER} from '../constants/managers'

export const getManagers = (managers) => ({
    type: GET_MANAGERS,
    value: managers,
})

export const currentWorker = (workers) => ({
    type: SET_CURRENT_WORKER,
    value: workers
})