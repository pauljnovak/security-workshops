import { v4 as uuidv4 } from 'uuid';
import { createReducer } from '@reduxjs/toolkit';
import {Todo} from "../types";
import deleteTodo from "../actions/deleteTodo";
import addTodo from "../actions/addTodo";
import setDone from "../actions/setDone";
import setLabel from "../actions/setLabel";
import toggleDone from "../actions/toggleDone";

export const newTodo = (label: string) => ({
    done: false,
    id: uuidv4(),
    label: (label || "").trim()
});

const initialState: { todos: Todo[] } = {
    todos: []
}
const todoReducer = createReducer(initialState, (builder) => {
    builder.addCase(deleteTodo, (state, action: ReturnType<typeof deleteTodo>) => {
        state.todos = state.todos.filter(i => i.id !== action.payload)
    });
    builder.addCase(addTodo, (state, action: ReturnType<typeof addTodo>) => {
        state.todos = [newTodo(action.payload), ...state.todos]
    });
    builder.addCase(setDone, (state, action: ReturnType<typeof setDone>) => {
        state.todos = state.todos.map(i =>
            i.id === action.payload.id
                ? {
                    ...i,
                    done: action.payload.done,
                }
                : i
        )
    });
    builder.addCase(setLabel, (state, action: ReturnType<typeof setLabel>) => {
        state.todos = state.todos.map(i =>
            i.id === action.payload.id
                ? {
                    ...i,
                    label: action.payload.label
                }
                : i
        )
    });
    builder.addCase(toggleDone, (state, action: ReturnType<typeof toggleDone>) => {
        state.todos = state.todos.map(i =>
            i.id === action.payload
                ? {
                    ...i,
                    done: !i.done,
                }
                : i
        )
    });
});

export default todoReducer;
