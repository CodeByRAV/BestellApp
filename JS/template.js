function getNoteTemplate(indexNote) {
    return `<p>+ T:${notesTitles[indexNote]} : ${notes[indexNote]}<button onclick="pushNoteToTrash(${indexNote});">X</button</p>`;
}

function getTrashNoteTemplate(trashIndex) {
    return `<p>+ T:${trashNotes[trashIndex]} : ${trashNotes[trashIndex]}<button onclick="deleteNote(${trashIndex});">X</button</p>`;
}