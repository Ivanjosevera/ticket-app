import mongoose, { Schema } from "mongoose";

process.on("uncaughtException", function (err) {
  console.log(err);
});

mongoose.connect("https://www.mongodb.com/");
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
