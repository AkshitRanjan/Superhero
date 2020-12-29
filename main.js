var canvas = new fabric.canvas('myCanvas');

block_Image_Width = 30;
block_Image_Height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_Image_Object = "";

function player_update() {
    fabric.image.fromURL("player.png", function (Img) {
        player_object = Img;
        
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    })
}

function new_image(get_image) {
    fabric.image.fromURL(get_image, function(Img){
        block_Image_Object = Img;
        
        block_Image_Object.scaleToWidth(150);
        block_Image_Object.scaleToHeight(140);

        block_Image_Object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_Image_Object);   
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and Shift pressed together");
        block_Image_Width = block_Image_Width + 10;
        block_Image_Height = block_Image_Height + 10;
        document.getElementById("current_width").innerHTML = block_Image_Width;
        document.getElementById("current_height").innerHTML = block_Image_Height;
    }
    
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("M and Shift pressed together");
        block_Image_Width = block_Image_Width - 10;
        block_Image_Height = block_Image_Height - 10;
        document.getElementById("current_width").innerHTML = block_Image_Width;
        document.getElementById("current_height").innerHTML = block_Image_Height;
    }

    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    
    if (keyPressed == '66') {
        new_image('spiderman_body.png');
        console.log("b");
    }
    
    if (keyPressed == '76') {
        new_image('hulk_legs.png');
        console.log("l");
    }
    
    if (keyPressed == '82') {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    
    if (keyPressed == '70') {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    
    if (keyPressed == '38') {
        up()
        console.log("up");
    }
    if (keyPressed == '37') {
        left()
        console.log("left");
    }
    if (keyPressed == '39') {
        right()
        console.log("right");
    }
    if (keyPressed == '40') {
        down()
        console.log("down");
    }
}