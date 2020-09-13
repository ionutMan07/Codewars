//list filtering

function filter_list(l) {
  // Return a new array with the strings filtered out
  let list = [];
  for (let char of l) {
    if (typeof char === "number") {
      list.push(char);
    }
  }
  return list;
}
filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123]);

//vowel counting

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  var vowels = ["a", "e", "i", "o", "u"];
  var strArray = str.split("");
  for (let char of strArray) {
    if (vowels.indexOf(char) !== -1) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
getCount("adapoirewiernlkdhf");

/* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
*/

function hello(name) {
  if (name === undefined){
    return 'Hello, World!'
  }else if (name === ''){
    return 'Hello, World!'
  }else
  return 'Hello, ' + name[0].toUpperCase() + name.substring(1).toLowerCase() + '!';
}

function hello(name) {
  return name ? 'Hello, ' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!' : 'Hello, World!';
}

function hello(name) {
  return name ? 'Hello, ' + name[0].toUpperCase() + name.substring(1).toLowerCase() + '!' : 'Hello, World!';
}

function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}