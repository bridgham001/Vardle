function geekAlert() {
    alert("An Online Computer Science"
                + "Portal for Geeks");
}

// Get the modal
var modal1 = document.getElementById("HowToModal");
var modal2 = document.getElementById("SettingsModal");
var modal3 = document.getElementById("ChartModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");

var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");

img1.onclick = function(){
    modal1.style.display = "block";

}

// img1.onclick = function(){
//     modal1.style.display = "block";
//     modalImg1.src = this.src;
//     captionText1.innerHTML = this.alt;
// }

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("modal")[0];
var span2 = document.getElementsByClassName("modal")[1];
var span3 = document.getElementsByClassName("modal")[2];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
    modal1.style.display = "none";
}

span2.onclick = function() { 
    modal2.style.display = "none";
}

span3.onclick = function() { 
    modal3.style.display = "none";
}

var acceptedWords = [{
    "prefix": "a",
    "word": "port",
    "image": "images/Maps/Bind/a port.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "lobby",
    "image": "images/Maps/Ascent/a lobby.png",
    "map": "Ascent",
  },{
    "word": "metal doors",
    "image": "images/Maps/Breeze/metal doors.png",
    "map": "Breeze",
  },{
    "prefix": "a",
    "word": "link",
    "image": "images/Maps/Pearl/a link.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "screen",
    "image": "images/Maps/Pearl/b screen.png",
    "map": "Pearl",
  },{
    "prefix": "a",
    "word": "rope",
    "image": "images/Maps/Fracture/a rope.png",
    "map": "Fracture",
  },{
    "prefix": "b",
    "word": "hall",
    "image": "images/Maps/Bind/b hall.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "port",
    "image": "images/Maps/Bind/b port.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "main",
    "image": "images/Maps/Pearl/a main.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "alley",
    "image": "images/Maps/Split/b alley.png",
    "map": "Split",
  },{
    "prefix": "mid",
    "word": "courtyard",
    "image": "images/Maps/Ascent/mid courtyard.png",
    "map": "Ascent",
  },{
    "prefix": "a",
    "word": "short",
    "image": "images/Maps/Haven/a short.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "main",
    "image": "images/Maps/Split/a main.png",
    "map": "Split",
  },{
    "word": "elbow",
    "image": "images/Maps/Bind/elbow.png",
    "map": "Bind",
  },{
    "word": "heaven",
    "image": "images/Maps/Bind/heaven.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "canteen",
    "image": "images/Maps/Fracture/b canteen.png",
    "map": "Fracture",
  },{
    "prefix": "mid",
    "word": "boiler",
    "image": "images/Maps/Icebox/mid boiler.png",
    "map": "Icebox",
  },{
    "word": "link",
    "image": "images/Maps/Bind/link.png",
    "map": "Bind",
  },{
    "prefix": "mid",
    "word": "mail",
    "image": "images/Maps/Bind/mid mail.png",
    "map": "Bind",
  },{
    "prefix": "mid",
    "word": "wood doors",
    "image": "images/Maps/Breeze/mid wood doors.png",
    "map": "Breeze",
  },{
    "prefix": "a",
    "word": "tunnel",
    "image": "images/Maps/Haven/a tunnel.png",
    "map": "Haven",
  },{
    "prefix": "mid",
    "word": "courtyard",
    "image": "images/Maps/Haven/mid courtyard.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "tower",
    "image": "images/Maps/Pearl.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "door",
    "image": "images/Maps/Haven/b door.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "main",
    "image": "images/Maps/Pearl/b main.png",
    "map": "Pearl",
  },{
    "word": "screens",
    "image": "images/Maps/Split/screens.png",
    "map": "Split",
  },{
    "word": "cubby",
    "image": "images/Maps/Bind/cubby.png",
    "map": "Bind",
  },{
    "prefix": "mid",
    "word": "nest",
    "image": "images/Maps/Breeze/mid nest.png",
    "map": "Breeze",
  },{
    "prefix": "mid",
    "word": "shops",
    "image": "images/Maps/Pearl/mid shops.png",
    "map": "Pearl",
  },{
    "word": "top mid",
    "image": "images/Maps/Split/top mid.png",
    "map": "Split",
  },{
    "prefix": "a",
    "word": "hall",
    "image": "images/Maps/Fracture/a hall.png",
    "map": "Fracture",
  },{
    "prefix": "a",
    "word": "lobby",
    "image": "images/Maps/Split/a lobby.png",
    "map": "Split",
  },{
    "word": "window",
    "image": "images/Maps/Bind/window.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "lobby",
    "image": "images/Maps/Haven/a lobby.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "heaven",
    "image": "images/Maps/Haven/a heaven.png",
    "map": "Haven",
  },{
    "prefix": "c",
    "word": "lobby",
    "image": "images/Maps/Haven/c lobby.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "tunnel",
    "image": "images/Maps/Pearl/b tunnel.png",
    "map": "Pearl",
  },{
    "prefix": "a",
    "word": "dugout",
    "image": "images/Maps/Pearl/a dugout.png",
    "map": "Pearl",
  },{
    "word": "hall",
    "image": "images/Maps/Breeze/hall.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "hall",
    "image": "images/Maps/Icebox/b hall.png",
    "map": "Icebox",
  },{
    "word": "arches",
    "image": "images/Maps/Breeze/arches.png",
    "map": "Breeze",
  },{
    "prefix": "c",
    "word": "long",
    "image": "images/Maps/Haven/c long.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "ramp",
    "image": "images/Maps/Haven/a ramp.png",
    "map": "Haven",
  },{
    "prefix": "mid",
    "word": "stack",
    "image": "images/Maps/Breeze/mid stack.png",
    "map": "Breeze",
  },{
    "prefix": "c",
    "word": "link",
    "image": "images/Maps/Haven/c link.png",
    "map": "Haven",
  },{
    "word": "cave",
    "image": "images/Maps/Breeze/cave.png",
    "map": "Breeze",
  },{
    "word": "pillar",
    "image": "images/Maps/Bind/pillar.png",
    "map": "Bind",
  },{
    "prefix": "mid",
    "word": "pillars",
    "image": "images/Maps/Breeze/mid pillars.png",
    "map": "Breeze",
  },{
    "prefix": "a",
    "word": "window",
    "image": "images/Maps/Ascent/a window.png",
    "map": "Ascent",
  },{
    "prefix": "mid",
    "word": "doors",
    "image": "images/Maps/Pearl/mid doors.png",
    "map": "Pearl",
  },{
    "prefix": "mid",
    "word": "connector",
    "image": "images/Maps/Pearl/mid connector.png",
    "map": "Pearl",
  },{
    "prefix": "mid",
    "word": "pallet",
    "image": "images/Maps/Icebox/mid pallet.png",
    "map": "Icebox",
  },{
    "prefix": "a",
    "word": "art",
    "image": "images/Maps/Pearl/a art.png",
    "map": "Pearl",
  },{
    "word": "switch",
    "image": "images/Maps/Breeze/switch.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "elbow",
    "image": "images/Maps/Breeze/b elbow.png",
    "map": "Breeze",
  },{
    "word": "logs",
    "image": "images/Maps/Haven/logs.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "ramp",
    "image": "images/Maps/Pearl/b ramp.png",
    "map": "Pearl",
  },{
    "prefix": "a",
    "word": "door",
    "image": "images/Maps/Fracture/a door.png",
    "map": "Fracture",
  },{
    "prefix": "a",
    "word": "nest",
    "image": "images/Maps/Icebox/a nest.png",
    "map": "Icebox",
  },{
    "word": "water",
    "image": "images/Maps/Pearl/a nest.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "back",
    "image": "images/Maps/Ascent/b back.png",
    "map": "Ascent",
  },{
    "word": "garden",
    "image": "images/Maps/Haven/garden.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "bench",
    "image": "images/Maps/Fracture/b bench.png",
    "map": "Fracture",
  },{
    "prefix": "b",
    "word": "hall",
    "image": "images/Maps/Pearl/b hall.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "garage",
    "image": "images/Maps/Icebox/b garage.png",
    "map": "Icebox",
  },{
    "prefix": "a",
    "word": "link",
    "image": "images/Maps/Haven/a link.png",
    "map": "Haven",
  },{
    "prefix": "mid",
    "word": "link",
    "image": "images/Maps/Ascent/mid link.png",
    "map": "Ascent",
  },{
    "prefix": "mid",
    "word": "catwalk",
    "image": "images/Maps/Ascent/mid catwalk.png",
    "map": "Ascent",
  },{
    "prefix": "mid",
    "word": "doors",
    "image": "images/Maps/Haven/mid doors.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "rafters",
    "image": "images/Maps/Split/a rafters.png",
    "map": "Split",
  },{
    "word": "towers",
    "image": "images/Maps/Haven/towers.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "lobby",
    "image": "images/Maps/Ascent/b lobby.png",
    "map": "Ascent",
  },{
    "prefix": "b",
    "word": "tube",
    "image": "images/Maps/Icebox/b tube.png",
    "map": "Icebox",
  },{
    "prefix": "mid",
    "word": "blue",
    "image": "images/Maps/Icebox/mid blue.png",
    "map": "Icebox",
  },{
    "prefix": "b",
    "word": "main",
    "image": "images/Maps/Split/b main.png",
    "map": "Split",
  },{
    "prefix": "mid",
    "word": "bottom",
    "image": "images/Maps/Ascent/mid bottom.png",
    "map": "Ascent",
  },{
    "prefix": "a",
    "word": "rafters",
    "image": "images/Maps/Ascent/a rafters.png",
    "map": "Ascent",
  },{
    "prefix": "c",
    "word": "window",
    "image": "images/Maps/Haven/c window.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "tunnel",
    "image": "images/Maps/Breeze/b tunnel.png",
    "map": "Breeze",
  },{
    "word": "bottom mid",
    "image": "images/Maps/Haven/bottom mid.png",
    "map": "Haven",
  },{
    "prefix": "b",
    "word": "hut",
    "image": "images/Maps/Icebox/b hut.png",
    "map": "Icebox",
  },{
    "prefix": "a",
    "word": "rafters",
    "image": "images/Maps/Icebox/a rafters.png",
    "map": "Icebox",
  },{
    "prefix": "a",
    "word": "lobby",
    "image": "images/Maps/Breeze/a lobby.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "yellow",
    "image": "images/Maps/Icebox/b yellow.png",
    "map": "Icebox",
  },{
    "prefix": "mid",
    "word": "bottom",
    "image": "images/Maps/Breeze/mid bottom.png",
    "map": "Breeze",
  },{
    "word": "defender side records",
    "image": "images/Maps/Pearl/defender side records.png",
    "map": "Pearl",
  },{
    "word": "plat",
    "image": "images/Maps/Haven/plat.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "long",
    "image": "images/Maps/Haven/a long.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "heaven",
    "image": "images/Maps/Split/a heaven.png",
    "map": "Split",
  },{
    "prefix": "a",
    "word": "pipes",
    "image": "images/Maps/Icebox/a pipes.png",
    "map": "Icebox",
  },{
    "prefix": "a",
    "word": "sewer",
    "image": "images/Maps/Split/a sewer.png",
    "map": "Split",
  },{
    "prefix": "b",
    "word": "cubby",
    "image": "images/Maps/Bind/b cubby.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "tower",
    "image": "images/Maps/Fracture/b tower.png",
    "map": "Fracture",
  },{
    "word": "garage",
    "image": "images/Maps/Haven/garage.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "belt",
    "image": "images/Maps/Icebox/a belt.png",
    "map": "Icebox",
  },{
    "word": "connector",
    "image": "images/Maps/Haven/connector.png",
    "map": "Haven",
  },{
    "prefix": "mid",
    "word": "chute",
    "image": "images/Maps/Breeze/mid chute.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "short",
    "image": "images/Maps/Bind/b short.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "shop",
    "image": "images/Maps/Breeze/a shop.png",
    "map": "Breeze",
  },{
    "word": "back",
    "image": "images/Maps/Haven/back.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "main",
    "image": "images/Maps/Ascent/a main.png",
    "map": "Ascent",
  },{
    "prefix": "b",
    "word": "snowman",
    "image": "images/Maps/Icebox/b snowman.png",
    "map": "Icebox",
  },{
    "prefix": "b",
    "word": "tree",
    "image": "images/Maps/Fracture/b tree.png",
    "map": "Fracture",
  },{
    "prefix": "a",
    "word": "main",
    "image": "images/Maps/Fracture/a main.png",
    "map": "Fracture",
  },{
    "prefix": "mid",
    "word": "vent",
    "image": "images/Maps/Split/mid vent.png",
    "map": "Split",
  },{
    "prefix": "a",
    "word": "link",
    "image": "images/Maps/Fracture/a link.png",
    "map": "Fracture",
  },{
    "word": "showers",
    "image": "images/Maps/Bind/showers.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "flowers",
    "image": "images/Maps/Pearl/a flowers.png",
    "map": "Pearl",
  },{
    "word": "u hall",
    "image": "images/Maps/Bind/u hall.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "hall",
    "image": "images/Maps/Fracture/b hall.png",
    "map": "Fracture",
  },{
    "prefix": "b",
    "word": "link",
    "image": "images/Maps/Fracture/b link.png",
    "map": "Fracture",
  },{
    "prefix": "b",
    "word": "lobby",
    "image": "images/Maps/Split/b lobby.png",
    "map": "Split",
  },{
    "prefix": "a",
    "word": "wine",
    "image": "images/Maps/Ascent/a wine.png",
    "map": "Ascent",
  },{
    "prefix": "b",
    "word": "green",
    "image": "images/Maps/Icebox/b green.png",
    "map": "Icebox",
  },{
    "prefix": "b",
    "word": "portal exit",
    "image": "images/Maps/Bind/b portal exit.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "bridge",
    "image": "images/Maps/Breeze/a bridge.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "orange",
    "image": "images/Maps/Icebox/b orange.png",
    "map": "Icebox",
  },{
    "word": "rope",
    "image": "images/Maps/Fracture/rope.png",
    "map": "Fracture",
  },{
    "prefix": "b",
    "word": "rafters",
    "image": "images/Maps/Split/b rafters.png",
    "map": "Split",
  },{
    "prefix": "b",
    "word": "back",
    "image": "images/Maps/Icebox/b back.png",
    "map": "Icebox",
  },{
    "word": "cubby",
    "image": "images/Maps/Haven/cubby.png",
    "map": "Haven",
  },{
    "word": "cave",
    "image": "images/Maps/Bind/cave.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "wall",
    "image": "images/Maps/Breeze/b wall.png",
    "map": "Breeze",
  },{
    "word": "pyramids",
    "image": "images/Maps/Breeze/pyramids.png",
    "map": "Breeze",
  },{
    "prefix": "mid",
    "word": "top",
    "image": "images/Maps/Pearl/mid top.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "link",
    "image": "images/Maps/Pearl/b link.png",
    "map": "Pearl",
  },{
    "prefix": "b",
    "word": "window",
    "image": "images/Maps/Breeze/b window.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "main",
    "image": "images/Maps/Ascent/b main.png",
    "map": "Ascent",
  },{
    "prefix": "b",
    "word": "stairs",
    "image": "images/Maps/Split/b stairs.png",
    "map": "Split",
  },{
    "prefix": "b",
    "word": "heaven",
    "image": "images/Maps/Split/b heaven.png",
    "map": "Split",
  },{
    "word": "snake",
    "image": "images/Maps/Breeze/snake.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "main",
    "image": "images/Maps/Breeze/b main.png",
    "map": "Breeze",
  },{
    "prefix": "a",
    "word": "garden",
    "image": "images/Maps/Ascent/a garden.png",
    "map": "Ascent",
  },{
    "prefix": "b",
    "word": "long",
    "image": "images/Maps/Bind/b long.png",
    "map": "Bind",
  },{
    "word": "truck",
    "image": "images/Maps/Bind/truck.png",
    "map": "Bind",
  },{
    "word": "elbow",
    "image": "images/Maps/Split/elbow.png",
    "map": "Split",
  },{
    "prefix": "a",
    "word": "screen",
    "image": "images/Maps/Icebox/a screen.png",
    "map": "Icebox",
  },{
    "prefix": "b",
    "word": "generator",
    "image": "images/Maps/Fracture/b generator.png",
    "map": "Fracture",
  },{
    "word": "hookah",
    "image": "images/Maps/Bind/hookah.png",
    "map": "Bind",
  },{
    "prefix": "mid",
    "word": "top",
    "image": "images/Maps/Ascent/mid top.png",
    "map": "Ascent",
  },{
    "word": "heaven stairs",
    "image": "images/Maps/Haven/mid stairs.png",
    "map": "Haven",
  },{
    "prefix": "mid",
    "word": "pizza",
    "image": "images/Maps/Ascent/mid pizza.png",
    "map": "Ascent",
  },{
    "word": "garden",
    "image": "images/Maps/Bind/garden.png",
    "map": "Bind",
  },{
    "word": "tower",
    "image": "images/Maps/Bind/tower.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "ramp",
    "image": "images/Maps/Split/a ramp.png",
    "map": "Split",
  },{
    "prefix": "a",
    "word": "dish",
    "image": "images/Maps/Fracture/a dish.png",
    "map": "Fracture",
  },{
    "prefix": "b",
    "word": "lobby",
    "image": "images/Maps/Bind/b lobby.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "tunnel",
    "image": "images/Maps/Fracture/b tunnel.png",
    "map": "Fracture",
  },{
    "word": "vent",
    "image": "images/Maps/Bind/vent.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "main",
    "image": "images/Maps/Fracture/b main.png",
    "map": "Fracture",
  },{
    "prefix": "a",
    "word": "drop",
    "image": "images/Maps/Fracture/a drop.png",
    "map": "Fracture",
  },{
    "prefix": "mid",
    "word": "cannon",
    "image": "images/Maps/Breeze/mid cannon.png",
    "map": "Breeze",
  },{
    "prefix": "mid",
    "word": "top",
    "image": "images/Maps/Breeze/mid top.png",
    "map": "Breeze",
  },{
    "prefix": "b",
    "word": "club",
    "image": "images/Maps/Pearl/b club.png",
    "map": "Pearl",
  },{
    "prefix": "a",
    "word": "secret",
    "image": "images/Maps/Pearl/a secret.png",
    "map": "Pearl",
  },{
    "prefix": "a",
    "word": "portal exit",
    "image": "images/Maps/Bind/a portal exit.png",
    "map": "Bind",
  },{
    "prefix": "a",
    "word": "lobby",
    "image": "images/Maps/Bind/a lobby.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "link",
    "image": "images/Maps/Split/b link.png",
    "map": "Split",
  },{
    "prefix": "mid",
    "word": "cubby",
    "image": "images/Maps/Ascent/mid cubby.png",
    "map": "Ascent",
  },{
    "prefix": "mid",
    "word": "window",
    "image": "images/Maps/Haven/mid window.png",
    "map": "Haven",
  },{
    "prefix": "mid",
    "word": "place",
    "image": "images/Maps/Pearl/mid place.png",
    "map": "Pearl",
  },{
    "prefix": "mid",
    "word": "market",
    "image": "images/Maps/Ascent/mid market.png",
    "map": "Ascent",
  },{
    "word": "back b",
    "image": "images/Maps/Haven/back b.png",
    "map": "Haven",
  },{
    "prefix": "a",
    "word": "restraunt",
    "image": "images/Maps/Pearl/a restraunt.png",
    "map": "Pearl",
  },{
    "prefix": "a",
    "word": "short",
    "image": "images/Maps/Bind/a short.png",
    "map": "Bind",
  },{
    "prefix": "b",
    "word": "kitchen",
    "image": "images/Maps/Icebox/b kitched.png",
    "map": "Icebox",
  },{
    "prefix": "b",
    "word": "arcade",
    "image": "images/Maps/Fracture/b arcade.png",
    "map": "Fractire",
  },{
    "prefix": "a",
    "word": "link",
    "image": "images/Maps/Ascent/a link.png",
    "map": "Ascent",
  },{
    "word": "bottom mid",
    "image": "images/Maps/Split/bottom mid.png",
    "map": "Split",
  },{
    "prefix": "b",
    "word": "back",
    "image": "images/Maps/Breeze/b back.png",
    "map": "Breeze",
  }]

