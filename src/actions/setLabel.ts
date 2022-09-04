import { createAction } from '@reduxjs/toolkit';

export const SET_LABEL_ACTION = 'SET_LABEL_ACTION';

const setLabel = createAction<{id: string, label: string}>(SET_LABEL_ACTION);
export default setLabel;
