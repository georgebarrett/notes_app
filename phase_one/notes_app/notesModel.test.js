const NotesModel = require('./notesModel')

describe('NotesModel', () => {

    it('returns an empty list all of notes', () => {
        const notes = new NotesModel();

        expect(notes.getNotes()).toEqual([]); 
    });

    it('adds a note to the notes array', () => {
        const notes = new NotesModel();

        notes.addNote('buy floss')
        expect(notes.getNotes()).toEqual(['buy floss']);
    })

})