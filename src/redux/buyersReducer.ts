export const SORT_BY_AVERAGE_CHECK = 'BUYERS/SORT_BY_AVERAGE_CHECK'
export const SORT_BY_PURCHASES = 'BUYERS/SORT_BY_PURCHASES'
export const SORT_BY_TOTAL_REVENUES = 'BUYERS/SORT_BY_TOTAL_REVENUES'

export type Buyer = {
    id: number
    name: string 
    averageCheck: number
    purchases: number
    totalRevenues: number
}
export type initialStateType = {
    buyers: Array<Buyer>
}

const InitialState: initialStateType= {
    buyers: [
        {id: 1, name: 'John', averageCheck: 100, purchases: 3, totalRevenues: 2000},
        {id: 2, name: 'Bob', averageCheck: 200, purchases: 2, totalRevenues: 2000},
        {id: 3, name: 'John', averageCheck: 300, purchases: 3, totalRevenues: 7200},
        {id: 4, name: 'Sandy', averageCheck: 400, purchases: 1, totalRevenues: 2700},
        {id: 5, name: 'Patrik', averageCheck: 500, purchases: 10, totalRevenues: 8800},
        {id: 6, name: 'Fin', averageCheck: 200, purchases: 11, totalRevenues: 6500},
        {id: 7, name: 'Jake', averageCheck: 300, purchases: 12, totalRevenues: 2600},
        {id: 8, name: 'Rick', averageCheck: 660, purchases: 4, totalRevenues: 2300},
        {id: 9, name: 'Morty', averageCheck: 990, purchases: 5, totalRevenues: 2310},
        {id: 10, name: 'Alex', averageCheck: 123, purchases: 9, totalRevenues: 2200},
        {id: 11, name: 'Jack', averageCheck: 1020, purchases: 15, totalRevenues: 9600},
        {id: 12, name: 'John', averageCheck: 80, purchases: 2, totalRevenues: 1010},
        {id: 13, name: 'Luci', averageCheck: 850, purchases: 1, totalRevenues: 2020},
        {id: 14, name: 'Jack', averageCheck: 555, purchases: 8, totalRevenues: 6090},
    ]
}

export const buyersReducer = (state = InitialState, action: any) : initialStateType =>{
    switch (action.type) {
        case SORT_BY_AVERAGE_CHECK:
            return{
                ...state,
                buyers:[...state.buyers.sort((a, b) => a.averageCheck - b.averageCheck)]
            }
        case SORT_BY_PURCHASES:
            return{
                ...state,
                buyers:[...state.buyers.sort((a, b) => a.purchases - b.purchases)]
            }
        case SORT_BY_TOTAL_REVENUES:
            return{
                ...state,
                buyers:[...state.buyers.sort((a, b) => a.totalRevenues - b.totalRevenues)]
            }    
        default:
            return state
    }
}

export const sortByAverageCheck = () =>{
    return {
        type: SORT_BY_AVERAGE_CHECK
    }
}

export const sortByPurchases = () =>{
    return {
        type: SORT_BY_PURCHASES
    }
}

export const sortByTotalRevenues = () =>{
    return {
        type: SORT_BY_TOTAL_REVENUES
    }
}

