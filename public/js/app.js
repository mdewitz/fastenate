// $(document).ready(function() {   
// });
//     $("#fb").hover(function(){
//         $("#fb").css("background-image", "url('/assets/facebook_orange.svg')");
//     }, function(){
//         $("#fb").css("background-image", "url('/assets/facebook_grey.svg')");
//     });
// 
$(document).ready(function() {  
  $(".nav_first").click( function() {
    getData("/api/random.json");
    // $.getJSON( "/api/random.json", function(data) {
    //   var article_data = data.data.children;
    //   $.each(article_data, function(index, value){
    //     var new_box = renderBox( article_data );
    //     $(".content").append(new_box);
    //   });
    // });
  });
  $(".nav_board").click( function() {
    getData("/api/my_boards.json");
    // $.getJSON( "/api/my_boards.json", function(data) {
      // var article_data = data.data.children;
      // $.each(article_data, function(index, value){
        // var new_box = renderBox( article_data );
        // console.log(new_box);
        // $(".content").append(new_box);
    //   });
    // });
  });
  $(".nav_get").click( function() {
    getData("/api/get_the_app.json");
    // $.getJSON( "/api/my_boards.json", function(data) {
    //   var article_data = data.data.children;
    //   $.each(article_data, function(index, value){
        // var new/_box = renderBox( article_data );
        // console.log(new_box);
        // $(".content").append(new_box);
    //   });
    // });
  });
});

function getData(url){
  $(".info").empty();
  $.get( url, function(data) {
    var articles = data.data.children;
    $.each(articles, function(index, value){
      var new_box = renderBox( value.data );
      $(".info").append(new_box);
    });
  });
}
function renderBox( article_data ){
  console.log(article_data);
  var content = $("<div>", {
    "class" : "content"
  });
  //creates div container with class="box" that will be returned in the end

  var img1 = $("<div>", {
    "class" : "img1"
  });
  //creates div container with class="image"

  img1.css("background-image", "url('"+article_data.url+"')");
  //creates a css code pertaining to image which sets background image to the article data url

  content.append( img1 );
  //appends image to the box div

  var tagline = $("<h2>",
  {
    "class" : "tagline",
    html : article_data.title
  });

  content.append( tagline ); 

  // var author = $("<p>",
  // {
  //   "class" : "author",
  //   html : article_data.author
  // });

  // var age = $("<p>",
  // {
  //   "class": "time",
  //   html : moment.unix(article_data.created).fromNow()
  // });

  // var views = $("<p>",
  // {
  //   "class" : "views",
  //   html : article_data.views
  // });

  var caption = $("<p>",
  {
    "class" : "caption",
    html : "by " + article_data.author +" &bull; " + moment.unix(article_data.created).fromNow()+ " &bull; " + (article_data.score+"views")
  });

  content.append( caption );
  
  var description = $("<p>",
  {
    "class" : "blurb",
    html : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quibusdam itaque excepturi quam saepe totam modi voluptas delectus, vitae reprehenderit suscipit, distinctio, ut fuga omnis!"
  });

  content.append( description );

  // $(".content").append(content);
  return content;
}


// alert("ready");
      
 //  $(".caption").html("//sdfsdfsd");
 // });

// $(document).ready( function() {
// });

//source: https://www.youtube.com/watch?v=pe6keTE9LbE