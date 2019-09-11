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
  z-index: 30;
  transform: translateY(-50%);
  top: 50%;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 100%;
    user-select: none;
    margin: 0 auto;
  }
  h3 {

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
  z-index: 30;
  img {
    width: 35vw;
  }
}
</style>


</head>









<body>

<h1>Materials</h1>



<div class="mouseOver_text">
  <h3><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img1.jpg">Reddish</a></h3>
  <h3><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img2.jpg">Revive</a></h3>
  <h3><a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img3.jpg">True Colors</a></h3>


  <h3><a class="screenshot" href="#" rel="https://sairaraza.github.io/assets/1.png">Fade to Stay</a></h3>

  <h3>
  <a class="screenshot" href="#" rel="https://dvdz.design/random/imgs/img5.jpg">
  <div class="containerx"><img src="assets/sodaglass.jpg" class="imagex"><div class="overlayx">Making glass from diatomaceous earth</div></div>
  </a></h3>

  <h3><a class="screenshot" href="#" rel="assets/1.png">Newspaperwood</a></h3>

</div>


<!-- this works dont delete-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="assets/js/previewImages.js"></script>







</body>
