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
    res.status(201).json({ message: "Todo added: ", newTodo });
  } catch (error) {
    console.error("Error adding: ", error.message);
    res.status(500).json({ message: "Failed to add todo" });
  }
});

// async (req, res) => {
//   try {
//     const { text } = req.body;

//     // Create a new Todo instance
//     const newTodo = new Todo({ text });

//     // Save the new todo to the database
//     await newTodo.save();

//     res.status(201).json({ message: "Todo added successfully!", newTodo });
//   } catch (error) {
//     console.error("Error adding todo:", error.message);
//     res.status(500).json({ message: "Failed to add todo" });
//   }
// };
export default router;
