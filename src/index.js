document.addEventListener("DOMContentLoaded", function () {
  var options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Prague",
  };

  var currentDate = new Date().toLocaleDateString("cs-CZ", options);

  var dateSpan = document.querySelector(".hero__additional-info--date");
  dateSpan.innerHTML += " " + currentDate;
});

function toggleDropdown() {
  let dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (event) {
  let isClickInside = document
    .getElementById("dropdownContent")
    .contains(event.target);
  let isInputField = event.target.id === "selectFuels";

  if (!isClickInside && !isInputField) {
    document.getElementById("dropdownContent").style.display = "none";
  }
});

document
  .getElementById("dropdownContent")
  .addEventListener("change", function () {});

function continueClicked() {
  let checkboxes = document.querySelectorAll(
    "#dropdownContent input[type='checkbox']:checked"
  );
  let selectedItems = "";
  let maxDisplay = 2;

  checkboxes.forEach(function (checkbox, index) {
    if (index < maxDisplay) {
      selectedItems += checkbox.value + ", ";
    }
  });

  if (checkboxes.length > maxDisplay) {
    selectedItems += "...";
  } else {
    selectedItems = selectedItems.slice(0, -2);
  }

  document.getElementById("selectFuels").value = selectedItems;
  document.getElementById("selectFuels").style.backgroundColor =
    checkboxes.length > 0 ? "#8FB995" : "white";
  toggleDropdown();
}
