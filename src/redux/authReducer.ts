export const SET_USER_DATA = 'AUTH/SET_USER_DATA'
export const ADD_ERROR = 'AUTH/ADD_ERROR'

export type initialStateType = {
    user: authorizedUserT
    isAuth: boolean
    error: string
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
    error:''
}

export const authReducer = (state = InitialState, action: any) : initialStateType =>{
    switch (action.type) {
        case SET_USER_DATA:     
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case ADD_ERROR:
            return{
                ...state,
                error: action.payload
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

export const addError = (error : string) =>{
    return{
        type: ADD_ERROR,
        payload: error
    }
}