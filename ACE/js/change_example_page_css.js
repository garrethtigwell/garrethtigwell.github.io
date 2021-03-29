/**
 * Created by Garreth on 22/07/2014.
 */



function noCVD() {

    //The variables here are set up to store the various HEX values that were saved using jStorage for the 
    //user chosen colours
    var storedBackgroundColour = $.jStorage.get("backgroundColourKey");
    var storedHeaderFooter = $.jStorage.get("headerFooterKey");
    var storedBackgroundText = $.jStorage.get("backgroundTextKey");
    var storedHeaderText = $.jStorage.get("headerTextKey");
    var storedHoverColour = $.jStorage.get("hoverColourKey");
    var storedHyperlinkColour = $.jStorage.get("hyperlinkColourKey");
    var storedClickedHyperlink = $.jStorage.get("clickedHyperlinkColourKey");

    //Here each of the elements on the Example page are recolourised using the related and unsimulated HEX values
    $('#mainBackground').css("backgroundColor", "" + storedBackgroundColour);
    $('.headerFooter').css("backgroundColor", "" + storedHeaderFooter);
    $('.backgroundColourText').css("color", "" + storedBackgroundText);
    $('.headerFooterText').css("color", "" + storedHeaderText);
    $('.buttonOne').css("backgroundColor", "" + storedHoverColour);
    $('.buttonTwo').css("backgroundColor", "" + storedHeaderFooter);
    $('.buttonThree').css("backgroundColor", "" + storedHeaderFooter);
    $('.buttonFour').css("backgroundColor", "" + storedHeaderFooter);
    $('#hyperlink').css("color", "" + storedHyperlinkColour);
    $('#hyperlinkClicked').css("color", "" + storedClickedHyperlink);
};

function protanCVD() {

    //The variables here are set up to store the various HEX values that were saved using jStorage for the 
    //protan simulation of the user chosen colours
    var storedBackgroundColourProtan = $.jStorage.get("backgroundColourProtanKey");
    var storedHeaderFooterProtan = $.jStorage.get("headerFooterProtanKey");
    var storedBackgroundTextProtan = $.jStorage.get("backgroundTextProtanKey");
    var storedHeaderTextProtan = $.jStorage.get("headerTextProtanKey");
    var storedHoverColourProtan = $.jStorage.get("hoverColourProtanKey");
    var storedHyperlinkColourProtan = $.jStorage.get("hyperlinkColourProtanKey");
    var storedClickedHyperlinkProtan = $.jStorage.get("clickedHyperlinkColourProtanKey");

    //Here each of the elements on the Example page are recolourised using the related and protan simulated HEX values
    $('#mainBackground').css("backgroundColor", "" + storedBackgroundColourProtan);
    $('.headerFooter').css("backgroundColor", "" + storedHeaderFooterProtan);
    $('.backgroundColourText').css("color", "" + storedBackgroundTextProtan);
    $('.headerFooterText').css("color", "" + storedHeaderTextProtan);
    $('.buttonOne').css("backgroundColor", "" + storedHeaderFooterProtan);
    $('.buttonTwo').css("backgroundColor", "" + storedHoverColourProtan);
    $('.buttonThree').css("backgroundColor", "" + storedHeaderFooterProtan);
    $('.buttonFour').css("backgroundColor", "" + storedHeaderFooterProtan);
    $('#hyperlink').css("color", "" + storedHyperlinkColourProtan);
    $('#hyperlinkClicked').css("color", "" + storedClickedHyperlinkProtan);
};

function deutanCVD() {

    //The variables here are set up to store the various HEX values that were saved using jStorage for the 
    //deutan simulation of the user chosen colours
    var storedBackgroundColourDeutan = $.jStorage.get("backgroundColourDeutanKey");
    var storedHeaderFooterDeutan = $.jStorage.get("headerFooterDeutanKey");
    var storedBackgroundTextDeutan = $.jStorage.get("backgroundTextDeutanKey");
    var storedHeaderTextDeutan = $.jStorage.get("headerTextDeutanKey");
    var storedHoverColourDeutan = $.jStorage.get("hoverColourDeutanKey");
    var storedHyperlinkColourDeutan = $.jStorage.get("hyperlinkColourDeutanKey");
    var storedClickedHyperlinkDeutan = $.jStorage.get("clickedHyperlinkColourDeutanKey");

    //Here each of the elements on the Example page are recolourised using the related and deutan simulated HEX values
    $('#mainBackground').css("backgroundColor", "" + storedBackgroundColourDeutan);
    $('.headerFooter').css("backgroundColor", "" + storedHeaderFooterDeutan);
    $('.backgroundColourText').css("color", "" + storedBackgroundTextDeutan);
    $('.headerFooterText').css("color", "" + storedHeaderTextDeutan);
    $('.buttonOne').css("backgroundColor", "" + storedHeaderFooterDeutan);
    $('.buttonTwo').css("backgroundColor", "" + storedHeaderFooterDeutan);
    $('.buttonThree').css("backgroundColor", "" + storedHoverColourDeutan);
    $('.buttonFour').css("backgroundColor", "" + storedHeaderFooterDeutan);
    $('#hyperlink').css("color", "" + storedHyperlinkColourDeutan);
    $('#hyperlinkClicked').css("color", "" + storedClickedHyperlinkDeutan);
};

function tritanCVD() {

    //The variables here are set up to store the various HEX values that were saved using jStorage for the 
    //tritan simulation of the user chosen colours
    var storedBackgroundColourTritan = $.jStorage.get("backgroundColourTritanKey");
    var storedHeaderFooterTritan = $.jStorage.get("headerFooterTritanKey");
    var storedBackgroundTextTritan = $.jStorage.get("backgroundTextTritanKey");
    var storedHeaderTextTritan = $.jStorage.get("headerTextTritanKey");
    var storedHoverColourTritan = $.jStorage.get("hoverColourTritanKey");
    var storedHyperlinkColourTritan = $.jStorage.get("hyperlinkColourTritanKey");
    var storedClickedHyperlinkTritan = $.jStorage.get("clickedHyperlinkColourTritanKey");

    //Here each of the elements on the Example page are recolourised using the related and tritan simulated HEX values
    $('#mainBackground').css("backgroundColor", "" + storedBackgroundColourTritan);
    $('.headerFooter').css("backgroundColor", "" + storedHeaderFooterTritan);
    $('.backgroundColourText').css("color", "" + storedBackgroundTextTritan);
    $('.headerFooterText').css("color", "" + storedHeaderTextTritan);
    $('.buttonOne').css("backgroundColor", "" + storedHeaderFooterTritan);
    $('.buttonTwo').css("backgroundColor", "" + storedHeaderFooterTritan);
    $('.buttonThree').css("backgroundColor", "" + storedHeaderFooterTritan);
    $('.buttonFour').css("backgroundColor", "" + storedHoverColourTritan);
    $('#hyperlink').css("color", "" + storedHyperlinkColourTritan);
    $('#hyperlinkClicked').css("color", "" + storedClickedHyperlinkTritan);
};