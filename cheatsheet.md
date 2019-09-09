---
layout: default
---

image link

<div class="containerx"><a href="makingmetamaterials"><img src="assets/labyrthumb.jpg" class="imagex"><div class="overlayx">Making metamaterials</div></a></div>


# <center>Cheat sheet for coding</center>

## Html / css


### another popup

https://codepen.io/peiche/pen/vhqym

change the button for an inline block image

#wrapper {
	width: 100px;
	margin: 0 auto;
	background: #fff;
	padding: 20px;
	border-radius: 0px;
	background-clip: padding-box;
	text-align: center;
}

.button {
	font-family: Helvetica, Arial, sans-serif;
	font-size: 13px;
	padding: 5px 10px;
	background-color: rgba(0,0,0,0.5);
	border-radius: 0px;
	color: white;
	cursor: pointer;
	transition: all 0.2s ease-out;
  &:hover {
   background-color: blue;
  }
  &:active {
    box-shadow: 0 1px 3px rgba(0,0,0,0.25) inset;
  }
}

.overlay {
	position: absolute;
	top: 0;
	bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
	transition: opacity 200ms;
  visibility: hidden;
	opacity: 0;


  .cancel {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: default;
  }

  &:target {
    visibility: visible;
    opacity: 1;
}
}
.popup {
	margin: 30px auto;
	padding: 20px;
	background: #fff;
	border: 1px solid #666;
	width: 65%;
	position: relative;
 }

  h2 {
    margin-top: 0;
    color: #666;
    font-family: "Trebuchet MS", Tahoma, Arial, sans-serif;
  }

  .close {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    opacity: 0.8;
    transition: all 200ms;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #666;
    &:hover {
      opacity: 1;
    }
  }
  .content {
    max-height: 500px;
    overflow: auto;
  }
  p {
    margin: 0 0 1em;
    &:last-child {
      margin: 0;
    }
}



----

<div id="wrapper">
  <p><a class="button" href="#popup1">Click Me</a></p>
</p>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h2>title</h2>

		<a class="close" href="#">&times;</a>
		<div class="content">
			<p>conten.</p>
		</div>
	</div>
</div>





### centred caption on an image


<meta name="viewport" content="width=device-width, initial-scale=1">
<style>


(centring on the page..)
.vcenteredtext {
  position: relative;
  text-align: center;
}

.hcenteredtext {
  position: absolute;
  text-align: center;
  color: white;
  font-size: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
</head>
<body>

<a href="#popup1">
<div class="vcenteredtext"><img src="http://www.howtorecordpodcasts.com/wp-content/uploads/2012/10/YouTube-Background-Pop-2.jpg" style="width:82px; height:86px" title="My project" alt="Flower"><div class="hcenteredtext">words</div></a>


#### image overlay

    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    * {box-sizing: border-box;}

    .container {
      position: relative;
      width: auto;

    }

    .image {
      display: block;
      width: 100%;
      height: auto;
    }

    .overlay {
      position: absolute;
      top: 50%;
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1;
      width: 100%;
      color: white;
      font-size: 2em;
      padding: 20px;
      text-align: center;
    }


    }
    </style>
    </head>
    <body>

    <h2>Image Overlay Title</h2>
    <p>Hover over the image to see the effect.</p>

    <div class="container">
      <img src="img_avatar.png" alt="Avatar" class="image">
      <div class="overlay">making from noise</div>
    </div>
    <div class="container">
      <img src="img_avatar.png" alt="Avatar" class="image">
      <div class="overlay">metamaterials</div>
    </div>
    </body>
    </html>


### Font tags in html

      <style>
      atag {font-size:1.5em;font-family:'Arial';-color:blue;}
      </style>

      <p><atag>bespoke prestyled  tags</atag></p>

Or

    <p><font face="Arial" color="blue" size="7">font tags</font></p>
but hearder to specify the size this way

### Favicons for github

    <link rel="icon" href="file.png" type="image/x-icon">
    <link rel="shortcut icon" type="image/png" href="file.png">
    <link rel="shortcut icon" sizes="256x256" href="file.png">
    <link rel="apple-touch-icon" href="file.png">


### Background gradient
    background: -webkit-linear-gradient(#8affc1, #fde7fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

### Gradient filled text
    h1 {
      font-size: 2.5em;
      -webkit-text-stroke: 1px blue;
      -webkit-text-fill-color: white;
    }


### Popups

--the css--

      .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
      }
      .overlay:target {
        visibility: visible;
        opacity: 1;
      }
      .popup {
        margin: 70px auto;
        padding: 20px;
        background: #fff;
        border-radius: 0px;
        width: 50%;
        position: relative;
        transition: all 2s ease-in-out;
      }
      .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
      }
      .popup .content {
        max-height: 50%;
        overflow: auto;
      }
-----the html---

      <a class="button" href="#popup1">image or link text to click</a>

      <div id="popup1" class="overlay">

      	<div class="popup">
      		<h2>title inside popup</h2>
      		<a class="close" href="#">&times;</a>

      		<div class="content">
      			content formatted as you wish. can include iframes, images etc
          </div>

      	</div>

      </div>

## Kumu

@controls {
  top {
    title {
      value: "A Working Taxonomy of Metamaterials";
      font-family: "montserrat", sans-serif;
      font-weight: bold;
    }
  }
}



@settings {
  font-family: "montserrat", sans-serif;
  font-weight: bold;
  connection-size: 5;
  background-color: white;
}
