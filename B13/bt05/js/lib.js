
const toggleForm = () => {
    if (isOpenForm) {
        ELEMENT_FORM.addClass('hidden');
        $(this).css('background', 'red').html('ADD');
    } else {
        ELEMENT_FORM.removeClass('hidden');
        $(this).css('background', 'blue').html('CLOSE');

    }
    isOpenForm = !isOpenForm;
}


// create func random
// => 1231289312736912376