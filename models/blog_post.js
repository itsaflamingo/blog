import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: { type: String },
    body: { required: true },
    date: { type: Date, default: Date.now(), required: true },
    publish: { type: Boolean, required: true }
})

export default mongoose.model('BlogPost', blogPostSchema);
