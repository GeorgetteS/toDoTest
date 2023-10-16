import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_URL + '/todos?_limit=10');

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.tasks = action.payload;
    },
    [fetchTasks.rejected]: setError,
  },
});

export default taskSlice.reducer;
