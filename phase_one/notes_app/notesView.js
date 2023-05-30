const NotesModel = require("./notesModel");

class NotesView {

    constructor(model) {
        this.model = model;
    }

    displayNotes() {
        this.model.getNotes().forEach((note) => {
            const div = document.createElement('div');
            div.className = 'note';
            div.append(note);
            document.querySelector('#main-container').append(div);   
        });
    }

}

module.exports = NotesView;