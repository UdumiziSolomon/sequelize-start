import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

const router = express.Router();

/**
 * Get all tasks
 * @route GET /tasks
 */
router.get("/tasks", getTasks);

/**
 * Create a new task
 * @route POST /tasks
 */
router.post("/tasks", createTask);

/**
 * Update a task by ID
 * @route PUT /tasks/:id
 */
router.put("/tasks/:id", updateTask);

/**
 * Delete a task by ID
 * @route DELETE /tasks/:id
 */
router.delete("/tasks/:id", deleteTask);


export default router;
