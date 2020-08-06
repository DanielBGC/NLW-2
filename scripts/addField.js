//Select the add-time button and attribute a function to it
document.querySelector(" #add-time").addEventListener("click", addField)

function addField() {
    //Select the fieldContainer and duplicate it
    const fieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    //Select all the inputs from the fieldContainer
    const fields = fieldContainer.querySelectorAll("input")
    
    //Reset all the inputs selected
    fields.forEach(input => {
        input.value = ""
    });

    //Add the fieldContainer to the page
    document.querySelector("#schedule-items").appendChild(fieldContainer)
}