//{path: "images/", type: "", length: ""},

const clothes = [
    {path: "images/whitetshirt.jpg", type: "tops", length: "short"},
    {path: "images/whiteshirt.jpg", type: "tops", length: "long"},
    {path: "images/whiteshirt.jpg", type: "layeredtops", length: ""},
    {path: "images/blackjeans.jpg", type: "bottoms", length: "long"},
    {path: "images/bluejeans.jpg", type: "bottoms", length: "long"},
    {path: "images/blackjeanjacket.jpg", type: "jackets", length: ""},
    {path: "images/leatherblazer.jpg", type: "jackets", length: ""},
    {path: "images/loafers.jpg", type: "shoes", length: ""},
    {path: "images/converse.jpg", type: "shoes", length: ""},
    {path: "images/pinktop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/purpletop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/blacktubetop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/beigetrousers.jpg", type: "bottoms", length: "long"},
    {path: "images/ginghamshorts.jpg", type: "bottoms", length: "short"},
    {path: "images/blacktshirt.jpg", type: "tops", length: "short"},
    {path: "images/bluejeanjacket.jpg", type: "jackets", length: ""},
    {path: "images/sandals.jpg", type: "shoes", length: ""},
    {path: "images/bluecroptop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/beigecroptop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/whitelongsleeve.jpg", type: "tops", length: "long"},
    {path: "images/bluecottagetop.jpg", type: "tops", length: "short"},
    {path: "images/blacktrousers.jpg", type: "bottoms", length: "long"},
    {path: "images/whitepullover.jpg", type: "tops", length: "long"},
    {path: "images/blackcrosstietop.jpg", type: "tops", length: "long"},
    {path: "images/beigetop.jpg", type: "tops", length: "long"},
    {path: "images/blacklongsleevetop.jpg", type: "tops", length: "long"},
    {path: "images/blackbasiclongsleeve.jpg", type: "tops", length: "long"},
    {path: "images/blackyogapants.jpg", type: "bottoms", length: "long"},
    {path: "images/redtop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/blackcroptop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/whitewraptop.jpg", type: "tops", length: "short"},
    {path: "images/blackmaxiskirt.jpg", type: "bottoms", length: "skirt"},
    {path: "images/reddress.jpg", type: "onepiece", length: ""},
    {path: "images/blackhoodie.jpg", type: "layeredtops", length: ""},
    {path: "images/shortjeans.jpg", type: "bottoms", length: "short"},
    {path: "images/houndstoothtop.jpg", type: "tops", length: "no sleeves"},
    {path: "images/whitetshirtvneck.jpg", type: "tops", length: "short"},
    {path: "images/brownlongsleeve.jpg", type: "tops", length: "long"},
    {path: "images/rickandmortytshirt.jpg", type: "tops", length: "short"},
    {path: "images/whitejeans.jpg", type: "bottoms", length: "long"},
]

//filter array depending on type of clothes
var topsall = clothes.filter(clothes => clothes.type === "tops");
var bottomsall = clothes.filter(clothes => clothes.type === "bottoms");
var jackets = clothes.filter(clothes => clothes.type === "jackets");
var shoes = clothes.filter(clothes => clothes.type === "shoes");
var layeredtops = clothes.filter(clothes => clothes.type === "layeredtops");
var onepiece = clothes.filter(clothes => clothes.type === "onepiece");


//filter array depending on user input
var tops = topsall
var bottoms = bottomsall

//assign images to path
var topsimages = tops.map(a => a.path);
var bottomsimages = bottoms.map(a => a.path);
var jacketsimages = jackets.map(a => a.path);
var shoesimages = shoes.map(a => a.path);
var layeredtopsimages = layeredtops.map(a => a.path);
var onepieceimages = onepiece.map(a => a.path);


//slideshows for every type of clothes
var index = 0;

var topimage = document.getElementById("slider1");
var jacketimage = document.getElementById("slider2");
var bottomimage = document.getElementById("slider3");
var shoesimage = document.getElementById("slider4");
var layeredtopimage = document.getElementById("slider5");
var onepieceimage = document.getElementById("slider6");

topimage.src = topsimages[0];
jacketimage.src = jacketsimages[0];
bottomimage.src = bottomsimages[0];
shoesimage.src = shoesimages[0];
layeredtopimage.src = layeredtopsimages[0];
onepieceimage.src = onepieceimages[0];


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
  const selecttop = document.getElementById("toplength");
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
  const selectbottom = document.getElementById("bottomlength");
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


function showlayers() {
  var slideshow4 = document.getElementById("slideshow4");
  var slideshow5 = document.getElementById("slideshow5");
  const layers = document.getElementById("layeringoption");
  if (layers.value === "all") {
    slideshow4.style.display = "block";
    slideshow5.style.display = "block";
  } if (layers.value === "layering") {
    slideshow4.style.display = "block";
    slideshow5.style.display = "none";
  } if (layers.value === "jacket") {
    slideshow4.style.display = "none";
    slideshow5.style.display = "block";
  }if (layers.value === "none") {
    slideshow4.style.display = "none";
    slideshow5.style.display = "none";
  };

}

function showpieces(){
  var slideshow6 = document.getElementById("slideshow6");
  var slideshow1 = document.getElementById("slideshow1");
  var slideshow2 = document.getElementById("slideshow2");
  var partone = document.getElementById("partone");
  const layers = document.getElementById("pieceoption");
  if (layers.value === "twopiece") {
    slideshow6.style.display = "none";
    slideshow1.style.display = "block";
    slideshow2.style.display = "block";
    partone.style.display = "block";
  } if (layers.value === "onepiece") {
    slideshow6.style.display = "block";
    slideshow1.style.display = "none";
    slideshow2.style.display = "none";
    partone.style.display = "none";
  };
}



/* website to do list
-transfer excel to json/ or to string then into array of objects -> use in website
-filter images based on sleevelength, type of bottoms, type of shoes

*/


