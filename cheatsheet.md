---
layout: default
---

# <center>Cheat sheet for coding</center>

## Html / css

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
