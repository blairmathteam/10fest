var removeButton = document.getElementById("remove");
var onButtonClick = function() {
    removeButton.parentNode.removeChild(removeButton);
};
removeButton.addEventListener("click", onButtonClick);