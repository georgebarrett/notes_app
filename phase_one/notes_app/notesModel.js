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
}

module.exports = NotesModel