const fs = require('fs');

class DayOne2023 {
  constructor() {
    this.lines = fs.readFileSync('../input1.txt', 'utf8').split('\n');
    console.log(this.partOne());
    console.log(this.partTwo());
  }

  convertWordToNumber(word) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numbers.indexOf(word) + 1; // Returns 0 if word is not found
  }

  partOne() {
    return this.lines.reduce((sum, line) => {
      const digits = line.match(/\d/g) || [];
      const first = parseInt(digits[0], 10);
      const last = parseInt(digits[digits.length - 1], 10);
      if (!isNaN(first) && !isNaN(last)) {
        return sum + parseInt(`${first}${last}`, 10);
      }
      return sum;
    }, 0);
  }

  partTwo() {
    return this.lines.reduce((sum, line) => {
      const regex = new RegExp('one|two|three|four|five|six|seven|eight|nine|\\d', 'g');
      const digitWords = line.match(regex) || [];
      let first = digitWords[0];
      let last = digitWords[digitWords.length - 1];

      first = isNaN(first) ? this.convertWordToNumber(first) : parseInt(first, 10);
      last = isNaN(last) ? this.convertWordToNumber(last) : parseInt(last, 10);

      if (!isNaN(first) && !isNaN(last)) {
        return sum + parseInt(`${first}${last}`, 10);
      }
      return sum;
    }, 0);
  }
}

new DayOne2023();
