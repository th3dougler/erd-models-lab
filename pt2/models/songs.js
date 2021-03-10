const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema(
    {
        title: String,
        artist: String,
        album: {type: Schema.Types.ObjectId, ref: "Album"}
    }
)

module.exports = mongoose.model("Song", songSchema);