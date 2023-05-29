const NotesModel = require('./notesModel');

const note = new NotesModel();

note.addNote('buy floss')

console.log(note.getNotes());