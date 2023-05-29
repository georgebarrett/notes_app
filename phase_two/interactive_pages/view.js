class View {
    constructor() {
      this.mainContainerEl = document.querySelector('#main-container');
  
      console.log(this.mainContainerEl);
    }

    addParagraph() {
        const newParapraph = document.createElement('p');
        newParapraph.innerText = 'BARBICAN';
        this.mainContainerEl.append(newParapraph);
    }
  }
  
  module.exports = View;