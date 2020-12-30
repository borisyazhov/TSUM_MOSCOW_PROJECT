import {GET_BRANDS, 
        GET_TRADE_PAVILIONS,
        GET_ITEMS,
        SET_CURRENT_TRADE_PAVILIONS
        } from '../constants/brands'


export const getBrands = (brands) => ({
    type: GET_BRANDS,
    value: brands,
})

export const getTradePavilions = (tradePavilions) => ({
    type: GET_TRADE_PAVILIONS,
    value: tradePavilions,
})

export const getItems = (items) => ({
    type: GET_ITEMS,
    value: items,
})

export const setCurrentTradePavilions = (tradePavilions) => ({
    type: SET_CURRENT_TRADE_PAVILIONS,
    value: tradePavilions,
})
