---
layout: default
---
<head>

<style>
body {
  box-sizing: border-box;
  min-height: 100%;
}

.mouseOver_text {
  position: absolute;
  margin-left: 270;
  margin-right: auto;
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
  h2 {

    transition: all 300ms ease-out;
    a {
      text-decoration: none;
      color: currentColor;
      display: block;
    }
    &:hover {
      letter-spacing: 2px;
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


</head>




<div class="mouseOver_text">
  <h2><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img1.jpg">Reddish</a></h2>
  <h2><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img2.jpg">Revive</a></h2>
  <h2><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img3.jpg">True Colors</a></h2>
  <h2><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img4.jpg"><img src="assets/tunnelinside.jpg" width="250"> some text </a></h2>
  <h2><a class="screenshot" href="#" rel="https://sairaraza.github.io/assets/1.png">url</a></h2>
  <h2><a class="screenshot" href="#" rel="assets/1.png">filepath</a></h2>
</div>






<body>







<!-- this works dont delete-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="assets/js/previewImages.js"></script>



</body>
