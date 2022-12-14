import { createSlice, configureStore } from '@reduxjs/toolkit';

//for counter UI
const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

//for login UI
const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducer: {
        login(state) {
            state.isAuthenticated = true
        },
        logOut(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {counter : counterSlice.reducer, auth : authSlice.reducer}
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store;