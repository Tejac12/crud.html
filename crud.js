function addTask() {
    let inputData = document.getElementById("enterData")
    let inputvalueData = inputData.value.trim()
    let alltaskContainer = document.querySelector("#tasks")
    let liTag = document.createElement("li")
    liTag.innerHTML = `${inputvalueData} <button class="edit">edit</button>
    <button class="dlte">delete</button>`

    liTag.style.listStyle = "none"

    alltaskContainer.appendChild(liTag)
    let editBtn = document.querySelector(".edit")
    editBtn.style.backgroundColor = "pink"
    let dlteBtn = document.querySelector(".dlte")
    dlteBtn.style.backgroundColor = "red"

    inputData = " "

    dlteBtn.addEventListener("click", function a() {
        deleteTask(liTag)
        console.log("df is called")
    })
    editBtn.addEventListener("click", () => {
        editTask(liTag)

    })
}

function deleteTask(liTag) {
    let a = confirm("are you sure for deletion the task")
    if (a) {
        liTag.remove()
    }
}
function editTask(k) {
    let x = prompt("enter the data", k.firstChild.textcontent)
    if (x !== null && x.trim() !== "") {
        k.firstChild.textcontent = x;
    }
}



