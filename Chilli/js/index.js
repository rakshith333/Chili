$(function() {
  $(".but").on("click",function(e) {
    e.preventDefault();
    $(".content").hide();
    $("#saladdiv1").hide();
    $("#"+this.id+"div").show();
  });
});
