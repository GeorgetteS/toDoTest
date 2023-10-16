export const taskSelector = () => (state) => state.tasks;
export const taskByIdSelector = (id) => (state) => state.tasks.tasks.find((task) => task.id === id);
