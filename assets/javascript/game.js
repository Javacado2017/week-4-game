   $(function(){
   
   //Function to generate a random target summation beween 20 and 50, then display it on screen
    var targetSummation 

    function summationTarget() {
        targetSummation = Math.floor(Math.random() * 31)+20;
        $('#targetSummation').text(targetSummation);
    };

    //Variable to define the number of images in the image folder, the naming of the images is 
    //consecutive (eliminates having to write multiple the directories)
    var images = 5

    //Function to create an array of objects that defines the "link" to the image 
    //and sets a value between 1 and 10 for each image
    var imageArray = [];

    function createObjects() {
        
        //Clears the array before anything happens (for when a new game starts)
        imageArray.length = 0

        for (i=0; i < images; i++)
        imageArray.push({
            link: 'assets/images/image'+[i+1]+'.png', 
            value: Math.floor(Math.random() * 15)+1
        });

        //This just sets one of the values to 1 to make a win achieveable regardless 
        var oneValue = Math.floor(Math.random()*images)
        imageArray[oneValue].value = 1

    };

    //Function to display the images on the screen and set a data position to each image 
    //for reference later, CSS added to display images inline
    function displayImages() {

        //Clears the hmtl before anything happens (for when a new game starts)
        $('#displayImages').html('');

        for (i=0; i < images; i++)
        $('#displayImages').addClass('displayInline').append('<img data-position="'+i+'" src=' + imageArray[i].link + ' width=75px>');

    };

    //Variable to define starting value of the current summation,then display it on screen 
    var currentSummation = 0

    function summationCurrent(){
        currentSummation = 0
        $('#currentSummation').text(currentSummation);
    };
    
    //Variable to define starting value of the number of games won, the display it on screen 
    var gamesWon = 0
    $('#gamesWon').text(gamesWon);

    //Variable to define starting value of the number of games lost, then display it on screen 
    var gamesLost = 0
    $('#gamesLost').text(gamesLost);
    
    //Function that sets the main conditions of the game
    function gameClick() {
 
        $('img').click(function() {

            //Relates the index of the photo to the values in the object array made earlier
            var position = $(this).attr('data-position')
            currentSummation = imageArray[position].value + currentSummation
            $('#currentSummation').text(currentSummation);

            //Condition for a win
            if (currentSummation === targetSummation){
                gamesWon++;
                $('#gamesWon').text(gamesWon);
                alert('You won!');
                iconCollector();
            }

            //Condition for a loss
            else if (currentSummation > targetSummation) {
                gamesLost++;
                $('#gamesLost').text(gamesLost);
                alert('You lost!'); 
                iconCollector();
            }

         });
    };

    //Heart of the game
    function iconCollector(){
        summationTarget();
        createObjects();
        displayImages();
        summationCurrent();
        gameClick();
    };

    iconCollector();

});