
$("#fb").hover(function(){
    $("#fb").css("background-image", "url('assets/facebook_orange.svg')");
}, function(){
    $("#fb").css("background-image", "url('/assets/facebook_grey.svg')");
});

$("#instagram").hover(function(){
    $("#instagram").css("background-image", "url('assets/instagram_orange.svg')");
}, function(){
    $("#instagram").css("background-image", "url('/assets/instagram_grey.svg')");
});

$(".content").hover(function(){
    $(this).css("outline", "6px solid orange");
    $("this>h2").css("color", "rgb(178, 71, 31)");
}, function(){
    $(this).css("outline", "none");
    $("h2").css("color", "black");
});
// 
$(document).ready(function() {  
  $(".nav_first").click( function() {
    getData("/api/random.json");
  });
  $(".nav_board").click( function() {
    getData("/api/my_boards.json");
  });
  $(".nav_get").click( function() {
    getData("/api/get_the_app.json");
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

  return content;
}
