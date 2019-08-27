var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema ({
    body: {
        type: String,
    },
});

var Note = mongoose.model("Headline", noteSchema)

module.exports = Note;