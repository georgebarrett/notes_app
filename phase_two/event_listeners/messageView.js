class MessageView {
    constructor() {
      this.buttonEl = document.querySelector('#show-message-button');
      this.hideButtonEl = document.querySelector('#hide-message-button');
  
      this.buttonEl.addEventListener('click', () => {
        this.displayMessage();
      });
      this.hideButtonEl.addEventListener('click', () => {
        this.hideMessage();
      });
    }
  
    displayMessage() {
      console.log('Thanks for clicking me!');
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerText = 'Breaking news!';

      document.querySelector('#main-container').append(messageElement);
    }

    hideMessage() {
      let message = document.querySelector('#message');
      message.remove();
    }
  }
  
module.exports = MessageView;