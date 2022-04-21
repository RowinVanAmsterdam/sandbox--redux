import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const getTodosFromApi = createAsyncThunk(
  'todos/getTodosFromApi',
	async () => {
		const resp = await fetch('https://b9dd3337-a0c6-489f-a37f-a7258bee942b.mock.pstmn.io/todo');
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'task1', completed: false },
		{ id: 2, title: 'task2', completed: false },
		{ id: 3, title: 'task3', completed: true },
		{ id: 4, title: 'task4', completed: false },
		{ id: 5, title: 'task5', completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const getAllIds = state.map((item) => item.id);
      const getLatestId = Math.max.apply(Math, getAllIds);
      const todo = {
        id: getLatestId + 1, 
        title: action.payload.title,
        completed: false,
      };
      state.push(todo); 
    },
    removeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1)

    },
    toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
  },
  extraReducers: {
    [getTodosFromApi.fulfilled.toString()]: (state, action) => {
			return action.payload.todos;
		}
  }
})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;