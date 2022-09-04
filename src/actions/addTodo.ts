import { createAction } from '@reduxjs/toolkit';

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';

const addTodo = createAction<string>(ADD_TODO_ACTION);
export default addTodo;
