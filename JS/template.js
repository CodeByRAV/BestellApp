function getNoteTemplate(indexNote) {
    return `
    <div class="note">    
    <p>+ T: ${notesTitles[indexNote]} C: ${notes[indexNote]}<button onclick="pushNoteToTrash(${indexNote});">X</button</p>
    </div>`;
}

function getTrashNoteTemplate(trashIndex) {
    
    return `<div class="note"><p>+ T: ${trashNotesTitles[trashIndex]} C: ${trashNotes[trashIndex]}<button onclick="deleteNote(${trashIndex});">X</button</p>
    </div>`;
}

function getArchivedNoteTemplate(indexArchiveNote) {
return `
<div class="note">
    <h3>${archiveNotesTitles[indexArchiveNote]}</h3>
    <p>${archiveNotes[indexArchiveNote]}</p>
    <div>
    <button onclick="archiveToTrash(${indexArchiveNote})" class="btn">X</button>
    <button onclick="archiveToNote(${indexArchiveNote})" class="btn">N</button>
</div>
`
}