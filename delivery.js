const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const orderButton = document.getElementById("orderButton");

function validateForm() {
    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    
    if (!name || !address) {
        alert("Please fill in both your name and address!");
        return false;
    }
    return true;
}

orderButton.addEventListener("click", function(e) {
    e.preventDefault();  
    if (validateForm()) {
        alert(`Order for ${nameInput.value} has been placed!`);
        nameInput.value = '';
        addressInput.value = '';
    }
});