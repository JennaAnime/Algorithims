function setup() {
  createCanvas(800,400);
 Rantaro= createSprite(400, 200, 50, 50);
 Anime= createSprite(400, 200, 50, 70);

}

function draw() {
  background(120,233,80);  
  Rantaro.x= mouseX 
  Rantaro.y = mouseY

  if(abs(Rantaro.x-Anime.x)<= Rantaro.width/2 + Anime.width/2 && 
  abs(Rantaro.y-Anime.y)<= Rantaro.height/2 + Anime.height/2){
   Rantaro.shapeColor=('green')
   Anime.shapeColor=('green')
  }
  else{
    Rantaro.shapeColor=('blue')
    Anime.shapeColor=('blue')

  }
  drawSprites();
}