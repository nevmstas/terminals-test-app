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

export const authUser = (userName: string) => async (dispatch : any)=>{
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json();
        if(data.id !== undefined){
            const userData : authorizedUserT = {
                userId: data.id,
                userLogin: data.login,
                avatarUrl: data.avatar_url
            }
            dispatch(setUserData(userData))
        }else{
            dispatch(addError(data.message))  
        }
} 