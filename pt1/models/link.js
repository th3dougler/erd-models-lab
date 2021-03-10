const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema(
    {
        fileData: {type: Schema.Types.fileData}
    }
)

const linkSchema = new Schema(
    {
        name: String,
        accessURL: String,
        fileSchema: fileSchema,
    }
)

module.exports = mongoose.model("Link", linkSchema);