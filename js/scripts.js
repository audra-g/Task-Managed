$(function () {
  
    $("#addNewTaskBtn").on("click", function () {
      $("#addNewTask").modal("show");
    });
  
  }); 

  function newElement() {
    const input = $('#newTask').val();
    const details = $('#details').val();
    const date = $('#date').val();
    const status = $('#status').val();

    if (input === "") {
        alert("You must enter a task!");
    } else {
        const table = $('#taskTable');
        const newRow = table[0].insertRow(-1);

        const cell1 = newRow.insertCell(0);
        cell1.innerHTML = input;

        const cell2 = newRow.insertCell(1);
        cell2.innerHTML = details;

        const cell3 = newRow.insertCell(2);
        cell3.innerHTML = date;

        const cell4 = newRow.insertCell(3);
        cell4.innerHTML = status;

        const cell5 = newRow.insertCell(4);
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("btn", "btn-primary"); 
        editBtn.onclick = function () {
            const currentInput = cell1.innerHTML;
            const currentDetails = cell2.innerHTML;
            const currentDate = cell3.innerHTML;
            const currentStatus = cell4.innerHTML;

            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = currentInput;
            cell1.innerHTML = "";
            cell1.appendChild(inputField);

            const detailsField = document.createElement("input");
            detailsField.type = "text";
            detailsField.value = currentDetails;
            cell2.innerHTML = "";
            cell2.appendChild(detailsField);

            const dateField = document.createElement("input");
            dateField.type = "date";
            dateField.value = currentDate;
            cell3.innerHTML = "";
            cell3.appendChild(dateField);

            const statusField = document.createElement("select");
            const options = ["To Do", "In Progress", "Completed","On Hold"];
            options.forEach(function(option) {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.text = option;
                if (option === currentStatus) {
                    optionElement.selected = true;
                }
                statusField.appendChild(optionElement);
            });
            cell4.innerHTML = "";
            cell4.appendChild(statusField);
            
            const saveBtn = document.createElement("button");
            saveBtn.innerHTML = "Save";
            saveBtn.classList.add("btn","btn-warning");
            saveBtn.onclick = function () {
                cell1.innerHTML = inputField.value;
                cell2.innerHTML = detailsField.value;
                cell3.innerHTML = dateField.value;
                cell4.innerHTML = statusField.value;
                cell5.innerHTML = "";
                cell5.appendChild(editBtn);
            };
            cell5.innerHTML = "";
            cell5.appendChild(saveBtn);

            const cancelBtn = document.createElement("button");
            cancelBtn.innerHTML = "Cancel";
            cancelBtn.classList.add("btn","btn-secondary");
            cancelBtn.onclick = function () {
                cell1.innerHTML = currentInput;
                cell2.innerHTML = currentDetails;
                cell3.innerHTML = currentDate;
                cell4.innerHTML = currentStatus;
                cell5.innerHTML = "";
                cell5.appendChild(editBtn);
            };
            cell5.appendChild(cancelBtn);
        };
        cell5.appendChild(editBtn);

        const cell6 = newRow.insertCell(5);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("btn", "btn-danger"); 
        deleteBtn.onclick = function () {
            if (confirm("Are you sure you want to delete this task?")) {
                table[0].deleteRow(newRow.rowIndex);
            }
        };
        cell6.appendChild(deleteBtn);

        $('#addNewTask').modal('hide');
    }
}

