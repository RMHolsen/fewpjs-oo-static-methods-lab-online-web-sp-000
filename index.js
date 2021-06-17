class Formatter {
  //add static methods here

  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
    // maybe should be a different method involving forEach and split and so on for a sentence 
    // but it looks like the tests are mostly single words
  }

  static sanitize(string) { 
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
    // I hate RegEx
  }

  static titleize(string) {


    
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from'];
    let title = [];
    let titleArray = string.split(' ');

    for (let i = 0; i < titleArray.length; i++) {
      if (i === 0) {
        title.push(this.capitalize(titleArray[i]))
        // if the word is at position 0, capitalize it whatever
      } else {
        if (exceptions.includes(titleArray[i])) {
          title.push(titleArray[i])
          // if any word not at position 0 is included in the exceptions array, push it as is
          // maybe in a more practical converter this would be changed to all lowercase or something IDK. 
          // I keep thinking of edge cases from the project
        } else {
          title.push(this.capitalize(titleArray[i]))
          // otherwise if the word not at position 0 is not in the exceptions array, capitalize and push it
        }
      }
    } 
    return title.join(' ');
    // track your parentheses better
  }

}
