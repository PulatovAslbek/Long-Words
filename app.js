function longestWords(evn) {

    let words = evn.split(' ');
    let maxLength = 0;
    let longWord = ''
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longWord = words[i]
        }
    }
    console.log(longWord)
}

longestWords("Enter your words...") 