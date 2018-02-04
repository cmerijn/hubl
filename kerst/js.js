/**
*
*	Code by Merijn van Ginkel - https://cmerijn.nl - Happy holidays!
*
**/

if ($('body').hasClass("hatsekedee")) {
    // Laad de css
    $('head').append("<link rel='stylesheet' href='https://isaanhettesten.com/hubl/css.css'>");
    
    //Laad de afbeeldingen
    $('body').append("<img class='kersemus' src='https://isaanhettesten.com/hubl/Sleigh-PNG-Photos.png' />"); 
    $('.page-sidebar').append("<img class='opehaart' src='https://isaanhettesten.com/hubl/giphy.gif' />"); 
    $('.user-profile-wrapper').append("<img class='kerskran' src='https://isaanhettesten.com/hubl/christmas-wreath-free-clipart-18.png' />"); 
    $('.widget-user-profile').append("<img class='chrismasslinger' src='https://isaanhettesten.com/hubl/13.png' />");
    
	// Laad de extra divs
    $('.toggleable-sidebar .uk-width-medium-7-10').first().prepend("<div class='uk-grid uk-grid-small'><div class='uk-width-1-1'><div class='copyright'><p><i class='uk-icon-tree'></i> This authentic christmas experience is brought to you by Merijn van Ginkel - Happy holidays! <i class='uk-icon-tree'></i></p></div></div></div>"); 
    $('body').append("<div id='snow'></div><div id='christmasmusic'></div>"); 
    
	//Laad de kerstmuziek
    kerstmuziek = [
        // Hoppetee! Kom maar door met die lekkere nummertjes!
        ["Wham! - Last christmas", "https://isaanhettesten.com/hubl/lastchristmas.mp3"],
        ["Michael Bublé - It's beginning to look a lot like christmas", "https://isaanhettesten.com/hubl/itsbeginningtolookalotlikechristmas.mp3"],
        ["Andy Williams - The most wonderful time of the year", "https://isaanhettesten.com/hubl/mostwonderfultime.mp3"],
        ["Slade - Merry Xmas Everybody", "https://isaanhettesten.com/hubl/slademerrychristmas.mp3"],
        ["Elton John - Step Into Christmas", "https://isaanhettesten.com/hubl/stepintochristmas.mp3"],
        ["Bobby Helms - Jingle Bell Rock", "https://isaanhettesten.com/hubl/jinglebellrock.mp3"],
        ["Paul McCartney - Wonderful Christmas Time", "https://isaanhettesten.com/hubl/wonderfulchristmastime.mp3"],
        ["Queen - Thank God It's Christmas", "https://isaanhettesten.com/hubl/thankgoditschristmas.mp3"],
        ["Wizzard - I Wish It Could Be Christmas Everyday", "https://isaanhettesten.com/hubl/christmaseveryday.mp3"],
        ["Al Green and Annie Lennox - Put a Little Love in Your Heart", "https://isaanhettesten.com/hubl/loveinyourheart.mp3"],
        ["Elvis Presley - Blue Christmas", "https://isaanhettesten.com/hubl/bluechristmas.mp3"],
        ["Jona Lewie - Stop The Cavalry", "https://isaanhettesten.com/hubl/cavalry.mp3"],
        ["Dean Martin - Let It Snow", "https://isaanhettesten.com/hubl/letitsnow.mp3"],
        ["Chris Rea - Driving Home for Christmas", "https://isaanhettesten.com/hubl/drivinghomeforchristmas.mp3"]
    ];
	
	randomnr = Math.floor(Math.random() * 14);
    $('.page-sidebar-menu').append("<li class='nav-item music'><i class='uk-icon-music'></i> <span class='musictitle'>" + kerstmuziek[randomnr][0] + "</span></li>");
    $('#christmasmusic').html("<audio autoplay loop src='" + kerstmuziek[randomnr][1] + "' type='audio/mpeg' ></audio>");    
} else {
    $('body').addClass("hatsekedee");
}
