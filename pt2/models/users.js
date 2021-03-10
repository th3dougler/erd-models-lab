const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        password: String,
        email: String,
        playlists: [ {type: Schema.Types.ObjectId, ref: "Playlist"} ]
    }
)

module.exports = mongoose.model("User", userSchema);