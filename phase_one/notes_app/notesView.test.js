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
        const display = new NotesView(notesModel);

        notesModel.addNote();
        notesModel.addNote('cut hair');

        display.displayNotes();
    
        expect(document.querySelectorAll('.note').length).toBe(2)
        expect(document.querySelectorAll('.note')[1].textContent).toEqual('cut hair')
    });

    it('adds a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView();

        const input = document.querySelector('#add-note-input');
        input.value = 'NOTE'

        const button = document.querySelector('#add-note-btn');
        button.click();

        expect(document.querySelectorAll('div.note').length).toEqual(1)
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('NOTE')
    });
})