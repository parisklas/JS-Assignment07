// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let empTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = empTable.rows.length;
// empCount.inner.HTML;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.querySelector('#id').value
    let newName = document.querySelector('#name').value
    let newExt = document.querySelector('#extension').value
    let newEmail = document.querySelector('#email').value
    let newDepartment = document.querySelector('#department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = empTable.insertRow(1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDepartment = row.insertCell(4);
    let cellDeleteBtn = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(newId);
    let textName = document.createTextNode(newName);
    let textExt = document.createTextNode(newExt);
    let textEmail = document.createTextNode(newEmail);
    let textDepartment = document.createTextNode(newDepartment);
    cellId.appendChild(textId);
    cellName.appendChild(textName);
    cellExt.appendChild(textExt);
    cellEmail.appendChild(textEmail);
    cellDepartment.appendChild(textDepartment);

    empTable.appendChild(row)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    let textDelete = document.createTextNode('X');
    cellDeleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    cellDeleteBtn.appendChild(textDelete);
    empTable.appendChild(deleteBtn);

    // textDelete.addEventListener('click')



    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX (use focus method) - .focus() on the text box
    document.getElementById('id').focus(); // not working for some reason.

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    // for (var i=0; i < rowCount; i++)

});

// DELETE EMPLOYEE // STUCK HERE!!

let tr = document.getElementById('employees');
deleteBtn.addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete Employee?')) {
        empTable.deleteRow(e.target.removeChild(tr).rowIndex);
    }


})