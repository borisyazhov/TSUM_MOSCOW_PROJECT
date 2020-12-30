import {GET_WORKERS,
        GET_WORK_DAYS,
        GET_WORKERS_RANKS,
        SET_CURRENT_WORKER} from '../constants/workers'


let initialState = {
workers: [],
workDays : [], 
workerRanks: [],
currentWorker: {},
}

const WorkersReducer = (state = initialState, action) => {
switch (action.type){
    case GET_WORKERS:{
        return { ...state, workers: action.value }
    };
    case GET_WORKERS_RANKS:{
        return { ...state, workerRanks: action.value }
    };
    case GET_WORK_DAYS:{
        return { ...state, workDays: action.value }
    };
    case SET_CURRENT_WORKER:{
        return { ...state, currentWorker: state.currentWorker.find(el => el.id === action.value) }
    };
    default: {
        return state;
    }
}
} 

export default WorkersReducer
