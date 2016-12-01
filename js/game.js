function clickAtButton(cellIndex) {
    document.getElementById(cellIndex.id).innerHTML = "X";
};

document.getElementById(cellIndex.id).onclick = clickAtButton;