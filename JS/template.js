function getNoteTemplate(indexNote) {
    return `<p>+ T:${notesTitles[indexNote]} : ${notes[indexNote]}<button onclick="pushNoteToTrash(${indexNote});">X</button</p>`;
}

function getTrashNoteTemplate(trashIndex) {
    return `<p>+ T:${trashNotes[trashIndex]} : ${trashNotes[trashIndex]}<button onclick="deleteNote(${trashIndex});">X</button</p>`;
}

function getArchivedNoteTemplate(indexArchiveNote)
return `
<div class="note">
    <h3>${archiveNotesTitles[indexArchiveNote]}</h3>
    <p>${archiveNotes[indexArchiveNote]}</p>
    <div>
    <button onclick="archiveToTrash(${indexArchiveNote})" class="btn">X</button>
    <button onclick="archiveToNote(${indexArchiveNote})" class="btn">N</button>
    </div>
`