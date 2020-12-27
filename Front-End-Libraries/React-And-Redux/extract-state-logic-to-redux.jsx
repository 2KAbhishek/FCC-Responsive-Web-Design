// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const messageReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
        return state.concat(action.message)
        default:
        return state
    }
}

const store = Redux.createStore(messageReducer);
