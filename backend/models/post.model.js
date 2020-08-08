const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String},
    author: { type: String},
    //image: { data: Buffer, contentType: String },
    excerpt: {type: String},
    content: { type: String },
    //date: { type: Date }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;