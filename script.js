// let notesTitles = ['Italian', 'Japanese', 'Indian'];
// let notes = ['Pizza', 'Sushi', 'Curry'];

// let trashNotesTitles = [];
// let trashNotes = [];

// let archiveNotesTitles = [];
// let archiveNotes = [];

let allNotes = {
    'notesTitles': ['Italian', 'Japanese', 'Indian'],
    'notes': ['Pizza', 'Sushi', 'Curry'],
    'trashNotesTitles': [],
    'trashNotes': [],
    'archiveNotesTitles': [],
    'archiveNotes': [],
}

function moveNote(indexNote, startingKey, destinationKey) {
    let removedNote = allNotes[startingKey].splice(indexNote, 1);
    allNotes[destinationKey].push(removedNote[0]);

    let removedTitle = allNotes[startingKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(removedTitle[0]);

    renderAllNotes();
}

function renderAllNotes() {
    renderNotes();
    renderTrashNotes();
    renderArchivedNotes();
}

// function pushNoteToTrash(indexNote) {
//     let trashNote = notes.splice(indexNote, 1);
//     trashNotes.push(trashNote[0]);

//     let trashNotesTitle = notesTitles.splice(indexNote, 1);
//     trashNotesTitles.push(trashNotesTitle[0]);
//     renderAllNotes();
// }

// function pushNoteToArchive(indexNote) {
//     let removedNote = notes.splice(indexNote, 1);
//     archiveNotes.push(removedNote[0]);

//     let removedTitle = notesTitles.splice(indexNote, 1);
//     archiveNotesTitles.push(removedTitle[0]);

//     renderAllNotes();
// }

function deleteNote(trashIndex) {
    allNotes.trashNotes.splice(trashIndex, 1);
    allNotes.trashNotesTitles.splice(trashIndex, 1);

    renderAllNotes();
}

// function pushTrashToArchive(trashIndex) {
//     let removedNote = trashNotes.splice(trashIndex, 1);
//     archiveNotes.push(removedNote[0]);

//     let removedTitle = trashNotesTitles.splice(trashIndex, 1);
//     archiveNotesTitles.push(removedTitle[0]);

//     renderAllNotes();
// }

// function pushArchiveToTrash(indexArchiveNote) {
//     let removedNote = archiveNotes.splice(indexArchiveNote, 1);
//     trashNotes.push(removedNote[0]);

//     let removedTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
//     trashNotesTitles.push(removedTitle[0]);

//     renderAllNotes();
// }

// function pushArchiveToNote(indexArchiveNote) {
//     let aToNote = archiveNotes.splice(indexArchiveNote, 1);
//     notes.push(aToNote[0]);

//     let aToNoteTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
//     notesTitles.push(aToNoteTitle[0]);

//     renderAllNotes();
// }

function saveData() {
    let noteInputRef = document.getElementById('note_input');
    let noteTitleInputRef = document.getElementById('note_title_input');
    let noteInput = noteInputRef.value;
    let noteTitle = noteTitleInputRef.value;

    if (noteInput == "" || noteTitle == "") {
        return

    }
    allNotes.notes.push(noteInput);
    allNotes.notesTitles.push(noteTitle);
    saveToLocalStorage();
    renderNotes();
    noteInputRef.value = "";
    noteTitleInputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem('myNotes', JSON.stringify(allNotes.notes));
    localStorage.setItem('myTitles', JSON.stringify(allNotes.notesTitles));
}

function getFromLocalStorage() {
    const combinedNotes = localStorage.getItem('myNotes');
    const combinedTitles = localStorage.getItem('myTitles');
    let myNoteArray = JSON.parse(combinedNotes)
    let myTitleArray = JSON.parse(combinedTitles)

    if (myNoteArray !== null && myTitleArray) {
        allNotes.notes = myNoteArray
        allNotes.notesTitles = myTitleArray
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = "";

    for (let trashIndex = 0; trashIndex < allNotes.trashNotes.length; trashIndex++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(trashIndex);
    }
}

function renderArchivedNotes() {
    let archiveContentRef = document.getElementById('archived-content');
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchivedNoteTemplate(indexArchiveNote);
    }
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function init() {
    getFromLocalStorage();
    renderAllNotes();
}
