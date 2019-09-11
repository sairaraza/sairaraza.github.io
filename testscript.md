---
layout: default
---
<head>

<style>

.mouseOver_text {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 2;
  transform: translateY(-50%);
  top: 50%;
  text-align: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
    user-select: none;
    margin: 0 auto;
  }
  h1 {

    transition: all 300ms ease-out;
    a {
      text-decoration: none;
      color: currentColor;
      display: block;
    }
    &:hover {
      letter-spacing: 4px;
    }
  }
}

#previewImage {
  position: absolute;
  display: none;
  color: #fff;
  z-index: 2;
  img {
    width: 35vw;
  }
}
</style>

<script>

function previewImages() {

  xOffset = 200;
  yOffset = 80;


  $("a.screenshot").hover(function(e) {

      var $this = $(this); // caching $(this)

      $this.data('initialText', $this.text());
      $this.text("Download").delay(1200); // Set text

      $("body").append("<div id='previewImage'><img src='" + this.rel + "' alt='rens preview image' />" + "</div>");

      $("#previewImage")
        .css("top", (e.pageY - xOffset) + "px")
        .css("left", (e.pageX + yOffset) + "px")
        .fadeIn("fast");
    },
    function() {

      var $this = $(this); // caching $(this)
      $this.text($this.data('initialText'));

      $("#previewImage").remove();
    });

  $("a.screenshot").mousemove(function(e) {

    $("#previewImage")
      .css("top", (e.pageY - xOffset) + "px")
      .css("left", (e.pageX + yOffset) + "px");

  });
};

  previewImages();

</script>

</head>









<body>

<h1>Materials</h1>

<div class="mouseOver_text">
  <h1><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img1.jpg">Reddish</a></h1>
  <h1><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img2.jpg">Revive</a></h1>
  <h1><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img3.jpg">True Colors</a></h1>
  <h1><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img4.jpg">Fade to Stay</a></h1>
  <h1><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img5.jpg">Mirror</a></h1>
  <h1><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img6.jpg">Newspaperwood</a></h1>
</div>










</body>
