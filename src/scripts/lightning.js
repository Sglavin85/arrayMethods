let $textBox = document.querySelector("#companySearch")
let $returnDiv = document.querySelector("#ex4")
const vowels = ["a", "e", "i", "o", "u"]
let counter = 0

function countVowels(string, vowels) {
    for(let value of string) {
        vowels.forEach(vowel => {
            if(value === vowel) {
                counter++
            }
        })
    }
    return counter
}


$textBox.addEventListener("keyup", event => {
    if(event.keyCode === 13) {
        let vowelNum = countVowels($textBox.value.toLowerCase(), vowels)
        document.querySelector("#ex4").innerHTML = `<div>${vowelNum}</div>`
        counter = 0
        $textBox.value = ""
        $textBox.placeholder = ""
        $textBox.placeholder = "TRY SOMETHING ELSE"
    }
})