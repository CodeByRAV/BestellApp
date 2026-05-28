function getNoteTemplate(indexNote) {
    return `
    <div class="note">    
        <h3> ${allNotes.notesTitles[indexNote]}</h3>
        <p>${allNotes.notes[indexNote]}</p>
        <div>
            <button onclick="moveNote(${indexNote},'notes','trashNotes');" class="btn">X</button> 
            <button onclick="moveNote(${indexNote},'notes','archiveNotes');" class="btn">A</button>
        </div>
    </div>`;
}

function getTrashNoteTemplate(trashIndex) {
    return `
    <div class="note">
        <h3>${allNotes.trashNotesTitles[trashIndex]}</h3>
        <p>${allNotes.trashNotes[trashIndex]}</p>
        <div>
            <button onclick="deleteNote(${trashIndex});" class="btn">X</button>
            <button onclick="moveNote(${trashIndex},'trashNotes','archiveNotes');" class="btn">A</button>
        </div>
    </div>`;
}

function getArchivedNoteTemplate(indexArchiveNote) {
return `
    <div class="note">
        <h3>${allNotes.archiveNotesTitles[indexArchiveNote]}</h3>
        <p>${allNotes.archiveNotes[indexArchiveNote]}</p>
        <div>
            <button onclick="moveNote(${indexArchiveNote},'archiveNotes','trashNotes');" class="btn">X</button>
            <button onclick="moveNote(${indexArchiveNote},'archiveNotes','notes');" class="btn">N</button>
        </div>
    </div>
`
}