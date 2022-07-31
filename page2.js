//{path: "images/", type: "", length: ""},

const clothes = [
    {path: "images/whitetshirt.jpg", type: "tops", length: "short"},
    {path: "images/whiteshirt.jpg", type: "tops", length: "long"},
    {path: "images/whiteshirt.jpg", type: "jackets", length: "long"},
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
]

//filter array depending on type of clothes

var jackets = clothes.filter(clothes => clothes.type === "jackets");
var shoes = clothes.filter(clothes => clothes.type === "shoes");
var onepiece = clothes.filter(clothes => clothes.type === "onepiece");



//assign images to path

var jacketsimages = jackets.map(a => a.path);
var shoesimages = shoes.map(a => a.path);
var onepieceimages = onepiece.map(a => a.path);

//slideshows for every type of clothes
var index = 0;

var onepieceimage = document.getElementById("slider1");
var jacketimage = document.getElementById("slider2");
var shoesimage = document.getElementById("slider3");



jacketimage.src = jacketsimages[0];

shoesimage.src = shoesimages[0];
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

