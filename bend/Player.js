import mongoose from 'mongoose'
import { ObjectID } from "mongodb";


const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PlayerSchema = new Schema({
  id: {
    type: String,
    required: false
  },
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    unique: true,
    required: true
  },
  Hole: {
    type: Number,
    required: true
  },
  HoleLocation: {
      type: String,
      required: false
  }
});

export default mongoose.model("Player", PlayerSchema);