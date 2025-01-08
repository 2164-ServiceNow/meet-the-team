function initializeTable() {
    if (localStorage.table) {
        document.getElementById("hobbyTable").innerHTML = localStorage.table;
    }
}
document.getElementById("hobbyTable").onload = initializeTable();

document.getElementById("pressButton").addEventListener("click", function () {
    alert("Hello World! It's " + new Date());
});

let newText = document.createElement("h4");
newText.appendChild(document.createTextNode("Javascript is running!"));
mark = document.getElementById("from").nextSibling;
mark.parentNode.insertBefore(newText, mark);

//let form = document.getElementById("hobbyForm");

document.getElementById("hobbyForm").addEventListener("submit", function() {
    event.preventDefault();
    let name = document.getElementById("hobbyName").value;
    let age = document.getElementById("hobbyAge").value;
    let like = document.getElementById("hobbyLike").value;
    let confirm = document.getElementById("hobbyConfirm").checked;
    let pass = document.getElementById("hobbyPass").value;
    if (pass === "123") {
        if (confirm) {
            if (name === "") {
                alert("Hobby name cannot be empty.");
            } else if (name.length > 20) {
                alert ("Hobby name can't be longer than 20 characters.");
            } else if (isNaN(age) || isNaN(parseFloat(age))) {
                alert("Hobby age must be a number.");
            } else if (like === "") {
                alert("Hobby like cannot be empty.");
            } else {
                let newHtml =   "<tr>" + 
                                    "<td>" + name  + "</td>" +
                                    "<td>" + age  + "</td>" +
                                    "<td>" + like  + "</td>" +
                                "</tr>";
                let table = document.getElementById("hobbyTable");
                table.innerHTML += newHtml;
                localStorage.table = table.innerHTML;
            }
        } else {
            alert("Confirm intent!");
        }
    } else {
        alert("Wrong password!!!");
    }
    return false;
});

let pic = document.getElementById("wolfPicture");
pic.addEventListener("mouseout", function () {
    pic.src = "./images/lee-eaton-image2.jpg";
});