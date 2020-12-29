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