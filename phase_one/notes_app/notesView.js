const NotesModel = require("./notesModel");

class NotesView {

    constructor(model) {
        this.model = model;
        this.button = document.querySelector('#add-note-btn')

        this.button.addEventListener('click', () => {
            let note = document.querySelector('#add-note-input')
            model.addNote(note.value)
            this.displayNotes();
        })
    }

    displayNotes() {
        this.model.getNotes().forEach((note) => {
            let div = document.createElement('div');
            div.className = 'note';
            div.append(note);
            document.querySelector('#main-container').append(div);   
        });
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }

}

module.exports = NotesView;