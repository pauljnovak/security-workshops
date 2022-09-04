import { createAction } from '@reduxjs/toolkit';

export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

const deleteTodo = createAction<string>(DELETE_TODO_ACTION);
export default deleteTodo;
