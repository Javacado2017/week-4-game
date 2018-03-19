$(function(){
    
    targetSummation();
    createObjects();
    displayImages();
    

    gameOn ();







 
});    





//Function to generate a random target summation beween 20 and 50, display on screen
function targetSummation() {
    $('#targetSummation').text(Math.floor(Math.random() * 31)+20);
};

//Variable to define the number of images in the image folder, the naming of the images is consecutive so I don't need to write it all out
var images = 5

//Function to to create an array of objects that defines the "link" to the image and a value between 1 and 10 for each image 
var numberValue = []
var imageArray = [];

function createObjects() {
        
    for (i=0; i < images; i++)
    imageArray.push({
        link: 'assets/images/image'+[i+1]+'.png', 
        value: numberValue.push(Math.floor(Math.random() * 10)+1)
    });

};

//Function to display the images on the screen, CSS added to display images inline
function displayImages() {

    for (i=0; i < images; i++)
    $('#displayImages').addClass('displayInline').append('<div><img src=' + imageArray[i].link + ' width=75px></div>');

};


//Variable to define starting value of the number of games won, display on screen 
var gamesWon = 0
$('#gamesWon').text(gamesWon);

//Variable to define starting value of the number of games lost, display on screen 
var gamesLost = 0
$('#gamesLost').text(gamesLost);

//Variable to define starting value of the current summation, display on screen 
var currentSummation = 0
$('#currentSummation').text(currentSummation);

//Function that sets the main conditions of the game .... 
function gameOn () {

//Function to add the hidden values to the current summation when an image is clicked 
  $('img').click(function() {
    console.log('I have been clicked');
});




//If/Else statments 






};








