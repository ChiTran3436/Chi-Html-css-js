$(document).ready(function () {
    const ELEMENT_CONTENT = $(".content");

    let data = {
        color: 'black',
        background: '#004080',
        fontsize: '16px',
        lineHeight: 'normal',
        textAlign: 'left',
    };

    const main = () => {

        if (localStorage.getItem('data') != "undefined" && localStorage.getItem('data')) {
            data = JSON.parse(localStorage.getItem('data')) // ép dạng string về dạng ban đầu
        }

        // data = JSON.stringify(localStorage.getItem('data')) // ép thành chuổi string

        ELEMENT_CONTENT.css('color', data['color']);
        ELEMENT_CONTENT.css('background-color', data['background']);
        ELEMENT_CONTENT.css('font-size', data['fontsize']);
        ELEMENT_CONTENT.css('text-align', data['textAlign']);
        ELEMENT_CONTENT.css('line-Height', data['lineHeight']);
    }
    main()

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(data))
    }



    $('.btn-decrease').click(function (e) {
        let size = parseInt(ELEMENT_CONTENT.css("font-size")) || 16;
        size -= 2;
        ELEMENT_CONTENT.css("font-size", size + "px");
        data['fontsize'] = size
        saveData()
    });

    $('.btn-increase').click(function (e) {
        let size = parseInt(ELEMENT_CONTENT.css("font-size")) || 16;
        size += 2;
        ELEMENT_CONTENT.css("font-size", size + "px");
        data['fontsize'] = size
        saveData()
    });

    $('#line-space').click(function (e) {
        let lineHeight = $(this).val();
        ELEMENT_CONTENT.css('line-Height', lineHeight);
        $('label[for="line-space"]').text(`Cách Dòng (${lineHeight})`);
        data['line-Height'] = lineHeight
        saveData()
    });

    $('#alignment').click(function (e) {
        let alignment = $(this).val();
        ELEMENT_CONTENT.css('text-align', alignment);
        data['text-align'] = alignment
        saveData()
    });

    $('.btn-color').click(function (e) {
        let color = $(this).css('background-color');
        ELEMENT_CONTENT.css('background-color', color);
        data['background-color'] = color
        saveData()
    });

    $('#text-color').change(function (e) {
        let value = $(this).val();
        ELEMENT_CONTENT.css('color', value);
        data['color'] = value
        saveData()
    });
});

