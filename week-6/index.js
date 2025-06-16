document.getElementById('refresh').addEventListener('click', fetchContacts);
document.getElementById("add-contact").addEventListener("click", AddContacts);

function fetchContacts() {
    fetch(rootPath + "controller/get-contacts/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayOutput(data);
            //console.log(data);
        })
}

function displayOutput(data) {
    let output = "<table>";

    for (a in data) {
        output += `
                <tr>
                <td><img src="${rootPath}controller/uploads/${data[a].avatar}" width="40" /></td>
                <td><h5>${data[a].firstname}</h5></td>
                <td><h5>${data[a].lastname}</h5></td>
                </tr>
            `
    }
    output += "</table>";
    document.getElementById("table").innerHTML = output;
}

function AddContacts() {
    window.open("addContact.html", "_self");
}
document.getElementById("submitform").addEventListener("click", submitform)
document.getElementById("homelink").addEventListener("click", homelink)

function submitform(e) {
    e.preventDefault();
    const form = new FormData(document.querySelector("#editform"));
    form.append("apiKey", apiKey);

    fetch(rootPath + 'controller/insert-contact/', {
        method: 'POST',
        headers: {'Accept': 'application/json, *.*'},
        body: form
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            if (data === "1") {
                alert("Contact successfully added");
                homelink()
            } else {
                alert(data);
                homelink()
            }
        })
}

function homelink() {
    window.open("index.html", "_blank");

}
