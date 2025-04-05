import express from "express";
import Todo from "../models/todo.model.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Naan dhaan da leo" });
});

router.post("/add", async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json({ message: "Todo Created: ", newTodo });
  } catch (error) {
    console.error("Error in adding todo: ", error.message);
    res.status(500).json({ message: "Failed to add todo" });
  }
});

router.put("/toggle/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(401).json({ message: "Todo not found" });
    }

    todo.IsDone = !todo.IsDone;
    await todo.save();
    res.status(200).json({ message: "toggled", updatedTodo: todo });
  } catch (error) {
    console.error("Toggle error:", error.message);
    res.status(500).json({ message: "Failed to toggle status" });
  }
});
export default router;
