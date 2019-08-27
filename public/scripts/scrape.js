var request = require("request");
var cheerio = require("cheerio");

var scrape = function(callback){


    // Make a request via axios to grab the HTML body from the site of your choice
request("https://www.nytimes.com/topic/organization/pittsburgh-steelers", function(error, response, body) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(body);
  
    // An empty array to save the data that we'll scrape
    var articles = [];
  
    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $(".story-body").each(function(i, element) {
  
      var title = $(element).children(".story-link").children(".story-meta").children(".headline").text().trim();
      var summary = $(element).children(".story-link").children(".story-meta").children(".summary").text().trim()
      var link = $(element).children(".story-link").attr("href");
  
  
      // Save these results in an object that we'll push into the results array we defined earlier
      articles.push({
        title: title,
        summary: summary,
        link: link
      });
    });
  callback(articles)
  });
}


module.exports = scrape;