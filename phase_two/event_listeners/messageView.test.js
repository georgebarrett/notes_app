/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('the input is displayed when the button is clicked', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Test message';
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('Test message');
  });

  it('hides the messages when the hide button is clicked', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    
    const buttonEl = document.querySelector('#show-message-button');
    const hideButtonEl = document.querySelector('#hide-message-button');
    
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();

    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});