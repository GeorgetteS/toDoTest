import { Router } from 'express';

import TaskController from './controller.js';

export const router = new Router();

router.get('/todos', TaskController.getTasks);
router.get('/todos/:id', TaskController.getTask);

router.post('/todos', TaskController.createTask);
router.patch('/todos', TaskController.updateTask);
router.delete('/todos/:id', TaskController.deleteTask);
