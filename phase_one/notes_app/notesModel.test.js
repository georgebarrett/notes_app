const NotesModel = require('./notesModel')

describe('NotesModel', () => {

    it('returns an empty list all of notes', () => {
        const notes = new NotesModel();

        expect(notes.getNotes()).toEqual([]); 
    });

})