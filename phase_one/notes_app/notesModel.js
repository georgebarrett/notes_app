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
}

module.exports = NotesModel