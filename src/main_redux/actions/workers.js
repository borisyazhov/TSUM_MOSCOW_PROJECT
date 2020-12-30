import {GET_WORKERS,
        GET_WORK_DAYS,
        GET_WORKERS_RANKS,
        ADD_WORKERS,
        ADD_WORK_DAY,
        DROP_WORKERS,
        DROP_WORK_DAY} from '../constants/workers'

export const getWorkers = (workers) => ({
    type: GET_WORKERS,
    value: workers,
})

export const getWorkDays = (workDays) => ({
    type: GET_WORK_DAYS,
    value: workDays,
})

export const getWorkersRanks = (workersRanks) => ({
    type: GET_WORKERS_RANKS,
    value: workersRanks,
})

export const setCurrentWorker = (currentWorker) =>({
    type: SET_CURRENT_WORKER,
    value: currentWorker,
})