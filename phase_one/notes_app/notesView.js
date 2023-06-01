const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');

class NotesView {

    constructor(model, client) {
        this.model = model;
        this.client = client;
        this.button = document.querySelector('#add-note-btn');

        this.button.addEventListener('click', () => {
            let note = document.querySelector('#add-note-input')
            if (note.value.length > 0) {
                model.addNote(note.value)
                this.displayNotes();
                model.deleteNotes();
            }
        })
    }

    displayNotes() {
        this.model.getNotes().forEach((note) => {
            let div = document.createElement('div');
            div.className = 'note';
            div.append(note);
            document.querySelector('#main-container').append(div); 
            document.querySelector('#add-note-input').value = ''; 
        });
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }

    displayNotesFromApi(callback) {
        this.client.loadNotes((noteData) => {
            this.model.setNotes(noteData)
            this.displayNotes()
            callback()
        });        
    }
}

module.exports = NotesView;

