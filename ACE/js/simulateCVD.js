/**
 * Created by Garreth on 30/06/2014.
 */

//Setting up the global variables that can be accessed through the program
//
//
//This group of variables are for setting up the three different canvases used to store the image lookup tables.
var tempStoreColour;

var createCanvas;
var canvasContext;
var colourPaletteData;
var pixels;

var createCanvas2;
var canvasContext2;
var colourPaletteData2;
var pixels2;

var createCanvas3;
var canvasContext3;
var colourPaletteData3;
var pixels3;

//This function will store the protan lookup table
function storeProtan(imageObj) {
    //This points to the canvas that is set up in the HTML file
	createCanvas = document.getElementById('canvasProtan');
    //This allows manipulation of the canvas by providing methods and properties so that things can be drawn onto the canvas
	canvasContext = createCanvas.getContext('2d');

    //This will draw the colour gradient into the canvas from the very most top-left corner, however it is hidden from view in the html
	canvasContext.drawImage(colourPaletteObj, 0, 0);

    //This gets information about the PNG image data
	colourPaletteData = canvasContext.getImageData(0, 0, 4096, 4096);
    //This will get the rgba data for the pixels within the colour palette array
	pixels = colourPaletteData.data;

}

//This will set up the image object that is drawn to the canvas
var colourPaletteObj = new Image();
colourPaletteObj.onload = function() {
	storeProtan(this);
};

//This function will store the deutan lookup table
function storeDeutan(imageObj) {
    //This points to the canvas that is set up in the HTML file
	createCanvas2 = document.getElementById('canvasDeutan');
    //This allows manipulation of the canvas by providing methods and properties so that things can be drawn onto the canvas
	canvasContext2 = createCanvas2.getContext('2d');

    //This will draw the colour gradient into the canvas from the very most top-left corner, however it is hidden from view in the html
	canvasContext2.drawImage(colourPaletteObj2, 0, 0);

    //This gets information about the PNG image data
	colourPaletteData2 = canvasContext2.getImageData(0, 0, 4096, 4096);
    //This will get the rgba data for the pixels within the colour palette array
	pixels2 = colourPaletteData2.data;

}

//This will set up the image object that is drawn to the canvas
var colourPaletteObj2 = new Image();
colourPaletteObj2.onload = function() {
	storeDeutan(this);
};

//This function will store the tritan lookup table
function storeTritan(imageObj) {
    //This points to the canvas that is set up in the HTML file
	createCanvas3 = document.getElementById('canvasTritan');
    //This allows manipulation of the canvas by providing methods and properties so that things can be drawn onto the canvas
	canvasContext3 = createCanvas3.getContext('2d');

    //This will draw the colour gradient into the canvas from the very most top-left corner, however it is hidden from view in the html
	canvasContext3.drawImage(colourPaletteObj3, 0, 0);

    //This gets information about the PNG image data
	colourPaletteData3 = canvasContext3.getImageData(0, 0, 4096, 4096);
    //This will get the rgba data for the pixels within the colour palette array
	pixels3 = colourPaletteData3.data;

}

//This will set up the image object that is drawn to the canvas
var colourPaletteObj3 = new Image();
colourPaletteObj3.onload = function() {
	storeTritan(this);
};

//This tells the image object the location/name of the jpg files.
colourPaletteObj.src = 'img/lut_protan_medium.png';
colourPaletteObj2.src = 'img/lut_deutan_medium.png';
colourPaletteObj3.src = 'img/lut_tritan_medium.png';


//This will convert any rgb to hex
function rgb2hex(red, green, blue) {
        var rgb = blue | (green << 8) | (red << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1)
  }

//This function takes the first colour and changes it into one that a person with Protanopia would see
function simulateProtanOne() {

    var pixelColor = $(".One").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');

    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanOne").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);   
    $.jStorage.set("backgroundColourProtanKey", "" + tempStoreColour);
}

//This function takes the second colour and changes it into one that a person with Protanopia would see
function simulateProtanTwo() {

    var pixelColor = $(".Two").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanTwo").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue); 
    $.jStorage.set("headerFooterProtanKey", "" + tempStoreColour);

}

//This function takes the third colour and changes it into one that a person with Protanopia would see
function simulateProtanThree() {

    var pixelColor = $(".Three").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanThree").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("hoverColourProtanKey", "" + tempStoreColour);

}

//This function takes the fourth colour and changes it into one that a person with Protanopia would see
function simulateProtanFour() {

    var pixelColor = $(".Four").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanFour").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("backgroundTextProtanKey", "" + tempStoreColour);

}

//This function takes the fifth colour and changes it into one that a person with Protanopia would see
function simulateProtanFive() {

    var pixelColor = $(".Five").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanFive").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("headerTextProtanKey", "" + tempStoreColour);
}

