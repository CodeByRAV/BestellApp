let notesTitles = ['Italian', 'Japanese', 'Indian'];
let notes = ['Pizza', 'Sushi', 'Curry'];
let trashNotesTitles = [];
let trashNotes = [];

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
    let noteInput = noteInputRef.value;

     if(noteInputRef.value != "") {
        notes.push(noteInput);
    }
    renderNotes();
    noteInputRef.value = "";
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
