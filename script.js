function crosswordMenu(){

  const container = document.getElementById('container');

  const content = document.createElement('div');
        content.setAttribute('target', 'crossword');
        content.setAttribute('id', 'crosswordContent');
        content.innerText = '';

        container.append(content);

    const title = document.createElement('div');
          title.setAttribute('target', 'crossword');    
          title.setAttribute('id', 'crosswordTitle');
          title.innerText = 'Crossword';

          content.append(title);

    const wordsInput = document.createElement('input');
          wordsInput.setAttribute('target', 'crossword');
          wordsInput.setAttribute('id', 'crosswordInput');
          wordsInput.setAttribute('placeholder', 'Wpisz słowa oddzielając je przecinkiem');

          content.append(wordsInput);

    const button = document.createElement('button');
          button.setAttribute('target', 'crossword');
          button.setAttribute('id', 'crosswordButton');
          button.setAttribute('onclick', 'convertWords()');
          button.innerText = 'Generate crossword'

          content.append(button)
}

function convertWords(){
      
}



window.onload = crosswordMenu();