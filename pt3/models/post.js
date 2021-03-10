const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        username: String,
        post: String,
        comments: [ {type: Schema.Types.ObjectId, ref: "Comment"} ],
        
    }
)

module.exports = mongoose.model("Post", postSchema);