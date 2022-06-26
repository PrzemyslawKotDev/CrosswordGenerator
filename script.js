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
          button.setAttribute('onclick', 'generateCrossword()');
          button.innerText = 'Generate crossword'

          content.append(button)

    const crosswordContainer = document.createElement('div');
          crosswordContainer.setAttribute('target', 'crossword');
          crosswordContainer.setAttribute('id', 'crosswordContainer');    

          container.append(crosswordContainer);
}

const convertWords = ()=>{
      const words = document.getElementById('crosswordInput');
      let mistake = 0;
      let arrWords = []
      const reg = /^[a-z]/i;
      words.value.split(',').forEach(item => {
            var word = item.replace(',', '').trim();
            if(reg.test(word)){
                  arrWords.push(word);
            } else {
                  mistake++;
            };
      })
      if(mistake > 0){
            alert('Nieprawidłowe znaki!');
      };
      var splitedWords = [];
      arrWords.forEach(word=> splitedWords.push(word.toUpperCase().split('')));
      return splitedWords;
}
const getLongestIndex = (words)=> {
      let length = 0;
      let longestWord = 0;
      let longestIndex = 0;
      words.forEach((item, index)=>{
            if(length < item.length){
                  length = item.length;
                  longestWord = item;
                  longestIndex = index;
            }
      })
      words.splice(longestIndex, 1)
      return longestWord;
}
const generateCrossword = ()=>{
      let wordsArr = convertWords();

      let longestWord = getLongestIndex(wordsArr);

      let secondLongestWord = getLongestIndex(wordsArr);

      const crosswordContainer = document.getElementById('crosswordContainer');
            crosswordContainer.innerText = '';

            const crosswordPlayground = document.createElement('div');
                  crosswordPlayground.setAttribute('target', 'crossword');
                  crosswordPlayground.setAttribute('id', 'crosswordPlayground');    

            crosswordContainer.append(crosswordPlayground);

            buildGrid();
            
            let ids = getIds(longestWord, secondLongestWord)
            console.log(ids)

            let centerIndex = closerToCenter(longestWord, secondLongestWord, ids)
            console.log(centerIndex)
            
}

const buildGrid = ()=>{

      const playground = document.getElementById('crosswordPlayground');

      for (let i=0; i<101; i++){
            const row = document.createElement('div');
                  row.setAttribute('target', 'crossword');
                  row.setAttribute('id', `row${i}`);    
                  row.classList.add('row');

                  playground.append(row);

            for (let j=0; j<101; j++) {
          
                  const letterBox = document.createElement('div');
                        letterBox.setAttribute('target', 'crossword');
                        letterBox.setAttribute('id', `row${i}box${j}`);    
                        //letterBox.classList.add('letterBox');
      
                  row.append(letterBox);
                  
            }   
      }

}

const getIds = (firstWord, secondWord)=>{
      let ids = [];
      for(let i=0; i<secondWord.length; i++){
            firstWord.forEach((item, index)=>{
                  if(item === secondWord[i]){
                        ids.push([item, index, i])
                  }
            })
      }
      return ids
      
}

const closerToCenter = (firstWord, secondWord, ids)=>{
      let firstCenter = (firstWord.length-1)/2
      let secondCenter = (secondWord.length-1)/2
      console.log(firstCenter)
      console.log(secondCenter)
      let centerIndex = 0;
      let firstNumber = 100;
      let secondNumber = 100;
      ids.forEach((item, index)=>{
            let firstRest = Math.abs(firstCenter-item[1]);
            let secondRest = Math.abs(secondCenter-item[2]);
            if(firstRest<firstNumber && secondRest<secondNumber){
                  firstNumber = firstRest;
                  secondNumber = secondRest;
                  centerIndex = index;
            }
            console.log(firstNumber, secondNumber)
      })
      return ids[centerIndex]
}

window.onload = crosswordMenu();