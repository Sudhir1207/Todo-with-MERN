import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  IsDone: {
    type: Boolean,
    default: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
