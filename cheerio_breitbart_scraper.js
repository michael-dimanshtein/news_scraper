var cheerio = require("cheerio");
var request = require("request");

console.log("Breitbart, ladies and gents");

request("http://www.breitbart.com", function (error, response, html) {
    var $ = cheerio.load(html); //all html from breitbart

    var results = []; //empty array for ultimate results

    $("h2.title").each(function (i, element) {
        var title = $(element).text();


        var link = $(element).children().attr("href");

        

        results.push({
            title: title,
            link: link
        });
    });

    
    console.log(results);
});
