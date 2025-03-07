
const toggleForm = () => {
    if (isOpenForm) {
        ELEMENT_FORM.addClass('hidden');
        ELEMENT_BTN_ADD.css('background', 'red').html('ADD');
    } else {
        ELEMENT_FORM.removeClass('hidden');
        ELEMENT_BTN_ADD.css('background', 'blue').html('CLOSE');
    }
    clearForm();
    isOpenForm = !isOpenForm;
};

const clearForm = () => {
    ELEMENT_TASK_ID.val("");
    ELEMENT_TASK_NAME.val("");
    ELEMENT_TASK_LEVEL.val("default");
}
function generateRandomId(length = 10) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const handleRenderLevelClass = (level) => {
    let levelClass = 'small'
    switch (level) {
        case "Normal":
            levelClass = 'normal'
            break;
        case "High":
            levelClass = 'high'
            break;

    }
    return `level-${levelClass}`
}


function showData(data, keyword = "") {
    let shtml = "";
    data.map((e, i) => {
        let taskName = e.taskName;

        if (keyword !== "") {
            let regex = new RegExp(`(${keyword})`, "gi");
            taskName = taskName.replace(regex, `<span class="highlight">$1</span>`);
        }
        shtml += ` <tr>
                <td>${i + 1}</td>
                <td>${taskName}</td> 
                <td><span class="${handleRenderLevelClass(e.taskLevel)}">${e.taskLevel}</span></td>
                <td>
                    <button onclick="handleEdit('${e.id}')" class="btn-edit">EDIT</button>
                    <button onclick="handleDelete('${e.id}')" class="btn-delete">DELETE</button>
                </td>
            </tr> `
    })

    $(ELEMENT_BODY).html(shtml);
}


const addForm = (name, level) => {
    let task = {
        id: generateRandomId(),
        taskName: name,
        taskLevel: level,
    };
    data.push(task);
}
const editForm = (id, name, level) => {
    let task = data.find(x => x.id == id);
    if (task) {
        task.taskName = name;
        task.taskLevel = level;
    }
}

function myConfirm() {
    var result = confirm("Want to delete?");
    if (result == true) {
        return true;
    } else {
        return false;
    }
}
// Lưu data duoi localstorage
const saveDataLocal = () => {
    localStorage.setItem("todolist", JSON.stringify(data))
}
// Lấy data duoi localstorage
const getDataLocal = () => {
    let stringData = localStorage.getItem("todolist")
    if (stringData == null) {
        return []
    } else {
        return JSON.parse(stringData)
    }
}


