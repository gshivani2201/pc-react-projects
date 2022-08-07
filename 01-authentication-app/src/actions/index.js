import store from '../store/index'

export const INCREMENT = store.dispatch({
    type: 'increment'
})

export const DECREMENT = store.dispatch({
    type: 'decrement'
})