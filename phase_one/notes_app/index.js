const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const note = new NotesModel();

note.addNote('buy floss')

console.log(note.getNotes());