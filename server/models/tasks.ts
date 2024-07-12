import mongoose, { Schema } from 'mongoose';

const tasksSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  assingedTo: {
    memberId: String,
    memberName:String,
    required:true,
  },
});

export default mongoose.model('tasks', tasksSchema);
