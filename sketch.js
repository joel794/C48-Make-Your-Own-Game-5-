var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var formRank,form, player, game, obstacle;

var players, player1, player2, player3, player4;

var track, player1_img, player2_img, player3_img, player4_img,obstacleImg;

function preload(){
  track = loadImage("track.jpg");
  player1_img = loadImage("bluebike.png");
  player2_img = loadImage("yellowbike.png");
  player3_img = loadImage("lightblue.png");
  player4_img = loadImage("RedBike.png");
  obstacleImg = loadImage("hurdle.png");
  ground = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
