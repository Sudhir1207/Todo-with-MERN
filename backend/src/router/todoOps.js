import express from "express";
import Todo from "../models/todo.model.js";
const router = express.Router();

// get all posts
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//for creating a todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//for updating a todo
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req,
      body,
      { text: req.body.text },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//for deleting a todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json(`item ${req.params.id} deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