//This function takes the sixth colour and changes it into one that a person with Protanopia would see
function simulateProtanSix() {

    var pixelColor = $(".Six").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanSix").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("hyperlinkColourProtanKey", "" + tempStoreColour);

}

//This function takes the seventh colour and changes it into one that a person with Protanopia would see
function simulateProtanSeven() {

    var pixelColor = $(".Seven").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels[finalIndex];
    var finalGreen = pixels[finalIndex + 1];
    var finalBlue = pixels[finalIndex + 2];

    $("#protanSeven").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    
    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("clickedHyperlinkColourProtanKey", "" + tempStoreColour);
}

//This function takes the first colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanOne() {

    var pixelColor = $(".One").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');

    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanOne").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("backgroundColourDeutanKey", "" + tempStoreColour);
    
}

//This function takes the second colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanTwo() {

    var pixelColor = $(".Two").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanTwo").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("headerFooterDeutanKey", "" + tempStoreColour);
        
}

//This function takes the third colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanThree() {

    var pixelColor = $(".Three").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanThree").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("hoverColourDeutanKey", "" + tempStoreColour);

}

//This function takes the fourth colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanFour() {

    var pixelColor = $(".Four").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanFour").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("backgroundTextDeutanKey", "" + tempStoreColour);

}

//This function takes the fifth colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanFive() {

    var pixelColor = $(".Five").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanFive").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("headerTextDeutanKey", "" + tempStoreColour);
            
}

//This function takes the sixth colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanSix() {

    var pixelColor = $(".Six").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanSix").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("hyperlinkColourDeutanKey", "" + tempStoreColour);
            
}

//This function takes the seventh colour and changes it into one that a person with Deuteranopia would see
function simulateDeutanSeven() {

    var pixelColor = $(".Seven").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels2[finalIndex];
    var finalGreen = pixels2[finalIndex + 1];
    var finalBlue = pixels2[finalIndex + 2];

    $("#deutanSeven").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("clickedHyperlinkColourDeutanKey", "" + tempStoreColour);
            
}

//This function takes the first colour and changes it into one that a person with Tritanopia would see
function simulateTritanOne() {

    var pixelColor = $(".One").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');

    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanOne").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("backgroundColourTritanKey", "" + tempStoreColour);

}

//This function takes the second colour and changes it into one that a person with Tritanopia would see
function simulateTritanTwo() {

    var pixelColor = $(".Two").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanTwo").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("headerFooterTritanKey", "" + tempStoreColour);

}

//This function takes the three colour and changes it into one that a person with Tritanopia would see
function simulateTritanThree() {

    var pixelColor = $(".Three").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanThree").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("hoverColourTritanKey", "" + tempStoreColour);
}   

//This function takes the fourth colour and changes it into one that a person with Tritanopia would see
function simulateTritanFour() {

    var pixelColor = $(".Four").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanFour").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("backgroundTextTritanKey", "" + tempStoreColour);
    
}

//This function takes the fifth colour and changes it into one that a person with Tritanopia would see
function simulateTritanFive() {

    var pixelColor = $(".Five").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanFive").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("headerTextTritanKey", "" + tempStoreColour);

}

//This function takes the sixth colour and changes it into one that a person with Tritanopia would see
function simulateTritanSix() {

    var pixelColor = $(".Six").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanSix").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("hyperlinkColourTritanKey", "" + tempStoreColour);
            
}

//This function takes the seventh colour and changes it into one that a person with Tritanopia would see
function simulateTritanSeven() {

    var pixelColor = $(".Seven").css("backgroundColor");
    pixelColor = pixelColor.substring(4, pixelColor.length - 1)
        .replace(/ /g, '')
        .split(',');


    // set index to 0x00000000
    var index = 0;
    // blue is taking blue channel value and placing at 0x000000XX
    var blue = pixelColor[2];
    // green is taking green channel value and placing at 0x0000XX00
    var green = (pixelColor[1] << 8);
    // red is taking red channel value and placing at 0x00XX0000
    var red = (pixelColor[0] << 16);

    // combine by or'ing produces 0xAARRGGBB
    index = index | blue;
    index = index | green;
    index = index | red;

    // multiply index by size of pixel structure
    var finalIndex = index * 4;
    // pixels in RGBA
    // index in ARGB
    var finalRed = pixels3[finalIndex];
    var finalGreen = pixels3[finalIndex + 1];
    var finalBlue = pixels3[finalIndex + 2];

    $("#tritanSeven").css("backgroundColor", "rgb(" + finalRed + ", " + finalGreen + ", " + finalBlue +")");

    tempStoreColour = rgb2hex(finalRed, finalGreen, finalBlue);
    $.jStorage.set("clickedHyperlinkColourTritanKey", "" + tempStoreColour);
}