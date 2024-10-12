// get model element
const modal = document.getElementById("myModal")

// Get buttons
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtnModalBtn = document.getElementById("closeModalBtn")
const alertBtnBtn = document.getElementById("alertBtn")

// Open modal on button click
openModalBtn.onclick = function() {
    if (event.target === modal) {
        modal.style.display = "none";
}
    }

    // Show alert on utton click
    alertBtn.oneclick = function() {
        alert("GET OUT!!")
    }
    