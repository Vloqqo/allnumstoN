// Recursive function that stops once input becomes one
// Pushes input to an array then starts function again
function help(input) {
    if ((input) >= 1) {
        myArray.push(` ${input}`)    
        help(input - 1)
    }
// Writes array to document then stops the program
    else
        document.write(myArray.reverse())
        return
}
let myArray = []
help(prompt('Choose Your Number'))