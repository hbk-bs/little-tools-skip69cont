const saveButton = document.querySelector
    ("button#save");
const colorInput = document.querySelector
    ("input#color");
console.log(colorInput);

let paintColor = '#ff3456'
colorInput.value = paintColor;

function setup() {
   const canvas = createCanvas(500,500);
   canvas.parent("sketch");
    background (200);
    saveButton.addEventListener("click",()=>{
        save("image.png");  
   });
   colorInput.addEventListener("input", ()=>{
        paintColor = colorInput.value;
   });
}
   
function draw() {
   
}

function mouseDragged(){
    fill(paintColor);
    circle(mouseX,mouseY, 10);
    line(pmouseX, pmouseY, pmouseX, pmouseY);
    for (let i = 0; i < 100; i++) {

        point(
            mouseX+random(-10,10),
            mouseY+random(-10,10));
        
    }
}

function buttonHandler(){
    
}

function keyPressed(){
    if (key === "s"){
        save ("image.png")
    }
    console.log(key)
}