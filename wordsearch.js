const transpose = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    } 

    return matrix;
};

const wordSearch = (letters, word) => { 
    if (word === '') return undefined;
    // gives an array of arrays called letters (word search matrix)
    // creates a string out of each of the rows of the letters matrix
    const horizontalJoin = letters.map(ls => ls.join(''));
    console.log(horizontalJoin);
    for (row of horizontalJoin) {
        if (row.includes(word)) {
            console.log('true horizontal');
            return true;
        }
    }
    // transposes matrix so all columns of 'letters' matrix are now rows of 'transposed' matrix
    const transposed = transpose(letters);
    // repeats same process above on new 'transposed' matrix
    verticalJoin = transposed.map(ls => ls.join(''));
    console.log(verticalJoin);
    for (column of verticalJoin) {
        if (column.includes(word)) {
            console.log('true vertical');
            return true
        } 
    };
    // if none of the arrays include the word, then returns false
    console.log('false');
    return false;
};

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'WEFM');

module.exports = wordSearch