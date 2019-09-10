---
layout: default
---

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<style>

img {
  float: left;
  margin:15px;
}

.masonry-wrapper {
  padding: 1.5em;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
}
.masonry {
  display: grid;
  grid-template-columns: repeat(1, minmax(100px,1fr));
  grid-gap: 20px;
  grid-auto-rows: 0;
}
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    grid-template-columns: repeat(2, minmax(100px,1fr));
  }
}
@media only screen and (min-width: 1024px) {
  .masonry {
    grid-template-columns: repeat(3, minmax(100px,1fr));
  }
}

</style>
</head>

<body>

<h1><center>Materials</center></h1>


  <!-- Made possible by the great work of David DeSandro @ https://masonry.desandro.com -->

  <!-- Part 1: Add the scripts -->

  <!-- Step 1: Let's start by loading jQuery. jQuery is not required for masonary to function but makes things easier  -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  <!-- Step 2: Then load imagesloaded. imagesloaded makes sure the images are not displayed until they are fully loaded -->
  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>

  <!-- Step 3: we load masonry -->
  <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>


  <!-- Part 2: Create the grid -->


  <!-- Step 1: Start with a the main grid wrapper-->
  <div class="grid">

    <!-- Step 2: Add grid items--->

  <div class="grid-item"><div class="containerx"><a href="#popup1">
  <img src="assets/lifecyclethumb.png" class="imagex" /><div class="overlayx">The Lifecycle and applications of diatoms</div></a></div>
  </div>

  <div id="popup1" class="overlay">
  <div class="popup">
  <h3>The Lifecycle and applications of diatoms</h3>
  <a class="close" href="#">&times;</a>
  <div class="content">As part of a module on material driven design on the masters in design for emergent futures course I researched a type of algae called diatoms that have extraordinary intricate glass shells with exceptional properties. When living, their class shells help them to photosynthesise carbon dioxide efficiently and they store energy mostly as oil. This map links these properties and processes throughout the diatom lifecycle to understand how these organisms might be used in material design.
  <iframe
    src="https://embed.kumu.io/e5c6952460b3a3fcef7a08c3d8b11a81"
    width="940" height="600" frameborder="0"></iframe>

    </div>
    </div>
    </div>



  <div class="grid-item"><div class="containerx"><a href="#popup2">
  <img src="assets/dematerialsthumb.png" class="imagex" />
  <div class="overlayx">Making materials from fossilised and living diatoms</div>
  </a></div>
  </div>

  <div id="popup2" class="overlay">
  <div class="popup"><hpopup>Map of materials from fossilised and living diatoms</hpopup><a class="close" href="#">&times;</a>
  <div class="content">

    <iframe
      src="https://embed.kumu.io/c3899a201f8e7b28eb10e7ca825ebe1f"
      width="940" height="600" frameborder="0"></iframe>

  </div>
  </div>
  </div>



    <!-- Step 3: repeat...--->
  <div class="grid-item"><div class="containerx"><a href="#popup3">
  <img src="assets/taxonomythumb.jpg" class="imagex"><div class="overlayx">A Taxonomy of Metamaterials</div></a></div>
  </div>

  <div id="popup3" class="overlay"><div class="popup">
  <h3>A Taxonomy of Metamaterials</h3>
  <a class="close" href="#">&times;</a>
  <div class="content">This is a work in progress to map classifications of metamaterials based on physical effects and geometries.

  <iframe
  src="https://embed.kumu.io/941643c6f84d7e3f388272ddf1b05338"
  width="940" height="600" frameborder="0"></iframe>

    </div>
    </div>
    </div>








  <div class="grid-item"><div class="containerx"><a href="#popup4">
  <img src="assets/labyrthumb.jpg" width="200"><div class="overlayx">Acoustic labyrinthine space-coiling metamaterial</div></a></div>
  </div>

  <div id="popup4" class="overlay"><div class="popup">
  <h3>Acoustic labyrinthine space-coiling metamaterial</h3>
  <a class="close" href="#">&times;</a>
  <div class="content">
  <center><img src="assets/labyrthumb.jpg" width="200"> <img src="assets/acoustic.jpg"  width="200"></center>
  <p>3 meta atoms of an acoustic labyrinthine type space-coiling acoustic metamaterial designed by <a href="https://www.sciencedirect.com/science/article/abs/pii/S1359645419302447">Dong et al (2018)</a> 3D printed using PLA. The original design was 5 meta atoms deep and 20 wide and formed a 'Superlens' which improves resolution by going beyond the diffraction limit we observe in ordinary lenses.</p>
  </div>
  </div>
  </div>








    <div class="grid-item">
    <img src="https://s-media-cache-ak0.pinimg.com/736x/cd/90/d9/cd90d9de63fa2c8e5c5e7117e27b5c18--gritty-portrait-photography-studio-photography.jpg">
      </div>


    <div class="grid-item">
      <img src="https://s-media-cache-ak0.pinimg.com/736x/dd/45/96/dd4596b601062eb491ea9bb8e3a78062--two-faces-baby-faces.jpg" />
    </div>

    <div class="grid-item">
      <img src="http://www.marklobo.com.au/news/wp-content/uploads/2013/03/Melbourne_Portrait_Photographer_Mark_Lobo-Cowboy.jpg" />
    </div>

    <div class="grid-item">
      <img src="https://format-com-cld-res.cloudinary.com/image/private/s--PcYqe7Zw--/c_limit,g_center,h_65535,w_960/a_auto,fl_keep_iptc.progressive,q_95/145054-8576001-Rob-Green-by-Zuzana-Breznanikova_7725_b_w.jpg" />
    </div>

    <div class="grid-item">
      <img src="http://www.iefimerida.gr/sites/default/files/janbanning11.jpg" />
    </div>

    <div class="grid-item">
      <img src="https://s-media-cache-ak0.pinimg.com/736x/66/bb/e7/66bbe7acc0d64da627afef440a29714b--portrait-photos-female-portrait.jpg" />
    </div>

    <div class="grid-item">
      <img src="https://s-media-cache-ak0.pinimg.com/736x/25/34/b6/2534b6c18c659546463f13b2dc62d4ce--natural-portraits-female-portraits.jpg" />
    </div>

    <div class="grid-item">
      <img src="https://s-media-cache-ak0.pinimg.com/originals/8d/67/12/8d671230ced871df8428b571ed6ec192.jpg" />
    </div>

  </div>








<!-- Part 3: the script call -->

<!-- Now that everything is loaded we create a script to trigger masonary on $grid. Note that this simply says: "if the images are fully loaded, trigger masnory on $grid. -->


<script>
$(".grid").imagesLoaded(function() {
    $(".grid").masonry({
      itemSelector: ".grid-item"
    });
  });
</script>

</body>


</html>
