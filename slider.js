  $(document).ready(function(){
    var slideWidth = $('.image').width();
    var firstRow = $('.imageList').eq(0); // First row of images
    var secondRow = $('.imageList').eq(1); // Second row of images

    // Initialize the alignment flag as false (left-aligned)
    var isAlignedRight = false;

    $('#next').click(function(event) {
        shiftSlide(event, -1);
    });

    $('#prev').click(function(event) {
        shiftSlide(event, 1);
    });

    function shiftSlide(event, direction) {
        // Toggle alignment based on direction
        isAlignedRight = direction === -1 ? true : false;

        // Set the alignment based on the flag
        if (isAlignedRight) {
            firstRow.addClass('transition').css('justify-content', 'flex-end');
            secondRow.addClass('transition').css('justify-content', 'flex-end');
        } else {
            firstRow.addClass('transition').css('justify-content', 'flex-start');
            secondRow.addClass('transition').css('justify-content', 'flex-start');
        }

        // Move both rows by width of one image
        firstRow.addClass('transition').css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
        secondRow.addClass('transition').css('transform', 'translateX(' + (direction * slideWidth) + 'px)');

        setTimeout(function() {
            if (direction === 1) {
                // Move the first image from the row to the end of the row
                firstRow.find('.image:first').before(firstRow.find('.image:last'));
                secondRow.find('.image:first').before(secondRow.find('.image:last'));
            } else if (direction === -1) {
                // Move the last image from the row to the start of the row
                firstRow.find('.image:last').after(firstRow.find('.image:first'));
                secondRow.find('.image:last').after(secondRow.find('.image:first'));
            }

            // Remove the transition and set the transformation to its initial value
            firstRow.removeClass('transition').css('transform', 'translateX(0px)');
            secondRow.removeClass('transition').css('transform', 'translateX(0px)');
        }, 700);
    }
});