import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_URL + '/todos');

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

export const deletetask = createAsyncThunk(
  'tasks/deletetask',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_URL + `/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Can't delete task. Server error.");
      }

      dispatch(removetask({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async function (
    { id, title, description, dueDate, completed },
    { rejectWithValue, dispatch, getState },
  ) {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_URL + `/todos`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title,
          description,
          dueDate,
          completed,
        }),
      });

      if (!response.ok) {
        throw new Error("Can't toggle status. Server error.");
      }

      const data = await response.json();

      dispatch(changeTask(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addNewtask = createAsyncThunk(
  'tasks/addNewtask',
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const task = {
        title: text,
        userId: 1,
        completed: false,
      };

      const response = await fetch(process.env.REACT_APP_BASE_URL + `/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      dispatch(addtask(data));
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
  reducers: {
    addtask(state, action) {
      state.tasks.push(action.payload);
    },
    changeTask(state, action) {
      const changedTask = state.tasks.find((task) => task.id === action.payload.id);
      changedTask.completed = action.payload.completed;
      changedTask.title = action.payload.title;
      changedTask.description = action.payload.description;
      changedTask.dueDate = action.payload.dueDate;
    },
    removetask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
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

const { addtask, changeTask, removetask } = taskSlice.actions;

export default taskSlice.reducer;
