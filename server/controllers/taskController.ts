import { Request, Response } from 'express';
import tasks from '../models/tasks';

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const allTasks = await tasks.find();
    res.json(allTasks);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const newTask = new tasks(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
