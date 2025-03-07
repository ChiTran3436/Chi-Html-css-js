$(document).ready(function () {

    //get local
    data = getDataLocal()
    showData(data);

    ELEMENT_BTN_GO.click(function (e) {
        let keyword = ELEMENT_TASK_KEYWORK.val();
        let newData = data.filter(e => {
            return e.taskName.toUpperCase().includes(keyword.toUpperCase());
        })

        showData(newData, keyword);

    })
    ELEMENT_TASK_KEYWORK.on("input", function () {
        let keyword = ELEMENT_TASK_KEYWORK.val().trim();

        let newData = data.filter(e => {
            return e.taskName.toUpperCase().includes(keyword.toUpperCase());
        });

        showData(newData, keyword);
    })

    ELEMENT_SORT.change(function (e) {
        let sortType = $(this).val();
        let name = "";
        switch (sortType) {
            case "2":
                name = "Name - DESC"
                data.sort((a, b) => b.taskName.localeCompare(a.taskName));
                break;
            case "3":
                name = "Level - ASC"
                data.sort((a, b) => a.taskLevel.localeCompare(b.taskLevel));
                break;
            case "4":
                name = "Level - DESC"
                data.sort((a, b) => b.taskLevel.localeCompare(a.taskLevel));
                break;

            default:
                name = "Name - ASC"
                data.sort((a, b) => a.taskName.localeCompare(b.taskName));
                break;
        }
        $('.btn-asc').html(name);
        showData(data);

    });

    ELEMENT_BTN_ADD.click(function (e) {
        toggleForm()
    });

    ELEMENT_BTN_SUBMIT.click(function (e) {
        e.preventDefault();

        let taskId = ELEMENT_TASK_ID.val();
        let taskName = ELEMENT_TASK_NAME.val();
        let taskLevel = ELEMENT_TASK_LEVEL.val();

        if (!taskName || !taskLevel) {
            alert('vui long dien day du')
            return
        }


        taskId ? editForm(taskId, taskName, taskLevel) : addForm(taskName, taskLevel)
        showData(data);
        clearForm()

        saveDataLocal()


    });


    ELEMENT_BTN_CANCEL.click(function (e) {
        clearForm()
    });



});


const handleDelete = (id) => {

    myConfirm()

    data = data.filter(task => {
        return task.id != id;
    })
    showData(data)
    saveDataLocal()
}



const handleEdit = (id) => {

    let task = data.find(x => x.id == id);

    if (task) {
        ELEMENT_TASK_ID.val(task.id);
        ELEMENT_TASK_NAME.val(task.taskName);
        ELEMENT_TASK_LEVEL.val(task.taskLevel);
    }
}