//alert(acceptedWords[0].image)




////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    
  // var map = document.getElementById("map");

  // elem.src = 'images/Maps/Ascent/a garden.png';
  // map.appendChild(elem);  


    let word;
    let prefix;
    let rootWord;
    let niceWord;
    let wordlength;
    let answerID;

    getNewWord();
    createSquares();

    let guessedWords = [[]];
    let availableSpace = 1;
    
    let variableSquareId = 7;

    let guessedWordCount = 0;
  
    const keys = document.querySelectorAll(".keyboard-row button");

    if(prefix == undefined){
      changeKeyboardToWord();
    }

    // function getNewWord() {
    //   fetch(
    //     `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    //         "x-rapidapi-key": "<YOUR_KEY_GOES_HERE>",
    //       },
    //     }
    //   )
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((res) => {
    //       word = res.word;
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }
  
    window.onload = function() {
      var elem = document.createElement("img");
      console.log("File Location: " + acceptedWords[answerID].image)
      elem.setAttribute("src", acceptedWords[answerID].image);
      elem.setAttribute("width", "100%");
      document.getElementById("map").appendChild(elem);
    }

    function getNewWord(){

      //answerID = calculateDate();
      answerID = calculateDate();



      word = acceptedWords[answerID].word;
      if(acceptedWords[answerID].hasOwnProperty('prefix')){ //acceptedWords[answerID]
        prefix = acceptedWords[answerID].prefix;
        rootWord = word;
        word = prefix + word;
        niceWord = prefix + " " + word;
      }
      wordlength = word.length;
    }

    function calculateDate(){
      const date = new Date();
      const year =  date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      let chosenID = day;

      for(let i = 0; i < month; i++){
        let DaysInMonth = parseInt(getDaysInMonth(year, i + 1));
        chosenID = chosenID + DaysInMonth;
      }
      chosenID = chosenID % 170;
      console.log("chosenID: " + chosenID)
      return chosenID;
    }

    function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }

    function getCurrentWordArr() {
      const numberOfGuessedWords = guessedWords.length;
      return guessedWords[numberOfGuessedWords - 1];
    }

    function combineWord(index){
      if(acceptedWords[index].hasOwnProperty('prefix')){;
        var tempWord = acceptedWords[index].word;
        var tempPrefix = acceptedWords[index].prefix
        var tempNiceWord = tempPrefix + tempWord;
        return tempNiceWord;
      }else{
        return acceptedWords[index].word;
      }
    }
  
    function updateGuessedWords(letter) {   //this triggers whenever a letter is inputted from the keyboard is given (NOT when a word is submitted)   
      const currentWordArr = getCurrentWordArr();
      
      if(currentWordArr == ""){
        changeKeyboardToWord();
      }
      // if (currentWordArr && currentWordArr.length < colLength) { //if letter has room to be added

      //   currentWordArr.push(letter);
  
      //   const availableSpaceEl = document.getElementById(String(availableSpace));
      //   console.log("Available Space: " + availableSpace);
  
      //   availableSpace = availableSpace + 1;
      //   availableSpaceEl.textContent = letter;
      // }
      

      if (currentWordArr && currentWordArr.length < colLength) { //if letter has room to be added
        
        currentWordArr.push(letter);


        const availableSpaceEl = document.getElementById(String(availableSpace));
        console.log("Available Space: " + availableSpace);

        availableSpace = availableSpace + 1;
        availableSpaceEl.textContent = letter;

        const availableSpaceE2 = document.getElementById(String(availableSpace));
        availableSpaceE2.style.display = "flex";

        //console.log("Current Word Array: " + currentWordArr);


      }
    }
  
    function getTileColor(letter, index) {
      
      const isCorrectLetter = rootWord.includes(letter);
      console.log("WORD: " + rootWord + " isCorrectLetter: " + isCorrectLetter)
      if (!isCorrectLetter) {
        return "rgb(58, 58, 60)"; //grey
      }
  
      const letterInThatPosition = rootWord.charAt(index);
      const isCorrectPosition = letter === letterInThatPosition;
  
      if (isCorrectPosition) {
        return "rgb(83, 141, 78)"; //green
      }
  
      return "rgb(181, 159, 59)"; //yellow
    }
  
    function handleSubmitWord() {
      var currentWordArr = getCurrentWordArr();
      var copyCurrentWordArr;
      if (currentWordArr.length <= 3) {
        window.alert("Guess must be at least 4 letters");
        return
      }

      // if (currentWordArr.length < colLength) {           //shit code I made
      //   currentWordArr.forEach((letter, index) => {
      //     if(letter == ""){
      //       letter = "g";
      //     }
      //   });
        
      // }


      const currentWord = currentWordArr.join("");
      var currentPrefix;
      var currentRootWord;
      var newWord;
      var prefixBuffer;

      //Fix Word by adding its prefix and a space  !!!!!!!!! Need to do this as well when checking what the accepted words are. 
      //Might be smart to think a bit more about his especially the database side of this.
      //  
      if(prefix != undefined){
        if(currentWord.slice(0,3) == "mid"){
          currentPrefix = currentWord.slice(0,3)
          currentRootWord = currentWord.slice(3,currentWord.length)
          copyCurrentWordArr = currentWordArr.slice(3,currentWord.length)
          prefixBuffer = 3;
        }else{
          currentPrefix = currentWord.slice(0,1)
          currentRootWord = currentWord.slice(1,currentWord.length)
          copyCurrentWordArr = currentWordArr.slice(1,currentWord.length)
          prefixBuffer = 1;
        }

        var currentPrefixArr =  Array.from(currentPrefix)
        console.log("CurrentPrefixArr: " + currentPrefixArr)

        for(let i = 0; i < acceptedWords.length; i++){
          console.log("Checking Prefix with Word: " + acceptedWords[i].prefix + " " + acceptedWords[i].word )
  
          
          //if(acceptedWords[i].word == currentRootWord && acceptedWords[i].prefix == currentPrefix){
          if(combineWord(i) == currentWord){

            console.log("CurrentWordArr: "+ copyCurrentWordArr )
            if (copyCurrentWordArr.length < colLength) { 
              //available space needs to go to the next line
               let rowNum = getRowNumber();
              availableSpace = colLength * rowNum + 1
      
              console.log("rowNum: " + rowNum)
              console.log("rowNum: " + rowNum)
            }
  
            const firstLetterId = guessedWordCount * colLength + 1 + prefixBuffer;
            var firstLetterPrefixId = firstLetterId - prefixBuffer;
            console.log("First LetterID: "+ firstLetterId)

            const interval = 200;
            copyCurrentWordArr.forEach((letter, index) => {
              setTimeout(() => {
                const tileColor = getTileColor(letter, index);
                const letterId = firstLetterId + index;
                const letterEl = document.getElementById(letterId);
                letterEl.classList.add("animate__flipInX");
                //letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
                letterEl.style.backgroundColor = tileColor;
                letterEl.style.borderColor = tileColor;
              }, interval * index);
            });
        
            guessedWordCount += 1;

            if (currentWord === word) {

              console.log("First LetterID: "+ firstLetterPrefixId)

              currentPrefixArr.forEach((letter, index) => {
                setTimeout(() => {
                  const tileColor = "rgb(83, 141, 78)";
                  const letterId = firstLetterPrefixId + index;
                  const letterEl = document.getElementById(letterId);
                  letterEl.classList.add("animate__flipInX");
                  //letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
                  letterEl.style.backgroundColor = tileColor;
                  letterEl.style.borderColor = tileColor;
                }, interval * index);
              });

              window.alert("Congratulations!");
            }
        
            if (guessedWords.length === 6) {
              window.alert(`Sorry, you have no more guesses! The word is ${niceWord}.`);
            }
        
            guessedWords.push([]);
            changeKeyboardToPrefix();
            return
          }
        }

      }else{

        for(let i = 0; i < acceptedWords.length; i++){
          console.log("Checking Word: " + acceptedWords[i].word)
  
          
          if(acceptedWords[i].word == currentWord){
  
            if (currentWordArr.length < colLength) { 
              //available space needs to go to the next line
               let rowNum = getRowNumber();
              availableSpace = colLength * rowNum + 1
      
              console.log("rowNum: " + rowNum)
              console.log("rowNum: " + rowNum)
            }
  
            const firstLetterId = guessedWordCount * colLength + 1;
            const interval = 200;
            currentWordArr.forEach((letter, index) => {
              setTimeout(() => {
                const tileColor = getTileColor(letter, index);
                const letterId = firstLetterId + index;
                const letterEl = document.getElementById(letterId);
                letterEl.classList.add("animate__flipInX");
                letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
              }, interval * index);
            });
        
            guessedWordCount += 1;
        
            if (currentWord === word) {
              gameOver = true;
              window.alert("Congratulations!");
            }
        
            if (guessedWords.length === 6) {
              window.alert(`Sorry, you have no more guesses! The word is ${niceWord}.`);
            }
        
            guessedWords.push([]);
            changeKeyboardToPrefix();
            return
          }
        }
        
      }



      window.alert("Your guess is not recognized as a possible answer: " + currentPrefix + " " + currentRootWord);
      return

     
  
      // fetch(`https://wordsapiv1.p.rapidapi.com/words/${currentWord}`, {
      //   method: "GET",
      //   headers: {
      //     "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      //     "x-rapidapi-key": "61c5e3986dmsh20c1bee95c2230dp18d1efjsn4668bbcfc1b3",
      //   },
      // })
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw Error();
      //     }
  
      //     const firstLetterId = guessedWordCount * 5 + 1;
      //     const interval = 200;
      //     currentWordArr.forEach((letter, index) => {
      //       setTimeout(() => {
      //         const tileColor = getTileColor(letter, index);
  
      //         const letterId = firstLetterId + index;
      //         const letterEl = document.getElementById(letterId);
      //         letterEl.classList.add("animate__flipInX");
      //         letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
      //       }, interval * index);
      //     });
  
      //     guessedWordCount += 1;
  
      //     if (currentWord === word) {
      //       window.alert("Congratulations!");
      //     }
  
      //     if (guessedWords.length === 6) {
      //       window.alert(`Sorry, you have no more guesses! The word is ${word}.`);
      //     }
  
      //     guessedWords.push([]);
      //   })
      //   .catch(() => {
      //     window.alert("Word is not recognised: " + currentWord); //currentWord is the guessed word
      //   });

      

    }
  
    function createSquares() {
      const gameBoard = document.getElementById("board");
      colLength = 25
      // gameBoard.style.gridTemplateColumns = "repeat(" + colLength + ", 1fr)";
  
      for (let i = 0; i < 6; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id", "a" + i); //a0, a1, a2, a3...
        gameBoard.appendChild(row);

        for (let index = 1; index <= colLength; index++) {
          let square = document.createElement("div");
          square.classList.add("square");
          square.classList.add("animate__animated");
          square.setAttribute("id", (colLength * i) + index);
          row.appendChild(square);
          square.style.display = "none";
          if(square.id % colLength == 1 || square.id % colLength == 2){
            square.style.display = "flex";
          }
          if(square.id % colLength == 1 ){
            square.classList.add("prefixOne");
            if(prefix == undefined){
              square.classList.add("disabledSquare")
              square.setAttribute("id","x" + i) //x0, x1, x2, x3 ...
            }
          }
          if(square.id % colLength == 3 ){
            square.classList.add("prefixThree");
          }
          if(prefix == undefined){
            newI = i + 1;
            square.setAttribute("id", square.id - newI)
          }
        }
      }
      if(prefix == undefined){ //fixes length issue caused by changing the ids of squares (see few lines above)
        colLength = colLength - 1;
      }
    }

    function changeKeyboardToPrefix(){
      if(prefix != undefined){
        var displaysOff = document.getElementsByClassName('display');
        for(var i = 0; i < displaysOff.length; i++){
        displaysOff[i].style.display = 'none';
        }

        var displaysOn = document.getElementsByClassName('displayPrefix');
        for(var i = 0; i < displaysOn.length; i++){
        displaysOn[i].style.display = 'block';
        }
      }
    }

    function changeKeyboardToWord(){
      var displaysOff = document.getElementsByClassName('display');
      for(var i = 0; i < displaysOff.length; i++){
      displaysOff[i].style.display = 'block';
      }

      var displaysOn = document.getElementsByClassName('displayPrefix');
      for(var i = 0; i < displaysOn.length; i++){
      displaysOn[i].style.display = 'none';
      }
    }

    function changeToMidPrefix(){
      var index = getRowNumber() - 1;

      var prefixOne = document.getElementsByClassName('prefixOne');
      prefixOne[index].style.marginRight = '0px';
      prefixOne[index].style.marginLeft = '0px';

      var prefixThree = document.getElementsByClassName('prefixThree');
      prefixThree[index].style.marginRight = '20px';
    }

    function changeFromMidPrefix(){
      var index = getRowNumber() - 1;

      var prefixOne = document.getElementsByClassName('prefixOne');
      prefixOne[index].style.marginRight = '88px';
      prefixOne[index].style.marginLeft = '70px';

      var prefixThree = document.getElementsByClassName('prefixThree');
      prefixThree[index].style.marginRight = '0px';
    }

    function getRowNumber(){
      var rowNumber = Math.ceil(availableSpace / colLength)
      console.log("Row Number: " + rowNumber);
      return rowNumber;
    }
  
    function handleDeleteLetter() {

      const currentWordArr = getCurrentWordArr();
      console.log("Curr: "+ currentWordArr)

      if(currentWordArr.length == 1){
        changeKeyboardToPrefix();
      }

      if(currentWordArr != ""){
        if(currentWordArr == "m,i,d"){
          const removedLetter = currentWordArr.pop();
  
          guessedWords[guessedWords.length - 1] = currentWordArr;
      
          const lastLetterEl = document.getElementById(String(availableSpace - 1));
    
          if(lastLetterEl != null){
            lastLetterEl.textContent = "";
            availableSpace = availableSpace - 1;
          }
          handleDeleteLetter(); 
          changeFromMidPrefix();
          changeKeyboardToPrefix();
        }
        const removedLetter = currentWordArr.pop();
  
        guessedWords[guessedWords.length - 1] = currentWordArr;
    
        const lastLetterEl = document.getElementById(String(availableSpace - 1));
        const lastLetterE2 = document.getElementById(String(availableSpace));
        const lastLetterE3 = document.getElementById(String(availableSpace + 2));

        if(lastLetterEl != null){
          lastLetterEl.textContent = "";
          availableSpace = availableSpace - 1;
          if(lastLetterEl.classList.contains('prefixOne')){
            lastLetterE3.style.display = 'none';
          }
          else{
            lastLetterE2.style.display = 'none';
          }
        }
      }
    }
    
    for (let i = 0; i < keys.length; i++) {
      keys[i].onclick = ({ target }) => {
        const letter = target.getAttribute("data-key");
  
        if (letter === "enter") {
          handleSubmitWord();
          return;
        }
  
        if (letter === "del") {
          handleDeleteLetter();
          return;
        }

        if(letter === "mid"){
          updateGuessedWords("m");
          updateGuessedWords("i");
          updateGuessedWords("d");

          changeToMidPrefix();
          return;
        }
  
        updateGuessedWords(letter);
      };
    }
  });