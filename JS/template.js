function getNoteTemplate(indexNote) {
    return `
    <div class="note">    
    <h3> ${notesTitles[indexNote]}</h3>
    <p><button onclick="pushNoteToTrash(${indexNote}); class="btn"">X</button</p>
    </div>`;
}

function getTrashNoteTemplate(trashIndex) {
    return `
    <div class="note">
    <h3>${trashNotesTitles[trashIndex]}</h3>
    <p>${trashNotes[trashIndex]}<button onclick="deleteNote(${trashIndex}); class="btn"">X</button</p>
    </div>`;
}

function getArchivedNoteTemplate(indexArchiveNote) {
return `
<div class="note">
    <h3>${archiveNotesTitles[indexArchiveNote]}</h3>
    <p>${archiveNotes[indexArchiveNote]}</p>
    <div>
    <button onclick="pushArchiveToTrash(${indexArchiveNote})" class="btn">X</button>
    <button onclick="pushArchiveToNote(${indexArchiveNote})" class="btn">N</button>
</div>
`
}