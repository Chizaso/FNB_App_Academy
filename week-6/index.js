document.getElementById('refresh').addEventListener('click', fetchContacts);
document.getElementById("addContact").addEventListener("click", AddContacts);

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

    for (let a in data) {
        output += `
                <tr onclick="editContact(${data[a].id})">
                <td><img src="${rootPath}controller/uploads/${data[a].avatar}" width="40"  alt="my avatar"/></td>
                <td><h5>${data[a].firstname}</h5></td>
                <td><h5>${data[a].lastname}</h5></td>
                </tr>
            `
    }
    output += "</table>";
    document.getElementById("table").innerHTML = output;

}

// Adding Contacts
function AddContacts() {
    window.open("addContact.html", "_self");
}

document.getElementById("submitForm").addEventListener("click", submitForm)
document.getElementById("homeLink").addEventListener("click", homeLink)

function submitForm(e) {
    e.preventDefault();
    const form = new FormData(document.querySelector("#editForm"));
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

function homeLink() {
    window.open("index.html", "_blank");

}

function editContact(id) {
    window.open("edit-contacts.html? id=" + id, "_self");
}

