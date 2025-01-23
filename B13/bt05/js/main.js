$(document).ready(function () {



    ELEMENT_BTN_ADD.click(function (e) {
        toggleForm()
    });

    ELEMENT_BTN_SUBMIT.click(function (e) {
        e.preventDefault();

        let taskName = ELEMENT_TASK_NAME.val();
        let taskLevel = ELEMENT_TASK_LEVEL.val();

        let task = {
            // random id
            // id: randomId(),
            taskName,
            taskLevel
        }

        data.push(task)

        console.log(data);

    });





});



