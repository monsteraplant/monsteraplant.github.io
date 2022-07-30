//import csv file into string


//transform string into array with objects




const clothes = [
    {
      path: "images/whitetshirt.jpg",
      type: "tops",
      length: "short"
    },
    {
      path: "images/whiteshirt.jpg",
      type: "tops",
      length: "long"
    },
    {
      path: "images/blackjeans.jpg",
      type: "bottoms",
      length: "long"
    },
    {
      path: "images/bluejeans.jpg",
      type: "bottoms",
      length: "long"
    },
    {
      path: "images/blackjeanjacket.jpg",
      type: "jackets",
      length: "",
    },
    {
      path: "images/leatherblazer.jpg",
      type: "jackets",
      length: "",
    },
    {
      path: "images/loafers.jpg",
      type: "shoes",
      length: "",
    },
    {
      path: "images/converse.jpg",
      type: "shoes",
      length: "",
    },
    {
      path: "images/pinktop.jpg",
      type: "tops",
      length: "no sleeves"
    },
    {
      path: "images/purpletop.png",
      type: "tops",
      length: "no sleeves"
    },
    {
      path: "images/blacktubetop.jpg",
      type: "tops",
      length: "no sleeves"
    },
    {
      path: "images/beigetrousers.jpg",
      type: "bottoms",
      length: "long"
    },
    {
      path: "images/ginghamshorts.jpg",
      type: "bottoms",
      length: "short"
    },
    {
      path: "images/blacktshirt.jpg",
      type: "tops",
      length: "short"
    },
    {
      path: "images/bluejeanjacket.jpg",
      type: "jackets",
      length: ""
    },
    {
      path: "images/sandals.jpg",
      type: "shoes",
      length: ""
    },
]

//filter array depending on type of clothes
var topsall = clothes.filter(clothes => clothes.type === "tops");
var bottomsall = clothes.filter(clothes => clothes.type === "bottoms");
var jackets = clothes.filter(clothes => clothes.type === "jackets");
var shoes = clothes.filter(clothes => clothes.type === "shoes");



//filter array depending on user input
var tops = topsall
var bottoms = bottomsall

//assign images to path
var topsimages = tops.map(a => a.path);
var bottomsimages = bottoms.map(a => a.path);
var jacketsimages = jackets.map(a => a.path);
var shoesimages = shoes.map(a => a.path);

//slideshows for every type of clothes
var index = 0;

var topimage = document.getElementById("slider1");
var jacketimage = document.getElementById("slider2");
var bottomimage = document.getElementById("slider3");
var shoesimage = document.getElementById("slider4");

topimage.src = topsimages[0];
jacketimage.src = jacketsimages[0];
bottomimage.src = bottomsimages[0];
shoesimage.src = shoesimages[0];



function show_image(direction, images, image)
{
  if (direction == "left")
  {
    index--;
  }
  else
  {
    index++;
    index %= images.length;
  }
  
  if (index < 0)
  {
    index = images.length - 1;
  }
  
  image.src = images[index];
}

function show_tops(direction, topsimages, topimage)
{
  const selecttop = document.getElementById("sleevelength");
  if (selecttop.value === "all") {
    var tops = topsall;
  } if (selecttop.value === "long") {
    var tops = topsall.filter(topsall => topsall.length === "long");
  } if (selecttop.value === "short") {
    var tops = topsall.filter(topsall => topsall.length === "short");
  } if (selecttop.value === "no sleeves") {
    var tops = topsall.filter(topsall => topsall.length === "no sleeves");
  };
  var topsimages = tops.map(a => a.path);
  var topimage = document.getElementById("slider1");
  topimage.src = topsimages[0];

  show_image(direction, topsimages, topimage);
}

function show_bottoms(direction, bottomsimages, bottomimage)
{
  const selectbottom = document.getElementById("length");
  if (selectbottom.value === "all"){
    var bottoms = bottomsall;
  } if (selectbottom.value === "long") {
    var bottoms = bottomsall.filter(bottomsall => bottomsall.length === "long");
  } if (selectbottom.value === "short") {
    var bottoms = bottomsall.filter(bottomsall => bottomsall.length === "short");
  } if (selectbottom.value === "skirt") {
    var bottoms = bottomsall.filter(bottomsall => bottomsall.length === "skirt");
  };

  var bottomsimages = bottoms.map(a => a.path);
  var bottomimage = document.getElementById("slider3");
  bottomimage.src = bottomsimages[0];

  show_image(direction, bottomsimages, bottomimage);
}

function reruntops()
{
  const selecttop = document.getElementById("sleevelength");
  if (selecttop.value === "all") {
    var tops = topsall;
  } if (selecttop.value === "long") {
    var tops = topsall.filter(topsall => topsall.length === "long");
  } if (selecttop.value === "short") {
    var tops = topsall.filter(topsall => topsall.length === "short");
  } if (selecttop.value === "no sleeves") {
    var tops = topsall.filter(topsall => topsall.length === "no sleeves");
  };
  var topsimages = tops.map(a => a.path);
  var topimage = document.getElementById("slider1");
  topimage.src = topsimages[0];

  show_image(direction, topsimages, topimage)

}


function rerunbottoms()
{
  const selectbottom = document.getElementById("length");
  if (selectbottom.value === "all"){
    var bottoms = bottomsall;
  } if (selectbottom.value === "long") {
    var bottoms = bottomsall.filter(bottomsall => bottomsall.length === "long");
  } if (selectbottom.value === "short") {
    var bottoms = bottomsall.filter(bottomsall => bottomsall.length === "short");
  } if (selectbottom.value === "skirt") {
    var bottoms = bottomsall.filter(bottomsall => bottomsall.length === "skirt");
  };

  var bottomsimages = bottoms.map(a => a.path);
  var bottomimage = document.getElementById("slider3");
  bottomimage.src = bottomsimages[0];

  show_image(direction, bottomsimages, bottomimage);
}



/* website to do list
-transfer excel to json/ or to string then into array of objects -> use in website
-filter images based on sleevelength, type of bottoms, type of shoes

*/


