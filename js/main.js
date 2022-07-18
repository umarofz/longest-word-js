var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var inputValue = elInput.value.trim()

    
    function findWord(text, number) {
        var newArray = text.split(" ");
        var longestWord = "";

        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].length > longestWord.length) {
                longestWord = newArray[i];
            }
        }

        return longestWord

    }

    var arrayOfWords = findWord(inputValue)

    console.log(arrayOfWords);
    alert(arrayOfWords)
})