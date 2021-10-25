import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    user: {
        type: { ObjectId , ref: 'user'}
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('task', taskSchema, 'task')