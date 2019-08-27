var Note = require("../models/Note");

module.exports = {
    get: function(data,callback) {
        Note.find({
            _articleId: data.id
        }, callback);
    },
    save: function(data,callback) {
        var newNote = {
            _articleId: data.id,
            noteText: data.noteText
        };
        Note.create(newNote, function(err,doc) {
            if(err) {
                console.log(err)
            }
            else {
                console.log(doc);
                callback(doc);
            }
        });
    },
    delete: function(data,callback) {
        Note.remove({
            _id: data.id
        }, callback);
    }
}