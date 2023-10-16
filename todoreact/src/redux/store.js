import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './Task/TaskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
