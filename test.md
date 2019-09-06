---
layout: default
---
<div class="topSection">
     <div class="half-screen left-screen">
       <a href="#photoSection">Photographer</a>
     </div>
     <div class="half-screen right-screen">
       <a href="#devSection">Web Developer</a>
     </div>
   </div>

   <div class="nav">
     <div class="bottomNav">
     </div>
     <a href="#devSection" id="navText">Photographer</a>
   </div>

   <div class="envelopeIcon">
     <a href="#contactSection"><i class="fa fa-envelope"></i></a>
   </div>

   <div class="container main">

     <div class="row intro" id="devSection">
       <div class="col-xs-12 col-md-8 col-md-push-2">
         <h1 class="name">Maria</h1>
         <h2>Web Developer</h2>
         <p>I am Maria M, studying to become a Web Developer. Day and night exploring all possible aspects of Web Development, styding anything I can get my hands on, and simply enjoying it. I hope to write here more about my experience and achievements when I have them.</p>
       </div>
     </div> <!--row intro-->


   <div class="row project">
     <div class="projectImage col-xs-12 col-sm-6">
     <p data-height="300" data-theme-id="0" data-slug-hash="wWmJkK" data-default-tab="result" data-user="Alahab2" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/Alahab2/pen/wWmJkK/">Science icons animated</a> by Alahab (<a href="https://codepen.io/Alahab2">@Alahab2</a>) on <a href="https://codepen.io">CodePen</a>.</p></div>

     <div class="col-xs-12 col-sm-6">
       <h1 class="projectTitle">Animated science icons</h1>
       <p><span class="title">Client:</span> Awesome client</p>
       <p><span class="title">Task:</span> Take JPEG illustrations and replicate them using CSS, add some animation to them.</p>
       <p class="title"><span class="title">Skills used:</span> SCSS, Jade.</p>
     </div>
   </div>

   <div class="row project">
       <div class="col-xs-12 col-sm-6 col-sm-push-6 projectImage">
         <p data-height="300" data-theme-id="0" data-slug-hash="rLeyar" data-default-tab="result" data-user="Alahab2" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/Alahab2/pen/rLeyar/">jQuery UI Datepicker Calendar</a> by Alahab (<a href="https://codepen.io/Alahab2">@Alahab2</a>) on <a href="https://codepen.io">CodePen</a>.</p>
       </div>



   <div class="row project">
       <div class="col-xs-12 col-sm-6 projectImage">
         <p data-height="265" data-theme-id="0" data-slug-hash="dXmAAR" data-default-tab="result" data-user="Alahab2" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/Alahab2/pen/dXmAAR/">Cube css only</a> by Alahab (<a href="https://codepen.io/Alahab2">@Alahab2</a>) on <a href="https://codepen.io">CodePen</a>.</p>
       </div>




     <div class="row intro" id="photoSection">
       <div class="col-xs-12 col-md-8 col-md-push-2">
         <h1 class="name">Maria</h1>
         <h2>Photographer</h2>
         <p>I’ve been a photographer since I was a teenager. From my early snapshots to the photos I make today, my objective was always to create a visual record of the exciting moments of life. I’m fortunate to pursue personal projects around the world, using photography as a method of expression. But above all, I like to photograph people and to tell their inspiring stories through images.</p>
       </div>
     </div>

   <!--filtering-->
   <div class="row gallery col-xs-12">
   <div class="btn-group btn-group-justified filter-button-group hidden-xs" role="group" aria-label="filterImages">
     <div class="btn-group" role="group">
       <button type="button" class="btn btn-default is-checked" data-filter="*">All</button>
     </div>
     <div class="btn-group" role="group">
       <button type="button" class="btn btn-default" data-filter=".people">People</button>
     </div>
     <div class="btn-group" role="group">
       <button type="button" class="btn btn-default" data-filter=".nature">Nature</button>
     </div>
   </div>  
     <div class="grid">
       <div class="grid-sizer col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>

       <div id="testImage" class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Civic_Square_Wellington%2C_New_Zealand.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Civic Square, Wellington, New Zealand.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Civic_Square_Wellington%2C_New_Zealand.jpg" alt="Civic Square, Wellington, New Zealand.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Jervois_Quay_Wellington%2C_New_Zealand.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Man smoking, Jervois Quay, Wellington, New Zealand.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Jervois_Quay_Wellington%2C_New_Zealand.jpg" alt="Man smoking, Jervois Quay, Wellington, New Zealand.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item nature people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Locals_swimming_in_dessert%2C_Southern_Kazakhstan.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Locals swimming in a dessert, Southern Kazakhstan.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Locals_swimming_in_dessert%2C_Southern_Kazakhstan.jpg" alt="Locals swimming in a dessert, Southern Kazakhstan.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item nature">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Mangawhai%2C_New_Zealand.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="People on the beach, Mangawhai, New Zealand.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Mangawhai%2C_New_Zealand.jpg" alt="People on the beach, Mangawhai, New Zealand.">
         </a>
       </div>

        <div class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Monk_in_Kuan_Yin_Thong_Hood_Cho_Temple%2C_Penang%2C_Malaysia.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="A Monk in Kuan Yin Thong Hood Cho Temple, Penang, Malaysia.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Monk_in_Kuan_Yin_Thong_Hood_Cho_Temple%2C_Penang%2C_Malaysia.jpg" alt="A Monk in Kuan Yin Thong Hood Cho Temple, Penang, Malaysia.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Monk_in_temple_Ho_Chi_Mihn(Saigon)%2C_Vietnam.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="A Monk in a temple, Ho Chi Mihn (Saigon), Vietnam.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Monk_in_temple_Ho_Chi_Mihn(Saigon)%2C_Vietnam.jpg" alt="A Monk in a temple, Ho Chi Mihn (Saigon), Vietnam.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Mosque_in_Samarkand%2C_Uzbekistan.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Locals in a mosque in Samarkand, Uzbekistan.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Mosque_in_Samarkand%2C_Uzbekistan.jpg" alt="Locals in a mosque in Samarkand, Uzbekistan.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Polar_night_in_Longyearbyen%2C_Svalbard%2C_Norway.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Polar night in Longyearbyen, Svalbard, Norway.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Polar_night_in_Longyearbyen%2C_Svalbard%2C_Norway.jpg" alt="Polar night in Longyearbyen, Svalbard, Norway.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item nature">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Himalayas%2C_Nepal.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Himalayas, Nepal.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Himalayas%2C_Nepal.jpg" alt="Himalayas, Nepal.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item nature">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Northern_Lights(Aurora)_in_Svalbard%2C_Norway.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Northern Lights (Aurora Borealis) in Svalbard, Norway.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Northern_Lights(Aurora)_in_Svalbard%2C_Norway.jpg" alt="Northern Lights (Aurora Borealis) in Svalbard, Norway.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item nature people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Shelly_Bay_Wellington%2C_New_Zealand.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Jogging, Shelly Bay, Wellington, New Zealand.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Shelly_Bay_Wellington%2C_New_Zealand.jpg" alt="Jogging, Shelly Bay, Wellington, New Zealand.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item nature">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/View_over_Himalayas%2C_Nepal.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="View over Himalayas, Nepal.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/View_over_Himalayas%2C_Nepal.jpg" alt="View over Himalayas, Nepal.">
         </a>
       </div>

       <div class="col-xs-12 col-sm-6 col-md-4 grid-item people">
         <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Wellington_City%2C_New_Zealand.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Wellington City, New Zealand.">
           <img class="thumbnail img-responsive" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/569188/Wellington_City%2C_New_Zealand.jpg" alt="Wellington City, New Zealand.">
         </a>
       </div>

     </div>
   </div>

      <div class="row col-xs-12">



 </div>
</div>
</div>
