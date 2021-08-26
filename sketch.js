var boy,boy_running;
var road,invisibleroad1,invisibleroad2,roadImg;


function preload(){
// loading images
      boy_running = loadAnimation("Runner-1.png","Runner-2.png")
      roadImg = loadImage("path.png")

}


function setup(){
      createCanvas(600,600);
// creating road
      road = createSprite(300,300,400,700)
      road.addImage("running", roadImg)
      
      road.scale=1.2;
      
     
// creating invisible road
      invisibleroad1 = createSprite(140,300,20,600)
      invisibleroad1.visible = false
      invisibleroad2 = createSprite(465,300,20,600)
      invisibleroad2.visible = false
// creating boy
boy = createSprite(300,550,20,20)
boy.addAnimation("running", boy_running)
boy.scale=0.05

}



function draw() {
      background("black");

      road.velocityY = 8;
     
// moving the boy with mouse
      boy.x= World.mouseX

      edges = createEdgeSprites() 
      boy.collide(edges[3]) 
      boy.collide(invisibleroad1)
    boy.collide(invisibleroad2)
    // Making infinite road
if(road.y > 600){
      road.y = height/2;
    }  
   
     
drawSprites();
}
