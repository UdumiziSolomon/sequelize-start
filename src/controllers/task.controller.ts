import { Request, Response } from "express";
import { Task } from "../models/Task";

// create new task
export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description });
  res.json(task);
};

// get all task
export const getTasks = async (_: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const task = await Task.findByPk(id); // find by primary key
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  await task.save();
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  // Check if the task exists
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  await task.destroy();
  res.json({ message: "Task deleted successfully" });
};
