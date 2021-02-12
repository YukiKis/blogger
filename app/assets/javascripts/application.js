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
  $(".top-heading").hide().slideDown(500, function(){
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
})