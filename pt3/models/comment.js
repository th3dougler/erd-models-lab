const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        comment: String,
        post: {type: Schema.Types.ObjectId, ref: "Post"},
        user: {type: Schema.Types.ObjectId, ref: "User"},
        
    }
)

module.exports = mongoose.model("Comment", commentSchema);