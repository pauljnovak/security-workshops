import { createAction } from '@reduxjs/toolkit';

export const SET_DONE_ACTION = 'SET_DONE_ACTION';

const setDone = createAction<{id: string, done: boolean}>(SET_DONE_ACTION);
export default setDone;
