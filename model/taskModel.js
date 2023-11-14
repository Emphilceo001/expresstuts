// Require Mongoose
// From Mongoose, We will use  method called shema, this define the structure of the document of the document dt we would store in d collection. model is used to wrap the schema and then sends it to the DataBase

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//lets create our model (Model is wt surrounds d schema and provides us with an interface by which to communicate with our database)

const Tasks = mongoose.model("task", taskSchema);
module.exports = Tasks;
