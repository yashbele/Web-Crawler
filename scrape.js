var request = require('request');
var cheerio = require('cheerio');

/////////// First Block
request('https://questale.com/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);

    $('.cat-v2-hom-list').find('a').each(function() {
      var mainurl=$(this).attr('href');
      console.log("main url is: "+mainurl);

/////////////////////////Second block

request(mainurl, function (error, response, html) {
  var count=0;
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.page-blog').each(function(i, element){
    //  var a = $(this).prev();
      //console.log(a.text());
      var data = $(this);
      var url=data.children().first().children().first().attr('href');
      title = data.children().first().text().trim();
      console.log(title);
      console.log(count+++"secondary link is: "+url);
      //console.log(url);

//////////////////////////
request(url, function(error, response, html){
  if(!error){
    var $ = cheerio.load(html);

    var title, release, rating;
  //  var json = { title : "", release : "", rating : ""};

    $('.reportoverview').filter(function(){
      var data = $(this);
      title = data.children().first().next().text().trim();
    //  release = data.children().first().next().next().text().trim();//data.children().last().children().last().text().trim();
   console.log("blog is: "+title)
    })
  }
})
//////////////////////////
    });
  }
});




/////////////////////////end second block

});

  }
});


//////////end first block
