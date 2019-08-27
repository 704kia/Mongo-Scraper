var scrape = require("../public/scripts/scrape");

var Article = require("../models/Article");


module.exports = {
    fetch: function(callback) {
        scrape(function(data) {
            var articles = data;
            for (var i=0; i < articles.length; i++) {
                articles[i].saved = false;
            }

            Article.collection.insertMany(articles, {ordered:false}, function(err, docs) {
                callback(err,docs)
            });
        });
    },
    delete: function(query, callback) {
        Article.remove(query, callback);
    }, 
    get: function(query, callback) {
        Article.find(query)
        .sort({
            _id: -1
        })
        .exec(function(err, doc) {
            callback(doc);
          });
    },
    update: function(query, callback) {
      Article.update({ _id: query.id }, {
        $set: {saved: query.saved}
      }, {}, callback);
    },
    addNote: function(query, callback) {
      Article.findOneAndUpdate({_id: query.id }, {
        $push: {note: query.note}
      }, {}, callback);
    }
}