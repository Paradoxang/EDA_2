
export const TodoReducer = (state, action) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload];
        case '[TODO] remove todo':
            return state.filter(todo => todo.id !== action.payload);
        case '[TODO] toggle todo':
            return state.map(todo =>
                (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
};