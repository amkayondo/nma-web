import { Subject } from 'rxjs'

const subject = new Subject<userState>();

interface User {
    token: string | null,
    isLoggedIn: boolean,
    isSubmitting: boolean
}

interface userState {
    user: User
}

const initialState: userState = {
    user: {
        token: null,
        isLoggedIn: false,
        isSubmitting: false
    }
}

let state = initialState;

export const userState = {
    initialState,
    subscribe: (setUserState: any) => {
        subject.subscribe((state) => setUserState(state))
    },
    loginUserAction: (data: User) => {
        state = {
            ...state,
            user: {
                ...state.user,
                token: data.token,
                isLoggedIn: data.isLoggedIn,
                isSubmitting: data.isSubmitting
            }
        },
            subject.next(state)
    }
}