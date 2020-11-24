function myFunction(word,letter) {
    let change='';
for (let i = 0; i < word.length; i++) {
    const selected = word[i];

    if (selected!==letter) {
        change+=selected;
    }

    
}
if (letter.length>1) {
return 'bir herf olamlidi!'
} else {
    return change
}

}


console.log(myFunction('salam','a'));