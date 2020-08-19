export const SET_USER_DATA = 'AUTH/SET_USER_DATA'
export const SHOW_NOT_FOUND_ALERT = 'AUTH/SHOW_NOT_FOUND_ALERT'
export const HIDE_NOT_FOUND_ALERT = 'AUTH/HIDE_NOT_FOUND_ALERT'

export type initialStateType = {
    user: authorizedUserT
    isAuth: boolean
    notFound: boolean
}

export type authorizedUserT = {
    userId: number | null,
    userLogin: string | null
    avatarUrl: string | null
}

const InitialState: initialStateType= {
    user: {
        userId: null,
        userLogin: '',
        avatarUrl: ''
    },
    isAuth: false,
    notFound: false
}

export const authReducer = (state = InitialState, action: any) : initialStateType =>{
    switch (action.type) {
        case SET_USER_DATA:     
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case SHOW_NOT_FOUND_ALERT:
            return{
                ...state,
                notFound: true
            }
        case HIDE_NOT_FOUND_ALERT:
            return{
                ...state,
                notFound: false
            }  
        default:
            return state
    }
}

type setUserDataAT ={
    type: typeof SET_USER_DATA
    payload: authorizedUserT
}

export const setUserData = (user : authorizedUserT) : setUserDataAT =>{
    return {
        type: SET_USER_DATA,
        payload: user
    }
}
export const showNotFoundAlert = ()  =>{
    return {
        type: SHOW_NOT_FOUND_ALERT,
    }
}

export const hideNotFoundAlert = ()  =>{
    return {
        type: HIDE_NOT_FOUND_ALERT,
    }
}