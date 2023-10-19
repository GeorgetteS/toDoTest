import { Task } from './models/models.js';

class TaskService {
  async createTask(title) {
    const createdTask = await Task.create({ title });

    return { ...createdTask.dataValues };
  }

  async getTasks() {
    const tasks = await Task.findAll();

    return tasks;
  }

  async getTask(id) {
    const task = await Task.findOne({ where: { id } });

    return task;
  }

  async updateTask(id, title, description, dueDate, completed) {
    if (!id) {
      throw new Error('Id не указан');
    }
    await Task.update(
      { id, title, description, dueDate, completed },
      {
        where: {
          id,
        },
      },
    );

    const updatedTask = await Task.findOne({ where: { id } });

    return updatedTask;
  }

  async deleteTask(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    console.log(id);
    const task = await Task.destroy({ where: { id } });
    return task;
  }
}

export default new TaskService();
