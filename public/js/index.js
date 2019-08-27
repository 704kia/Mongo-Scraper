$(document).ready(function() {

var articleRow = $(".article-container")
$(document).on("click", ".btn.save", handleArticleSave);
$(document).on("click", ".scrape-new", handleArticleScrape);

initPage();

function initPage() {
    articleRow.empty();
    $.get("api/articles?saved=false")
    .then(function(data) {
        if(data && data.length) {
            renderArticles(data);
        }
        else {
            renerEmpty();
        }
    })
}

function renderArticles(articles) {
    var articlePush = [];

    for(var i = 0; i < articles.length; i++) {
        articlePush.push(createTag(articles[i]));
    }
    articleRow.append(articlePush)
}

function createTag(article) {
    var row =
$(["<div class='row'>",
"<div class='col s12 m4 l4'>",
"<h3>",
article.title,
"<a class= 'btn btn-danger save'>",
"Save Article",
"</a>",
"</h3>",
"<p>",
article.summary,
"</p>",
"<p>",
article.link,
"</p>",
"</div",
"</div"
].join(""));

row.data("_id", article._id);
return row;
}


function renerEmpty()




})