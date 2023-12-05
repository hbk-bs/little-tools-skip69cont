const saveButton = document.querySelector
    ("button#save");
const colorInput = document.querySelector
    ("input#color");
const rangeInput= document.querySelector
    ("input#range");
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
   rangeInput.addEventListener("input", ()=>{
        range = rangeInput.value;
   });
}
   
function draw() {
   
}

function mouseDragged(){
    fill(paintColor);
    circle(mouseX,mouseY, range );
    line(pmouseX, pmouseY, pmouseX, pmouseY);
    for (let i = 0; i < 500; i++) {

        point(
            mouseX+random(-range,range),
            mouseY+random(-range,range));
        
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