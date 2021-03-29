/**
Created 17/06/14 by Garreth Tigwell
**/

//Global variables used for for counters
var i;
var j;
var k;
var l;
var m;

//Global variabls used to store the HEX value of the colour picking squares
var paletteColourOne;
var paletteColourTwo;
var paletteColourThree;
var paletteColourFour;
var paletteColourFive;
var paletteColourSix;
var paletteColourSeven;

//Global variables used to store the r, g and b values from the RGB equivalents of the HEX values
var r;
var g;
var b;

//Used to store luminance 1 and 2
var Y1;
var Y2;

//Initiallising an array to store each of the red, green and blue values for each of the colours in the colour scheme
var redArray = [];
var greenArray = [];
var blueArray = [];

//An array storing the class name of each square in the results grid
var informationSquare = ['.colourOneFour', '.colourOneFive', '.colourOneSix', '.colourOneSeven',
                         '.colourTwoFour', '.colourTwoFive', '.colourTwoSix','.colourTwoSeven',
                         '.colourThreeFour', '.colourThreeFive', '.colourThreeSix', '.colourThreeSeven'];

//An array storing the class of each section of information within each of the results squares
var textPassFailFirst = ['.resultFirstFourthOne', '.resultFirstFourthTwo', '.resultFirstFourthThree', '.contrastRatioFirst',
                         '.resultFirstFifthOne', '.resultFirstFifthTwo', '.resultFirstFifthThree', '.contrastRatioSecond',
                         '.resultFirstSixthOne', '.resultFirstSixthTwo', '.resultFirstSixthThree', '.contrastRatioThird',
                         '.resultFirstSeventhOne', '.resultFirstSeventhTwo', '.resultFirstSeventhThree', '.contrastRatioFourth',

                         '.resultSecondFourthOne', '.resultSecondFourthTwo', '.resultSecondFourthThree', '.contrastRatioFifth',
                         '.resultSecondFifthOne', '.resultSecondFifthTwo', '.resultSecondFifthThree', '.contrastRatioSixth',
                         '.resultSecondSixthOne', '.resultSecondSixthTwo', '.resultSecondSixthThree', '.contrastRatioSeventh',
                         '.resultSecondSeventhOne', '.resultSecondSeventhTwo', '.resultSecondSeventhThree', '.contrastRatioEighth',

                         '.resultThirdFourthOne', '.resultThirdFourthTwo', '.resultThirdFourthThree', '.contrastRatioNine',
                         '.resultThirdFifthOne', '.resultThirdFifthTwo', '.resultThirdFifthThree', '.contrastRatioTen',
                         '.resultThirdSixthOne', '.resultThirdSixthTwo', '.resultThirdSixthThree', '.contrastRatioEleven',
                         '.resultThirdSeventhOne', '.resultThirdSeventhTwo', '.resultThirdSeventhThree', '.contrastRatioTwelve'];


//This function is called when the user chose a colour
function contrastCheck () {

//resets all counters to 0
    i = 0;
    j = 0;
    k = 0;
    l = 0;
    m = 0;

//calls the function to get the rgb colours from the squares and then will do a contrast check
    getPaletteColours();
    cycleThroughPalette();
}


function getPaletteColours() {
    //variables are storing the HEX value
    paletteColourOne = $(".One").css("background-color");
    paletteColourTwo = $(".Two").css("background-color");
    paletteColourThree = $(".Three").css("background-color");
    paletteColourFour = $(".Four").css("background-color");
    paletteColourFive = $(".Five").css("background-color");
    paletteColourSix = $(".Six").css("background-color");
    paletteColourSeven = $(".Seven").css("background-color");

    // Based around http://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color
    // It will get the rgb values from the HEX value stored in the CSS file and puts each palette rgb in an array.
    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourOne);
        redArray[0] = rgb[1],
        greenArray[0] = rgb[2],
        blueArray[0] = rgb[3];

    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourTwo);
        redArray[1] = rgb[1],
        greenArray[1] = rgb[2],
        blueArray[1] = rgb[3];

    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourThree);
        redArray[2] = rgb[1],
        greenArray[2] = rgb[2],
        blueArray[2] = rgb[3];

    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourFour);
        redArray[3] = rgb[1],
        greenArray[3] = rgb[2],
        blueArray[3] = rgb[3];

    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourFive);
        redArray[4] = rgb[1],
        greenArray[4] = rgb[2],
        blueArray[4] = rgb[3];

    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourSix);
        redArray[5] = rgb[1],
        greenArray[5] = rgb[2],
        blueArray[5] = rgb[3];

    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(paletteColourSeven);
        redArray[6] = rgb[1],
        greenArray[6] = rgb[2],
        blueArray[6] = rgb[3];
}

