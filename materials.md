---
layout: default
---

<head>


<style>
img {
  float: left;
  margin:15px;
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
  <hpopup>The Lifecycle and applications of diatoms</hpopup>
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
  <hpopup>A Taxonomy of Metamaterials</hpopup>
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
  <hpopup>Acoustic labyrinthine space-coiling metamaterial</hpopup>
  <a class="close" href="#">&times;</a>
  <div class="content">
  <center><img src="assets/labyrthumb.jpg" width="200"> <img src="assets/acoustic.jpg"  width="200"></center>
  <p>3 meta atoms of an acoustic labyrinthine type space-coiling acoustic metamaterial designed by <a href="https://www.sciencedirect.com/science/article/abs/pii/S1359645419302447">Dong et al (2018)</a> 3D printed using PLA. The original design was 5 meta atoms deep and 20 wide and formed a 'Superlens' which improves resolution by going beyond the diffraction limit we observe in ordinary lenses.</p>
  </div>
  </div>
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
