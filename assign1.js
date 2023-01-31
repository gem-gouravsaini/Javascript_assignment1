(function () {

    let table = document.createElement("table");


    let personalInfo = [
        { name: "Gourav Saini", age: 22, dob: "1999-01-01", email: "gouravsaini@email.com", company: "ABC" },
        { name: "Rahul Singh", age: 28, dob: "1992-03-10", email: "rahulsingh@email.com", company: "XYZ" },
        { name: "Mansi Gupta", age: 21, dob: "1998-04-25", email: "mansigupta@email.com", company: "DEF" },
        { name: "Gautam Arora", age: 25, dob: "1995-11-09", email: "gautamarora@email.com", company: "MNO" },
        { name: "Priya Singh", age: 24, dob: "1992-06-28", email: "priyasingh@email.com", company: "PQR" },

    ];


    for (let i = 0; i < personalInfo.length; i++) {
        let info = personalInfo[i];

        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        let name = document.createElement("b");
        name.textContent = "Name: ";
        nameCell.appendChild(name);
        nameCell.appendChild(document.createTextNode(info.name));

        let ageCell = document.createElement("td");
        let age = document.createElement("b");
        age.textContent = "Age: ";
        ageCell.appendChild(age);
        ageCell.appendChild(document.createTextNode(info.age));

        let dobCell = document.createElement("td");
        let dob = document.createElement("b");
        dob.textContent = "DOB: ";
        dobCell.appendChild(dob);
        dobCell.appendChild(document.createTextNode(info.dob));

        let emailCell = document.createElement("td");
        let email = document.createElement("b");
        email.textContent = "Email: ";
        emailCell.appendChild(email);
        emailCell.appendChild(document.createTextNode(info.email));

        let companyCell = document.createElement("td");
        let company = document.createElement("b");
        company.textContent = "Company: ";
        companyCell.appendChild(company);
        companyCell.appendChild(document.createTextNode(info.company));

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(dobCell);
        row.appendChild(emailCell);
        row.appendChild(companyCell);

        table.appendChild(row);
    }

    document.body.appendChild(table);
})();
