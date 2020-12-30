import {GET_BRANDS, 
        GET_TRADE_PAVILIONS,
        GET_ITEMS,
       SET_CURRENT_TRADE_PAVILIONS} from '../constants/brands'


let initialState = {
    brands: [], 
    tardePavilions: [],
    currentTradePavilion: {},
    items: [],
}

const BrandReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_BRANDS:{
            return { ...state, brands: action.value }
        };
        case GET_TRADE_PAVILIONS:{
            return { ...state, tardePavilions: action.value }
        };
        case GET_ITEMS:{
            return { ...state, items: action.value }
        };
        case SET_CURRENT_TRADE_PAVILIONS:{
            return { ...state, currentTradePavilion: state.tardePavilions.find(el => el.id === action.value) }
        };
        default: {
            return state;
        }
    }
} 

export default BrandReducer
