import TaskService from './service.js';

class TaskController {
  async createTask(req, res) {
    try {
      const { title } = req.body;

      const task = await TaskService.createTask(title);

      res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getTask(req, res) {
    try {
      const { id } = req.params;
      const task = await TaskService.getTask(id);
      return res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getTasks(req, res) {
    try {
      const tasks = await TaskService.getTasks();
      return res.json(tasks);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async updateTask(req, res) {
    try {
      const { title, description, dueDate, completed } = req.body;
      const { id } = req.params;

      const updatedTask = await TaskService.updateTask(id, title, description, dueDate, completed);
      return res.json(updatedTask);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      console.log(id);

      const task = await TaskService.deleteTask(id);
      return res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new TaskController();
