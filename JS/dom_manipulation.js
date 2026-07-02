function openDialog(event) {
const dialogRef = document.getElementById("orderInProgress");
if (dialogRef) {
        dialogRef.showModal();
        dialogRef.classList.add("dialog-opened");
    }
    event.stopPropagation()
}

function closeDialog(event) {
const dialogRef = document.getElementById("orderInProgress");
if (dialogRef) {
        dialogRef.close();
        dialogRef.classList.remove("dialog-opened");
    }
    event.stopPropagation()
}

function stopProp(event){
    event.stopPropagation()
}