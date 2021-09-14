const texts = ['Psi,','Macke,','Fereti,','Akselotli,', 'Misevi,'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".ljubimci").textContent = letter;
   
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 600);

        if(count == 5) count = 0;
    }
    else{
        setTimeout(type, 300);
    }
})();