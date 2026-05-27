let notesTitles = ['Italian', 'Japanese', 'Indian'];
let notes = ['Pizza', 'Sushi', 'Curry'];

let trashNotesTitles = [];
let trashNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];

function pushNoteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);

    let trashNotesTitle = trashNotesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNotesTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(trashIndex) {
    trashNotes.splice(trashIndex, 1);
    renderTrashNotes();

}

function saveData() {
    let noteInputRef = document.getElementById('note_input');
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteInput = noteInputRef.value;
    let noteTitle = noteTitleInputRef.value;

     if(noteInputRef.value != "" || noteTitleInputRef.value != "") {
        notes.push(noteInput);
        notesTitles.push(noteTitle)
    }
    saveToLocalStorage();
    renderNotes();
    noteInputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem('myNotes', JSON.stringify(notes));
}

function getFromLocalStorage() {
    const combinedNotes = localStorage.getItem('myNotes');
    let myArray = JSON.parse(combinedNotes)
    if(myArray !== null) {
    notes = myArray 
    }
}

function renderTrashNotes () {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = "";

        for (let trashIndex = 0; trashIndex < trashNotes.length; trashIndex++) {
            trashContentRef.innerHTML += getTrashNoteTemplate(trashIndex);
        }
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function init() {
        getFromLocalStorage();
        renderNotes(); 
}
