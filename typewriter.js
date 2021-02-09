const sentence = "hello there from lighthouse labs"
let letterIndex = -1

function addLetter(sentence) {
  letterIndex++
  char = sentence[letterIndex]
if (letterIndex < sentence.length) {
  setTimeout( function () {
    process.stdout.write(char)
    addLetter(sentence)
  }, 50)
}
if (letterIndex === sentence.length) {
  process.stdout.write('\n')
}
}

addLetter(sentence)

