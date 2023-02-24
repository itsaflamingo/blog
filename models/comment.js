import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const comment = new Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now(), required: true }
})

export default mongoose.model('Comment', comment);