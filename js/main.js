$(document).ready(function() {

    /* Variables */
    var $gallery = $('#gallery');
    var $search = $('input');

    /* Key based events */

    //keyup event to run filter function
    $search.on('keyup', function() {
        //store the search input
        var search = $(this).val().toLowerCase();

        // for each gallery item, get the items to filter
        $gallery.children('a').each(function(index, item) {

            //filter based on image caption
            if ($(item).filter('[data-title *= ' + search + ']').length > 0 || search.length < 1) {
                $(item).show().addClass('active');
            } else {
                $(item).hide().removeClass('active');
            }
        });
        //create array from items that are visible
        populateArray();
    });
});