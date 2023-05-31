const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

const model = new NotesModel();
// model.addNote('practice cartwheels');

const view = new NotesView(model);
// view.displayNotes();