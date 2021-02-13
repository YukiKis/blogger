// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).on("turbolinks:load", function(){
  //= on top
  var add_counter = 0;
  
  $(".tag-list li").hide();
  $(".sidebar").hide();
  $(".header-list").hide();
  
  $(".top-heading").hide().slideDown(500, function(){
    $(".header-list").show(300);
    $(".tag-list li").filter(function(){
      $(this).show(300, function(){
        $(".sidebar").show(300);
      });
    })
  });
  if(add_counter === 0){
    $(".new-article-btn")
      .css({
        boxShadow: "5px 5px blue"
      })
      .on("click", function(){
        add_counter += 1
        $(this).css({boxShadow: ""})
      })
  }
  
  $(".header-list-item").hover( 
    function(){
      $(this).children("a").stop().animate({fontSize: "1.5em", backgroundColor: "rgba(0, 0, 155, 0.4)"}, 150)
    }, function(){
      $(this).children("a").stop().animate({fontSize: "15px", backgroundColor: ""}, 150)
    }
  )
  
  //= on about
  $(".about-heading").hide().fadeIn(1000, function(){
    var text = "自分の学んだことをここで整理しよう！".split("");
    var textHtml = "";
    $text = $(".about-content").children("p");
    $text.css({fontSize: "15px"})
    for(var i = 0, len = text.length; i < len; i++){
      textHtml += "<span>" + text[i] + "</span>";
      $text.html(textHtml);
      $text.children("span").filter(function(){
        $(this).hide().show(1000);
      });
    }
  });
});