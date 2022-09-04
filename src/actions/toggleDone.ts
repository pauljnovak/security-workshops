import { createAction } from '@reduxjs/toolkit';

export const TOGGLE_DONE_ACTION = 'TOGGLE_DONE_ACTION';

const toggleDone = createAction<string>(TOGGLE_DONE_ACTION);
export default toggleDone;