function cycleThroughPalette () {
    //this will cycle through each row in the grid
    for (i; i < 3; i++) {
        //j is reset to 0 for the new row so it starts from the first column
        j = 0;
        //this will cycle through each column in the grid
        for (j; j < 4; j++) {
            // The results box located in first row and first column
            if (i == 0 && j == 0) {
                CalculateOne(redArray[k], greenArray[k], blueArray[k]);
                CalculateTwo(redArray[k + 3], greenArray[k + 3], blueArray[k + 3]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in first row and second column
            else if (i == 0 && j == 1) {
                CalculateOne(redArray[k], greenArray[k], blueArray[k]);
                CalculateTwo(redArray[k + 4], greenArray[k + 4], blueArray[k + 4]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in first row and third column
            else if (i == 0 && j == 2) {
                CalculateOne(redArray[k], greenArray[k], blueArray[k]);
                CalculateTwo(redArray[k + 5], greenArray[k + 5], blueArray[k + 5]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in first row and fourth column
            else if (i == 0 && j == 3) {
                CalculateOne(redArray[k], greenArray[k], blueArray[k]);
                CalculateTwo(redArray[k + 6], greenArray[k + 6], blueArray[k + 6]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in second row and first column
            else if (i == 1 && j == 0) {
                CalculateOne(redArray[k + 1], greenArray[k + 1], blueArray[k + 1]);
                CalculateTwo(redArray[k + 3], greenArray[k + 3], blueArray[k + 3]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in second row and second column
            else if (i == 1 && j == 1) {
                CalculateOne(redArray[k + 1], greenArray[k + 1], blueArray[k + 1]);
                CalculateTwo(redArray[k + 4], greenArray[k + 4], blueArray[k + 4]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in second row and third column
            else if (i == 1 && j == 2) {
                CalculateOne(redArray[k + 1], greenArray[k + 1], blueArray[k + 1]);
                CalculateTwo(redArray[k + 5], greenArray[k + 5], blueArray[k + 5]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in second row and fourth column
            else if (i == 1 && j == 3) {
                CalculateOne(redArray[k + 1], greenArray[k + 1], blueArray[k + 1]);
                CalculateTwo(redArray[k + 6], greenArray[k + 6], blueArray[k + 6]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in third row and first column
            else if (i == 2 && j == 0) {
                CalculateOne(redArray[k + 2], greenArray[k + 2], blueArray[k + 2]);
                CalculateTwo(redArray[k + 3], greenArray[k + 3], blueArray[k + 3]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in third row and second column
            else if (i == 2 && j == 1) {
                CalculateOne(redArray[k + 2], greenArray[k + 2], blueArray[k + 2]);
                CalculateTwo(redArray[k + 4], greenArray[k + 4], blueArray[k + 4]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in third row and third column
            else if (i == 2 && j == 2) {
                CalculateOne(redArray[k + 2], greenArray[k + 2], blueArray[k + 2]);
                CalculateTwo(redArray[k + 5], greenArray[k + 5], blueArray[k + 5]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
            // The results box located in third row and fourth column
            else if (i == 2 && j == 3) {
                CalculateOne(redArray[k + 2], greenArray[k + 2], blueArray[k + 2]);
                CalculateTwo(redArray[k + 6], greenArray[k + 6], blueArray[k + 6]);
                Brightest();
                Ratio();
                //This counter makes sure to move to the next row in the textPassFailFirst array so that
                //the next square is updated since the ratio() function has already been called
                //for the previous square
                l = l + 4;
            }
        }
    }
}

//This method will calculate the luminance of the first colour
function CalculateOne(red, green, blue) {
    //Can r g and b be removed?
	r = red / 255;
	g = green / 255;
	b = blue / 255;

	if (r <= 0.03928) {
		r = (r / 12.92);
	} else {
		r = Math.pow(((r + 0.055) / 1.055), 2.4);
	}

	if (g <= 0.03928) {
		g = (g / 12.92);
	} else {
		g = Math.pow(((g + 0.055) / 1.055), 2.4);

	}

	if (b <= 0.03928) {
		b = (b / 12.92);
	} else {
		b = Math.pow(((b + 0.055) / 1.055), 2.4);

	}

	Y1 = ((0.2126 * r) + (0.7152 * g) + (0.0722 * b));
};

//This method will calculate the luminance of the second colour
function CalculateTwo(red, green, blue) {
    //Can r g and b be removed?
	r = red / 255;
	g = green / 255;
	b = blue / 255;

	if (r <= 0.03928) {
		r = (r / 12.92);
	} else {
		r = Math.pow(((r + 0.055) / 1.055), 2.4);
	}

	if (g <= 0.03928) {
		g = (g / 12.92);
	} else {
		g = Math.pow(((g + 0.055) / 1.055), 2.4);

	}

	if (b <= 0.03928) {
		b = (b / 12.92);
	} else {
		b = Math.pow(((b + 0.055) / 1.055), 2.4);

	}

	Y2 = ((0.2126 * r) + (0.7152 * g) + (0.0722 * b));
};

//This function determines which colour has the largest luminance. L1 in the ratio calculation must have
//the brightest colour
function Brightest() {
    if (Y1 > Y2) {
        L1 = Y1;
        L2 = Y2;
    } else if (Y1 < Y2) {
        L2 = Y1;
        L1 = Y2;
    } else {
        L1 = 0;
        L2 = 0;
    }
}

//This method will compare the luminance of the two colours to get a contrast ratio and then update the results grid
function Ratio() {
    var result = (L1 + 0.05) / (L2 + 0.05);
    
        //PASS: The two colours meet the best AAA colour contrast level
        if (result >= 7) {
            $("" + textPassFailFirst[(l)]).html('<font color="#0a44b6"><b>&#10004</b></font>');
            $("" + textPassFailFirst[(l+1)]).html('<font color="#0a44b6"><b>&#10004</b></font>');
            $("" + textPassFailFirst[(l+2)]).html('<font color="#0a44b6"><b>&#10004</b></font>');
            $("" + textPassFailFirst[(l+3)]).text("" + result.toFixed(2));
            $("" + informationSquare[(m)]).css('background-color', '#FDFDFD');
        //PASS: The two colours meet the minimum AAA and best AA colour contrast level
        } else if (result < 7 && result >= 4.5) {
            $("" + textPassFailFirst[(l)]).html('<font color="#0a44b6"><b>&#10004</b></font>');
            $("" + textPassFailFirst[(l+1)]).html('<font color="#0a44b6"><b>&#10004</b></font>');
            $("" + textPassFailFirst[(l+2)]).html('&#x2718');
            $("" + textPassFailFirst[(l+3)]).text("" + result.toFixed(2));
            $("" + informationSquare[(m)]).css('background-color', '#FDFDFD');
        //PASS: The two colours meet the minimum AA contrast level
        } else if (result >= 3) {
            $("" + textPassFailFirst[(l)]).html('<font color="#0a44b6"><b>&#10004</b></font>');
            $("" + textPassFailFirst[(l+1)]).html('&#x2718');
            $("" + textPassFailFirst[(l+2)]).html('&#x2718');
            $("" + textPassFailFirst[(l+3)]).text("" + result.toFixed(2));
            $("" + informationSquare[(m)]).css('background-color', '#FDFDFD');
        //FAIL: The two colours do not meet the minimum contrast level
        } else {
            $("" + textPassFailFirst[(l)]).html('&#x2718');
            $("" + textPassFailFirst[(l+1)]).html('&#x2718');
            $("" + textPassFailFirst[(l+2)]).html('&#x2718');
            $("" + textPassFailFirst[(l+3)]).text("" + result.toFixed(2));
            $("" + informationSquare[(m)]).css('background-color', '#747373');
        }

    //This updates the counter for keeping track of with results square is to be updated.
    m++
}