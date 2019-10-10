$(".imageMap a").on("mouseenter", function() {
  $("#mapimg").attr("src", $(this).data("menu-src"));
}).on("mouseleave", function() {
  $("#mapimg").attr("src", $("#mapimg").data("menu-src"));
});
