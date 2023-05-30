/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel')

describe('page view', () => {
    it('check for h1 in html', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        expect(document.querySelectorAll('h1').length).toBe(1);
    });

    it('displays all of the notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const notesModel = new NotesModel();

        notesModel.addNote();
        notesModel.addNote('cut hair');

        const display = new NotesView(notesModel);
    
        display.displayNotes();
    
        expect(document.querySelectorAll('.note').length).toBe(2)
        expect(document.querySelectorAll('.note')[1].textContent).toEqual('cut hair')
    });
})