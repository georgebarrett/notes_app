class NotesModel {

    constructor() {
        this.notes = [];
    }

    getNotes() {
        return this.notes;
    }

    addNote(title) {
        this.notes.push(title);
    }

    deleteNotes() {
        this.notes = []
    }

    setNotes(noteData) {
        noteData.forEach((note) => {
            this.notes.push(note)
        });
    }
}

module.exports = NotesModel