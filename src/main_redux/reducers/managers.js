import { SET_CURRENT_MANAGER } from '../constants/managers';

let initialState = {
managers: [],
currentManager: {},
}

const ManagerReducer = (state = initialState, action) => {
switch (action.type){
    case SET_CURRENT_MANAGER:{
        return { ...state, currentWorker: state.workers.find(el => el.id === action.value) }
    };
    case GET_MANAGERS:{
        return { ...state, managers: action.value }
    };
    default: {
        return state;
    }
}
} 

export default ManagerReducer
